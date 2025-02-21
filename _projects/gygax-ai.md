---
title: "Gygax AI"
excerpt: A Generative AI-powered Dungeon Master's assistant that helps DMs roll dice, look up rules, and quickly generate random NPCs and descriptions.
coverImage: /assets/blog/gygax-ai/gygax-ai-cover.png
bannerImage: /assets/blog/gygax-ai/gygax-ai-banner.png
ogImage:
  url: /assets/blog/gygax-ai/gygax-ai-cover.png
date: 2023-10-17
ctas:
  - label: "View the Project"
    url: "https://github.com/DVDAGames/local-tabletop-ai-demo"
price: "FREE"
---

Gygax AI is a demo of a local AI-powered Dungeon Master's assistant that uses Retrieval Augmented Generation (RAG) to answer questions about the Fifthe Edition Systems Reference Document (SRD) which we parse and store in a local vector database.

::video{src=/assets/blog/gygax-ai/gygax-ai-demo.mp4}

**Note**: This demo was specifically created to illustrate running local Large Language Models (LLMs) on low-powered hardware and the project was created and demoed on a 2012 MacBook Pro.

It's also empowered with function calling to roll dice using the [DVDAGames d20 library](https://github.com/DVDAGames/js-die-roller).
