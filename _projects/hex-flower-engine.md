---
title: "Hex Flower Engine"
excerpt: An interactive implementation of Goblin's Henchman's Hex Flower Engine in React, using the better random number generator from our TypeScript dice rolling library for rolls that are more fairly distributed.
coverImage: /assets/blog/hex-flower-engine/hex-flower.png
bannerImage: /assets/blog/hex-flower-engine/hex-flower.gif
ogImage:
  url: /assets/blog/hex-flower-engine/hex-flower.gif
date: 2020-07-11
ctas:
  - label: "Run the Engine"
    url: "https://dvdagames.github.io/react-hex-flower-engine/"
price: "FREE"
---
The [Hex Flower Engine](https://goblinshenchman.wordpress.com/2018/10/25/2d6-hex-power-flower/) is an ingenious invention from [Goblin's Henchman](https://goblinshenchman.wordpress.com/) that gives Game Masters (GMs) and Dungeon Masters (DMs) a way to generate random results that are more predictable and feel more realistic than a simple table or a single die roll.

> A versatile game engine using 2D6 and a 19-Hex Flower (it’s like a random table, but with a memory).

It relies on rolling `2d6` (two six-sided dice) and using the results to decide which direction to move in a grid of 19 hexagons laid out in an even larger hexagon.

[Goblin's Henchman has written way more than I ever could describing the various use cases for and ideas behind the engine](https://goblinshenchman.wordpress.com/category/hex-flower/), so I'll leave that to them.

This particular implementation of their ideas is a simple React-based web application hosted on GitHub Pages. The code is entirely open source, so you can easily fork it to tweak to your liking, or submit an Issue or Pull Request for some feature you would like to see.

This was selfishly created for my own use as a Tempest Cleric in a D&D campaign where I wanted to know if there was ever an existing storm that I could use to power up my Call Lightning spell. The DM generously created a version of the Hex Flower Engine for us to use, so I built the campaign an interactive digital version we could rely on each session.