# Casamento Isabelinha e João

Site de casamento em Astro, 100% estático, mobile-first, preparado para publicar no GitHub Pages.

## Requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
```

## Desenvolvimento local

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

## Build de produção

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

A pasta final para publicar é `dist/`.

## Conteúdo editável

- Conteúdo principal: `src/content/site.json`
- Conteúdo de presente (público): `src/content/presente.json`

## Carrossel automático de imagens

- Coloca as fotos em `public/images/carrossel/`.
- O site carrega automaticamente todas as imagens dessa pasta no carrossel.
- Não precisas de editar `src`/`alt` manualmente; o `alt` é gerado a partir do nome do ficheiro.
- Formatos suportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`.
- `.webp`/`.avif` são recomendados por performance, mas não são obrigatórios.

## Deploy no GitHub Pages

### 1. Criar repositório

Publica este projeto num repositório GitHub (ex.: `isabelinhaejoao`).

### 2. Workflow já incluído

Este projeto já inclui `/.github/workflows/deploy.yml` com deploy automático para GitHub Pages.

O workflow calcula automaticamente:

- `BASE_PATH` correto para páginas de projeto (`/<repo>/`) ou root (`/`) quando o repositório é `<owner>.github.io`
- `SITE_URL` com base no owner (`https://<owner>.github.io`)

### 3. Ativar Pages

No repositório GitHub:

- `Settings > Pages`
- `Build and deployment`: `GitHub Actions`

## Estrutura

```text
src/
  components/
    Hero.astro
    ImageCarousel.astro
    EventCard.astro
    MapButtons.astro
    CalendarIcsLink.astro
    GiftCard.astro
    FAQAccordion.astro
  content/
    presente.json
    site.json
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    evento.astro
    presente.astro
    faq.astro
public/
  images/carrossel/
  images/gift-placeholder.svg
.github/workflows/
  deploy.yml
```
