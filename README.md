# Blus-3D

Landing page e formulario de orcamento para impressao 3D, com resumo do pedido e envio direto para WhatsApp.

## Principais recursos

- Formulario completo com dados do cliente, endereco e detalhes da peca.
- Resumo do orcamento com valor estimado.
- Botao para enviar os dados pelo WhatsApp.
- Tutorial embutido para extrair tempo e peso do MakerWorld.
- Persistencia local para nao perder dados ao recarregar.

## Estrutura do projeto

- `app/`: rotas e layout da aplicacao (App Router).
- `app/page.jsx`: pagina inicial.
- `app/layout.jsx`: layout base.
- `app/globals.css`: estilos globais.
- `public/images/`: imagens usadas na interface.
- `next.config.js`: configuracao do Next.js.
- `tailwind.config.js` e `postcss.config.js`: configuracao do Tailwind e PostCSS.
- `Dockerfile` e `.dockerignore`: build e runtime com Docker.
- `package.json`: scripts e dependencias

## Como usar

### Requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+
- Git (para clonar o repositorio)
- Docker (opcional, para rodar em container)

### Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### Build e producao

```bash
npm run build
npm run start
```

### Scripts disponiveis

- `npm run dev`: servidor local de desenvolvimento.
- `npm run build`: gera build de producao.
- `npm run start`: inicia o servidor em modo producao.
- `npm run lint`: roda o linter (se configurado).

### Docker

```bash
docker build -t blus-3d .
docker run -p 3000:3000 blus-3d
```

## Deploy

Suba o repositorio no GitHub e importe no Vercel.
verificar
