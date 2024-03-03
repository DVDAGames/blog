---
title: Hello, World!
excerpt: DVDA Games is part wannabe indie game studio and part open-source tool
  developer.
coverImage: /assets/blog/hello-world/cover.jpg
author:
  name: DVDA Games
  picture: /assets/blog/authors/dvda.png
ogImage:
  url: /assets/blog/hello-world/cover.jpg
preview: true
---
Dead Villager Dead Adventurer (DVDA) Games is named for those fallen souls in the [Diablo games](https://en.wikipedia.org/wiki/Diablo_%28video_game%29) who gave their lives in pursuit of adventure or were just unfortunate enough to encounter the horrors outside of the relative safety of town.

We commemorate their sacrifice, and all the loot - inglorious though most of it may have been - they've bestowed upon us throughout the years.

Here's to you, fallen not-so-heroes! May your deaths not be in vain.

DVDA Games is part wannabe indie game studio and part open-source tool developer.

## Recent projects

We've been working on some fun stuff at the intersection of old-school table-top role-playing games (TTRPGs) and modern technology for the technologically inclined Dungeon Master (DM):

*   [Gygax AI](https://github.com/DVDAGames/local-tabletop-ai-demo): a demo of using a local Large Language Model (LLM) as a DM helper for TTRPGs like [Dungeons & Dragons](https://dnd.wizards.com/). It's a proof of concept for using a language model to generate random descriptions, use tools to roll dice, and reference rules like the [Fifth Edition Systems Reference Document](https://dnd.wizards.com/resources/systems-reference-document) (SRD). The initial demo focuses on low-powered hardware and runs on a 2012 Macbook Pro with using the [Orca Mini 7b model](https://huggingface.co/pankajmathur/orca_mini_7b).

<iframe width="560" height="315" src="https://www.youtube.com/embed/hC-28WmlZRk?si=OMuy7lJBu8NlUNh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Past projects

This has been an idea in the making for a long time, and it will probably continue to linger in the making for a while longer, but we've released a few things over the years:

*   [React Hex Flower Engine](https://dvdagames.github.io/react-hex-flower-engine/): an implementation of [Goblin's Henchman's Hex Flower Engine](https://goblinshenchman.wordpress.com/2018/10/25/2d6-hex-power-flower/) in React, hosted on GitHub pages. It's a tool for generating random encounters, adventures, and more.  
    ![](/assets/hello-world/hex-flower.gif)
    
    > A versatile game engine using 2D6 and a 19-Hex Flower (it’s like a random table, but with a memory).
    
*   [Roller](https://github.com/DVDAGames/js-die-roller): a TypeScript library for rolling dice with support for complex expressions, variables, and more with random numbers generated with [reduced bias](https://dimitri.xyz/random-ints-from-random-bits/). It powers the React Hex Flower Engine and also includes an [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST) for parsing and evaluating dice expressions like `d20 + 5`, `3d6 + 2d8`, or `max(2d20)`.
    
*   [Elite Dangerous Journal Server](https://github.com/DVDAGames/elite-dangerous-journal-server): a websocket-powered server for the [Elite Dangerous](https://www.elitedangerous.com/) [player journal API](https://elite-journal.readthedocs.io/en/latest/_), written in Node.js. It's a meta-integration tool for capturing and processing journal events from the game in other integrations.
    
*   [hackmud Tools](https://github.com/DVDAGames/hackmud-tools): a collection of optimized and heavily commented JavaScript scripts for the game [hackmud](https://store.steampowered.com/app/469920/hackmud/). It provides heavily commented scripts that automate breaking locks in the game and some basic [code golfing](https://en.wikipedia.org/wiki/Code_golf) knowledge to help your game scripts fit into the character limits.
    
*   [Master of Coin](https://dvdagames.github.io/master-of-coin/): an economy simulator that puts you into the shoes of a newly minted "Master of Coin" in a parody of the world of Westeros from A Song of Ice and Fire (Game of Thrones if you prefer video to the written word). Created for [Ludum Dare 44](https://ldjam.com/events/ludum-dare/44/master-of-coin), the intricacies of simulation took so long that the user interface (UI) was never completed, so it's just some default inputs.
    
*   [Pulsar](https://github.com/DVDAGames/pulsar): a basic space shooter that mixes elements of asteroids and bullet hell games with a shapeshifting system for regenerating your limited ammunition. Created for [Ludum Dare 35](https://web.archive.org/web/20190317153309/http://ludumdare.com/compo/ludum-dare-35/), unfortunately a [misconfigured](https://github.com/DVDAGames/pulsar/blob/master/.gitignore#L2) `.gitignore` lead to the loss of the main application logic, but a cross-platform build of the [final, submitted version](https://github.com/DVDAGames/pulsar/releases/tag/0.2.1) with gamepad support is still available on GitHub.  
    ![](/assets/hello-world/pulsar-demo.gif)
    
    > A mediocre top down shooter that's like if Asteroids and a bullet-hell game both had weird cousins that liked to hang out and they got drunk one weekend and decided to make their own game.
    
*   [Simpledoku](https://github.com/DVDAGames/simpledoku): a basic Sudoku UI with a [poorly implemented Sudoku solver](https://github.com/DVDAGames/simpledoku/blob/master/src/utilities/solver.js) that lead to pre-generating and hardcoding some puzzles rather than generating them on the fly, but had a nice quality of life feature that allowed you to highlight a specific row, column, the intersection of a row and a column, or a subgrid to help you focus on the numbers in each relevant category. It was my first attempt at desktop JavaScript via [Electron](https://www.electronjs.org/) and my last attempt at a game that I don't actually enjoy playing very much.
    
    ![](/assets/hello-world/simpledoku.gif)
    

_P.S. - Huge props to_ [_Kyle Schuller's_](https://github.com/KyleSchuller) _amazing_ [_ArtPOD GPT_](https://chat.openai.com/g/g-uBgm41tj8-artpod) _for the awesome header image!_