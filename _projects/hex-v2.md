---
title: "Hex v2 Web Application"
excerpt: An interactive implementation of Goblin's Henchman's Hex Flower Engine that allows you to create, share, and run your own Hex Flower Engines across all of your devices. This version supports user accounts, and includes an interactive Hex Flower Engine Editor and the Garden, where game masters can publish their Hex Flower Engines for others to use.
coverImage: /assets/blog/hex-flower-engine/hex-v2-square.png
bannerImage: /assets/blog/hex-flower-engine/hex-v2.png
ogImage:
  url: /assets/blog/hex-flower-engine/hex-v2.png
date: 2026-02-08
ctas:
  - label: "Start Hex Flowering"
    url: "https://hex.dvdagames.com/"
price: "FREE"
---

This is the new v2 version of the legacy [React Hex Flower Engine](/projects/hex-flower-engine/) that I originally created for my own use as a Tempest Cleric in a D&D campaign, because I want to use it to map out some specific magical effects in a new homebrew world that I am about to run a campaign in, and I wanted to be able to easily share the Hex Flower Engine and its current state with my players.

The [Hex Flower Engine](https://goblinshenchman.wordpress.com/2018/10/25/2d6-hex-power-flower/) is an ingenious invention from [Goblin's Henchman](https://goblinshenchman.wordpress.com/) that gives Game Masters (GMs) and Dungeon Masters (DMs) a way to generate random results that are more predictable and feel more realistic than a simple table or a single die roll.

> A versatile game engine using 2D6 and a 19-Hex Flower (it’s like a random table, but with a memory).

It relies on rolling `2d6` (two six-sided dice) and using the results to decide which direction to move in a grid of 19 hexagons laid out in an even larger hexagon.

[Goblin's Henchman has written way more than I ever could describing the various use cases for and ideas behind the engine](https://goblinshenchman.wordpress.com/category/hex-flower/), so I'll leave that to them.

This particular implementation of their ideas is a simple React-based web application hosted on Cloudflare Pages and using Cloudflare D1 to store engines and state so that they can be shared across devices. The code is entirely open source, so you can easily fork it to tweak to your liking, or submit an Issue or Pull Request for some feature you would like to see.
