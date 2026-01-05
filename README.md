# 🇻🇪 Mi Pana | Vibecode
> **Conexión directa. Ayuda real.**

![Status](https://img.shields.io/badge/Status-MVP%20Development-yellow)
![Stack](https://img.shields.io/badge/Tech-Python%20%7C%20Next.js%20%7C%20Gemini%20AI-blue)
![License](https://img.shields.io/badge/License-Proprietary-red)

**Mi Pana** é uma plataforma de ajuda humanitária direta que conecta a diáspora venezuelana a necessidades específicas de famílias na Venezuela, garantindo transparência radical através de **Auditoria por Inteligência Artificial**.

🇻🇪 Mi Pana: Plataforma de Ajuda Humanitária Auditada por IA
Slogan: Conexión directa. Ayuda real. Stack: Python (FastAPI) | Next.js | Google Gemini (Antigravity) | WhatsApp API

1. O Manifesto (Visão Geral)
A diáspora venezuelana (mais de 7 milhões de pessoas) representa uma força econômica maior que o PIB de muitos países. A vontade de ajudar quem ficou é imensa, mas é bloqueada por dois fatores: Desconfiança e Opacidade.

Os modelos tradicionais de doação ("Doe para o Fundo X") são caixas-pretas. O doador nunca sabe se o dinheiro comprou comida ou se perdeu na burocracia.

Mi Pana é a resposta tecnológica para esse problema. Nós transformamos a caridade em uma transação peer-to-peer auditada. Nós não pedimos doações; nós facilitamos a compra de itens específicos para pessoas reais, garantindo a entrega através de visão computacional e inteligência artificial.

2. A Mecânica do Produto (Como Funciona)
O sistema opera em um ciclo fechado de 4 etapas, desenhado para gerar confiança absoluta.

Etapa 1: A Vitrine de Necessidades (Sourcing)
ONGs parceiras e líderes comunitários (os "Panas Locais") utilizam nosso Web App para cadastrar necessidades reais e verificadas.

Input: Foto da família, breve história, item necessário (ex: "Insulina", "Cesta Básica", "Material Escolar") e custo exato no fornecedor local.

Validação: O sistema verifica se o preço está condizente com a inflação local (Vibecode Price Scout).

Etapa 2: O Patrocínio Direto (Matching)
O venezuelano no exterior (o "Pana Doador") acessa a plataforma mipana.app.

Experiência: Ele não vê um botão "Doar". Ele vê um mapa e histórias. Ele escolhe: "Vou pagar a cesta básica da Sra. Elena em Maracaibo."

Pagamento: Realizado em Dólar/Euro via Stripe ou Crypto (USDT), garantindo que o valor não seja corroído pela desvalorização do Bolívar até o momento da compra.

Etapa 3: A Execução Logística (Delivery)
A ONG recebe os créditos (não dinheiro vivo) para retirar os produtos nos fornecedores parceiros.

Ação: O voluntário entrega a cesta para a Sra. Elena.

Etapa 4: A Auditoria Antigravity (Proof of Impact)
Este é o diferencial ("Secret Sauce"). Para fechar o chamado, o voluntário deve enviar uma foto da entrega via WhatsApp para o nosso Bot.

O Agente de IA (Gemini Vision): Analisa a imagem em tempo real.

Biometria: É a Sra. Elena da foto original?

Detecção de Objeto: A cesta básica está visível? Os itens conferem?

Metadados: A localização GPS da foto bate com o endereço cadastrado?

Anti-Fraude: Essa foto já foi usada antes? É uma montagem?

O Feedback: Se aprovado, o doador recebe instantaneamente no seu WhatsApp: "Sua ajuda chegou! Veja a foto da Sra. Elena recebendo a cesta agora."

3. Arquitetura Técnica (Vibecode Stack)
O projeto é construído sobre três pilares de engenharia:

A. O Cérebro (Antigravity Core)
Tecnologia: Google Gemini 1.5 Pro (Vertex AI).

Função: É o "Auditor Fiscal Digital". Ele processa imagens não estruturadas e as converte em dados estruturados (JSON) de validação. Ele também atua como interface de chat natural para as famílias e voluntários no WhatsApp.

B. O Corpo (Fullstack Web)
Frontend: Next.js 14 (App Router) + Tailwind CSS + Shadcn UI. Focado em performance mobile e design emocional ("High-Tech Humanitário").

Backend: Python (FastAPI). Escolhido pela velocidade de processamento assíncrono e facilidade de integração com bibliotecas de Data Science e IA.

Database: PostgreSQL (Supabase) com pgvector (para busca semântica de casos similares).

C. A Interface (WhatsApp-First)
Tecnologia: WhatsApp Business API (via Twilio ou Meta Cloud API).

Motivo: Na Venezuela, dados móveis são caros e apps pesados não são baixados. O WhatsApp é a "internet" local. Todo o fluxo operacional da ponta (ONG/Beneficiário) acontece dentro do chat.

4. Modelo de Negócio (Sustentabilidade)
Mi Pana é uma Tech for Good (Negócio Social), não uma ONG. O modelo visa lucro para garantir escalabilidade e independência.

Taxa de Plataforma (B2C): Cobra-se uma taxa de serviço (ex: 5-8%) sobre o valor da transação para cobrir custos de gateway, servidores e manutenção da equipe. O doador é informado: "100% do valor do produto vai para a família. A taxa cobre a tecnologia que garante a entrega."

SaaS White-Label (B2B): Licenciamento da tecnologia "Antigravity Audit" para grandes organizações internacionais (UNICEF, Cruz Vermelha) que precisam auditar suas próprias distribuições em zonas de conflito.

5. Estratégia de Marca e Design
Nome: Mi Pana Arquétipo: O "Cuidador" misturado com o "Inovador". Identidade Visual:

Reinterpretação moderna das cores da Venezuela (Amarelo Ouro, Azul Profundo, Vermelho Coral).

Uso de Glassmorphism (vidro fosco) para transmitir transparência.

Fotografia documental de alta qualidade (dignidade, não miséria).

6. Roadmap de Lançamento (Sprint MVP)
Dia 1-2: Desenvolvimento da Landing Page de Alta Conversão (Next.js) para captar "Membros Fundadores".

Dia 3-4: Desenvolvimento do Backend Python (FastAPI) e integração básica com Stripe.

Dia 5: Integração do Protótipo do Agente Auditor (Antigravity) com WhatsApp para teste de conceito.

Lançamento (Dia 6): Divulgação em comunidades da diáspora em Miami e Madrid.

Mi Pana não é apenas um app. É a infraestrutura digital de confiança necessária para reconstruir um país, um "pana" de cada vez.

---

## 💡 O Problema
A diáspora venezuelana quer ajudar quem ficou, mas enfrenta dois bloqueios:
1.  **Desconfiança:** Medo de que doações financeiras sejam desviadas ou corroídas por ineficiência.
2.  **Opacidade:** Falta de feedback sobre o impacto real da ajuda.

## 🚀 A Solução: "Auditoria Visual via IA"
Em vez de doar para um fundo genérico, o usuário financia um item específico (ex: "Insulina para a Sra. Ana").
A plataforma utiliza o **Vibecode Antigravity (Google Gemini Vision)** para auditar a entrega. O doador recebe uma **foto verificada** do beneficiário recebendo o item diretamente no seu WhatsApp.

---

## ⚙️ Arquitetura do Sistema

O projeto segue uma arquitetura moderna, serverless e focada em APIs.

### 1. Core Stack
* **Backend:** Python (FastAPI)
* **Frontend (Web):** Next.js + Tailwind CSS + Shadcn UI
* **Interface (Mobile):** WhatsApp Business API (via Twilio ou Meta)
* **Banco de Dados:** PostgreSQL (Supabase)
* **Pagamentos:** Stripe Connect
* **AI Engine (The Brain):** Google Gemini 1.5 Flash/Pro (Antigravity)

### 2. Fluxo de Dados (The Loop)
1.  **Captação:** ONG parceira cadastra o caso (Foto + História + Necessidade) via Web App.
2.  **Matching:** Doador seleciona o caso na Landing Page e realiza o pagamento.
3.  **Execução:** ONG recebe os fundos/créditos e realiza a compra local.
4.  **Prova de Entrega:** Voluntário envia foto da entrega via WhatsApp Bot.
5.  **Auditoria AI:** O Agente Antigravity analisa a foto:
    * *Reconhecimento Facial:* É a mesma pessoa do cadastro?
    * *Detecção de Objeto:* A cesta básica/remédio está na foto?
    * *Anti-Fraude:* A foto é original ou duplicada?
6.  **Feedback:** Se aprovado, o Doador recebe a notificação + foto no WhatsApp.

---

## 🛠️ Estrutura do Repositório

```bash
mi-pana-platform/
├── backend/                 # API Python (FastAPI)
│   ├── app/
│   │   ├── agents/          # Lógica do Antigravity (Gemini Prompts)
│   │   ├── api/             # Endpoints (Webhooks Stripe/WhatsApp)
│   │   ├── core/            # Configurações e Segurança
│   │   └── services/        # Lógica de Negócio (Auditoria, Notificações)
│   ├── requirements.txt
│   └── main.py
│
├── frontend/                # Landing Page & Dashboard (Next.js)
│   ├── src/
│   │   ├── components/      # UI (Bento Grid, Cards, Forms)
│   │   └── app/             # Rotas e Páginas
│   └── package.json
│
├── docs/                    # Documentação Técnica e Legal
└── README.md