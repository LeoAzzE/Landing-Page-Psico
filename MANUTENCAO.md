# Essência Mind – Guia de manutenção da landing page

## Estrutura do projeto

- **`app/`** – Páginas e layout (Next.js App Router)
  - `layout.jsx` – Layout global e metadados
  - `page.jsx` – Página inicial (todas as seções)
- **`components/`** – Componentes reutilizáveis
  - `Header.jsx` – Cabeçalho com logo, menu e CTAs
  - `Hero.jsx` – Hero com slogan e botões
  - `Services.jsx` – Seções “Para você” e “Para empresas”
  - `Team.jsx` – Equipe (fotos e textos)
  - `FAQ.jsx` – Perguntas frequentes (acordeão)
  - `Commitment.jsx` – Nosso compromisso
  - `Contact.jsx` – Contato e CTAs
  - `Footer.jsx` – Rodapé
  - `CTAButtons.jsx` – Botões de agendamento
- **`lib/site-config.js`** – **Conteúdo e configuração em um só lugar**

## O que preencher manualmente

Edite **`lib/site-config.js`**:

1. **Contato**
   - `contact.whatsappDigits` – Número com DDD, só dígitos (ex: `5511999999999`) para o link do WhatsApp
   - `contact.email` – E-mail institucional
   - `contact.cnpj` – CNPJ da empresa

2. **Equipe**
   - Para cada pessoa: `bio`, `formation`, `register` (CRP ou CRA)
   - Fotos: coloque as imagens em **`public/images/team/`** com os nomes já indicados no config (`caroline.jpg`, `estela.jpg`, `mario.jpg`) ou altere o campo `image` de cada membro

3. **Logos**
   - Logos já estão em **`public/logo/`**
   - Se usar outro arquivo, altere `site.logo.main` e `site.logo.alternate` no config

## Subpáginas futuras

Quando quiser detalhar serviços ou ter páginas específicas, crie por exemplo:

- `app/para-voce/page.jsx`
- `app/para-empresas/page.jsx`
- `app/equipe/page.jsx`
- `app/nr-1/page.jsx` (NR-1 e riscos psicossociais)
- `app/etica-sigilo/page.jsx` (Código de Ética e Sigilo)

O Header e o Footer usam âncoras (`#para-voce`, `#contato`, etc.). Ao criar rotas, você pode adicionar links no menu em **`components/Header.jsx`** (array `navLinks`) e no **`components/Footer.jsx`** (`footerLinks`).

## Rodar o projeto

- Desenvolvimento: `npm run dev`
- Build: `npm run build`
- Produção: `npm run start`
