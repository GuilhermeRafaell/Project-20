# Portfolio - Atleta & Desenvolvedor

Um portfólio pessoal moderno que une a paixão pelo atletismo com a excelência em desenvolvimento de software. Este projeto apresenta conquistas esportivas, projetos técnicos e habilidades profissionais em uma interface elegante e responsiva.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[React](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis e customizáveis
- **[React Query](https://tanstack.com/query/latest)** - Gerenciamento de estado assíncrono
- **[React Router](https://reactrouter.com/)** - Roteamento para aplicações React
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones

## 📋 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base do shadcn/ui
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── HeroSection.tsx # Seção principal
│   ├── AboutSection.tsx # Sobre
│   ├── AchievementsSection.tsx # Conquistas esportivas
│   ├── ProjectsSection.tsx # Projetos técnicos
│   ├── SkillsSection.tsx # Habilidades
│   ├── ContactSection.tsx # Contato
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
└── test/               # Arquivos de teste
```

## 🎯 Funcionalidades

- ✨ Design moderno com tema dark
- 📱 Totalmente responsivo
- 🎨 Componentes reutilizáveis com shadcn/ui
- 🔄 Navegação suave entre seções
- 🎭 Animações e transições elegantes
- 🧪 Testes unitários configurados
- 📦 Build otimizado para produção
- 🔍 SEO-friendly

## 💻 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Bun](https://bun.sh/) ou npm/yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GuilhermeRafaell/Project-20.git
```

2. Acesse a pasta do projeto:
```bash
cd Project-20
```

3. Instale as dependências:
```bash
bun install
```
ou com npm:
```bash
npm install
```

### Executar em desenvolvimento

```bash
bun run dev
```
ou com npm:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção

```bash
bun run build
```
ou com npm:
```bash
npm run build
```

### Preview da build

```bash
bun run preview
```
ou com npm:
```bash
npm run preview
```

## 🧪 Testes

Executar testes:
```bash
bun run test
```

Executar testes em modo watch:
```bash
bun run test:watch
```

## 📝 Scripts disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Gera build de produção
- `build:dev` - Gera build em modo desenvolvimento
- `preview` - Visualiza a build de produção
- `lint` - Executa o ESLint
- `test` - Executa os testes
- `test:watch` - Executa os testes em modo watch

## 🚀 Deploy

O projeto pode ser facilmente implantado em plataformas como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Basta conectar o repositório e a plataforma detectará automaticamente as configurações do Vite.

## 📄 Licença

Este projeto está sob licença privada.

---

Desenvolvido com 💙 e café
