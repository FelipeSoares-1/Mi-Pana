-- Create custom types
create type public.user_role as enum ('donor', 'ngo', 'supplier');

-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text,
  full_name text,
  avatar_url text,
  role public.user_role default 'donor'::public.user_role,
  verified boolean default false,
  
  constraint username_length check (char_length(full_name) >= 3)
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'full_name', 
    coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'donor'::public.user_role)
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
