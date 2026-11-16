# Developing in Lisbon — Demos

Sites-demonstração de estabelecimentos locais (restaurantes, cafés, barbearias, lojas) criados pelo estúdio **Developing in Lisbon** para mostrar aos donos.

Cada demo é uma página **mobile-first** em HTML, numa pasta própria, publicada automaticamente por **GitHub Pages**.

## 🔗 Montra ao vivo

**https://developinginlisbon-sudo.github.io/Demos/**

A página inicial lista todas as demos com link direto para cada uma.

## 📁 Estrutura do repositório

```
Demos/
├── index.html              → Montra: hero da marca + lista de demos
├── assets/                 → Identidade Developing in Lisbon
│   ├── dil-logo.svg        → Logótipo oficial
│   ├── rua-poster.jpg      → Poster da hero (Chiado)
│   └── rua-tall.mp4        → Vídeo da hero (Chiado, Lisboa)
├── .nojekyll               → Faz o GitHub Pages servir HTML puro
├── README.md               → Este ficheiro
└── <nome-do-estabelecimento>/
    └── index.html          → A demo (uma página, mobile-first)
```

A montra reproduz o design da primeira página de **developinginlisbon.com**
(logótipo, vídeo do Chiado, tipografia Archivo e o gradiente-assinatura),
com a lista de demos por baixo, na mesma linguagem visual.

Cada estabelecimento tem a **sua própria pasta**, em minúsculas e com hífens
(ex.: `tasca-do-manel/`, `barbearia-central/`). O link público fica:

```
https://developinginlisbon-sudo.github.io/Demos/<nome-do-estabelecimento>/
```

## ✅ Princípios de cada demo

- **Mobile-first** — pensada primeiro para o telemóvel, onde o dono a vai ver.
- **Autossuficiente** — HTML + CSS num só ficheiro, sem dependências pesadas; carrega rápido.
- **Pronta a mostrar** — cada demo funciona sozinha e tem um link partilhável.

## 🚀 Como se adiciona uma demo

1. Criar a pasta `<nome-do-estabelecimento>/` com um `index.html`.
2. Adicionar o cartão do estabelecimento à montra (`index.html` na raiz).
3. `git push` para `main` — o GitHub Pages publica em segundos.

## ⚙️ GitHub Pages

- Fonte: branch `main`, pasta raiz (`/`).
- O ficheiro `.nojekyll` garante que todos os ficheiros e pastas são servidos tal como estão.

---

_Estúdio Developing in Lisbon · Lisboa_
