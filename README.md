# QR Fast - Gerador de QR Codes

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green)](LICENSE)

## Descrição do Projeto

QR Fast é uma ferramenta prática e intuitiva para criação e customização de QR Codes, desenvolvida para acelerar a transformação digital. Nossa missão é capacitar empresas e usuários individuais a conectar seus conteúdos e serviços ao mundo digital de forma imediata, sem barreiras técnicas.

![Tela inicial do QR Fast](https://github.com/user-attachments/assets/c2555579-ff9e-45e3-b168-1a358ace350c)

## Objetivo Geral

A missão do **QR Fast** é acelerar a transformação digital por meio de uma solução simples e eficiente para a geração e personalização de QR Codes. Eliminar a complexidade do processo de criação de códigos, permitindo que nossos clientes economizem tempo e recursos enquanto transmitem suas mensagens de maneira segura e personalizada, é o foco principal deste projeto.

---

## Funcionalidades e Valiosidade

- **Geração Instantânea:** Converte links em QR Codes em tempo real, eliminando etapas desnecessárias.
- **Customização Integrada:** Oferece opções para alterar cores, tamanho e incluir logotipos.
- **Download Prático:** Permite baixar o QR Code gerado em formatos adequados para web e impressão.
- **Suporte e Orientação:** Página de ajuda/FAQ bem estruturada para resolver dúvidas comuns e orientar o usuário.
- **Design Minimalista:** Identidade visual moderna e profissional que mantém o foco na funcionalidade sem distrações.

---

## Problemas que ele Resolve

- **Complexidade desnecessária:** Elimina a necessidade de desenvolver funções customizadas para geração e personalização de QR Codes.
- **Tempo perdido:** Gera QR Codes de forma imediata, agilizando a comunicação digital de empresas e usuários.
- **Barreiras técnicas:** Permite que qualquer pessoa, independentemente do conhecimento técnico, crie QR Codes com qualidade profissional.

---

## Aspectos Técnicos

### Stack e Bibliotecas

#### Front-end

- **Ferramenta de Build:** [Vite](https://vitejs.dev/) – Ambiente de desenvolvimento rápido e otimizado.
- **Linguagens e Frameworks:**
  - HTML, CSS, JavaScript e TypeScript.
  - **React:** Para criar uma Single Page Application (SPA) moderna e responsiva.
  - **SCSS:** Para estilização avançada e manutenção modular dos estilos.
- **Bibliotecas para UI e Funcionalidades:**
  - **Bootstrap & React-Bootstrap:** Proporcionam um design responsivo e componentes prontos para uma interface moderna.
  - **React Tooltip:** Adiciona interatividade com dicas contextuais.
- **Biblioteca para QR Code:**
  - [qrcode.react](https://www.npmjs.com/package/qrcode.react) – Gera QR Codes de forma simples e eficiente.
- **Ferramentas de Desenvolvimento e Qualidade:**
  - **ESLint e Plugins:** (incluindo eslint-plugin-react-hooks e eslint-plugin-react-refresh) para garantir um código limpo e aderente às melhores práticas.
  - **TypeScript & @types:** Asseguram segurança e consistência de tipos durante o desenvolvimento.
  - **Sass:** Para estilização avançada utilizando recursos do SCSS.
  - **@vitejs/plugin-react:** Otimiza o desenvolvimento com React dentro do ambiente Vite.

Essa combinação de tecnologias garante um desenvolvimento ágil, robusto e alinhado com as melhores práticas de desenvolvimento web moderno.

---

## Estrutura Geral do Projeto

A organização do projeto QR Fast está estruturada para aproveitar ao máximo as tecnologias utilizadas, seguindo a abordagem de Vite, React, TypeScript e SCSS, com duas páginas principais (Home e FAQ):

```plaintext
qr-fast/
├── public/
│   └── (arquivos estáticos adicionais, se necessário)
├── src/
│   ├── assets/             // Imagens, fontes e outros arquivos estáticos
│   │   └── images/
│   │       ├── logo.png       // Logo da QR Fast
│   │       └── favicon.ico    // Favicon do site
│   ├── components/         // Componentes reutilizáveis
│   │   ├── RootLayout/
│   │   │   ├── RootLayout.tsx         // Layout raiz que envolve o app
│   │   │   └── RootLayout.module.scss // Estilos específicos do RootLayout
│   │   ├── FAQAccordion/
│   │   │   ├── FAQAccordion.tsx         // Componente de FAQ (expandir/retrair)
│   │   │   └── FAQAccordion.module.scss // Estilos específicos do FAQAccordion
│   │   ├── Header/
│   │   │   ├── Header.tsx             // Cabeçalho (logo, navegação)
│   │   │   └── Header.module.scss      // Estilos específicos do Header
│   │   ├── Footer/
│   │   │   ├── Footer.tsx             // Rodapé
│   │   │   └── Footer.module.scss      // Estilos específicos do Footer
│   │   └── QRCode/
│   │       ├── QRCodeGenerator/
│   │       │   ├── QRCodeGenerator.tsx         // Input de URL, visualização do QR e botões de customização/download
│   │       │   ├── QRCodeGenerator.module.scss // Estilos específicos do QRCodeGenerator
│   │       │   ├── AdvancedOptions.tsx         // Opções avançadas de customização
│   │       │   └── AdvancedOptions.module.scss // Estilos das opções avançadas
│   │       ├── QRCodeDisplay/
│   │       │   ├── QRCodeDisplay.tsx           // Painel com controles de cor, tamanho e upload de logotipo
│   │       │   └── QRCodeDisplay.module.scss    // Estilos específicos do QRCodeDisplay
│   │       └── QRCodeActions/
│   │           ├── QRCodeActions.tsx            // Botões de copiar e baixar o QR Code
│   │           └── QRCodeActions.module.scss     // Estilos específicos do QRCodeActions
│   ├── hooks/                // Hooks personalizados
│   │   ├── useCustomIcon.ts     // Gerencia ícone personalizado do QR Code
│   │   ├── useCopyQRCode.ts     // Lógica de cópia do QR Code
│   │   └── useDownloadQRCode.ts // Lógica de download do QR Code
│   ├── pages/                // Páginas da aplicação
│   │   ├── Home.tsx            // Página principal de geração de QR Code
│   │   └── FAQ.tsx             // Página de Ajuda/FAQ
│   ├── styles/               // Arquivos SCSS globais
│   │   ├── _variables.scss   // Variáveis (cores, fontes, tamanhos)
│   │   └── main.scss         // Estilos globais (reset, layout base, etc.)
│   ├── App.tsx               // Componente raiz que gerencia o layout geral
│   ├── main.tsx              // Ponto de entrada do React (importado no index.html)
│   └── router.tsx            // Configuração das rotas (React Router)
├── .gitignore                // Arquivos e pastas ignorados pelo Git
├── eslint.config.js          // Configurações do ESLint
├── index.html                // Arquivo HTML principal que carrega o app React
├── package.json              // Dependências, scripts e configurações do projeto
├── tsconfig.app.json
├── tsconfig.json             // Configuração principal do TypeScript
├── tsconfig.node.json
├── vite.config.ts            // Configuração do Vite (build e desenvolvimento)
├── LICENSE                   // Licença do projeto
└── README.md                 // Documentação do projeto
```

## Como Contribuir

Contribuições são bem-vindas! Se você deseja colaborar com o QR Fast, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

Certifique-se de seguir as boas práticas de desenvolvimento e o guia de estilo do projeto.

---

## Contato

Para dúvidas, sugestões ou feedback, entre em contato:

- **Email:** [gabrieldg0885@gmail.com](mailto:gabrieldg0885@gmail.com)
- **GitHub:** [Gabriel Dias](https://github.com/Gab0885)

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
