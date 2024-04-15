---
title: Summoning Godot
date: 2024-04-15
excerpt: "DVDA Games' experience with Ludum Dare 55: Summoning"
coverImage: /assets/blog/summoning-godot/summoning-godot.png
author:
  name: DVDA Games
  picture: /assets/blog/authors/dvda.png
ogImage:
  url: /assets/blog/summoning-godot/summoning-godot.png
preview: false
---
Is there anything more thrilling, hectic, and humbling than trying to complete a whole game from scratch in a weekend?

Okay, sure, there are all those other things you thought of, but for the nerd sitting at the keyboard? I don't know, probably not.

[Ludum Dare](https://ldjam.com/) is an institution in game development and maybe even the broader gaming industry. Very few things have stood the test of time like Ludum Dare.

Ludum Dare 55 wasn't the first time I've participated in Ludum Dare, but it's certainly the first time I've felt like I succeeded.

This time, the theme was `Summoning,` so I created a retro-inspired adventure game in which you play a cleric who must embrace dark magic to hunt down a dark wizard and stop his unholy ritual.

As is tradition, the game's scope was too large for the timeframe, but it does have a clear start and end, and I'm actually pretty happy with how the [background music](https://github.com/DVDAGames/dark-ritual/raw/main/assets/dark-ritual.wav) turned out.

As is even more of a tradition for me, I ignored all advice to the contrary and used an engine that I have very little experience with, [Godot](https://godotengine.org/).

## Dark Ritual

Dark Ritual puts you in the shoes of a cleric of light trying to stop a dark wizard from summoning an ancient evil.

You'll have to perform a dark blood ritual that allows you to become an ethereal, ghost-like entity to move through the wizard's temple. In the temple you'll find potions to restore your health (allowing you to perform more rituals), keys that unlock chests with powerful artifacts, and puzzles to solve.

Dark Ritual is available on:

- [Ludum Dare](https://ldjam.com/events/ludum-dare/55/dark-ritual): Compo entry
- [GitHub](https://github.com/DVDAGames/dark-ritual): source code, assets, and released builds
- [Itch.io](https://dvdagames.itch.io/dark-ritual): Playable web version and downloads for macOS and Windows builds

**Note**: A more thorough breakdown of the ideation process, initial sketches, and assets will be available soon.

## Tools of the Trade

Creating Dark Ritual was a fun adventure thanks to the awesome folks who have built these tools:

- **Engine**: [Godot](https://godotengine.org/)
- **Art**: [Asesprite](https://www.aseprite.org/)
- **Sound**: [BeepBox](https://www.beepbox.co/) & [ChipTone](https://sfbgames.com/chiptone/)
- **Distribution**: [Itch.io](https://itch.io/)

## Lessons Learned

- **Don't pick brand-new tools.** Seriously, just don't do it. I booted up [DefleMask](https://www.deflemask.com/) to build out my music but could not get it to cooperate, which led to wasting a bunch of time trying to learn a new tool when I could have just used something familiar and cranked out a tune.
- **Export a test before the jam starts.** Godot was so new for me that I had never exported a game from it which led to a stressful submission hour where I was frantically trying to figure out what export settings to use and how to make the game load once I had uploaded it to [Itch.io](https://dvdagames.itch.io/dark-ritual) and the [Ludum Dare site](https://ldjam.com/events/ludum-dare/55/dark-ritual).
- **Things fall apart.** I only had time to animate a few sprites, but I felt pretty good about them. Unfortunately, Godot was not cooperative with actually animating my sprites, and what time I did spend on them seems to have been wasted.

## A 48 Hour Ritual

Are you curious about what making a game in 48 hours looks like?

*Spoiler Alert*: It's like 24 hours of furious coding, 16 hours of sleeping, and 4 hours of cursing, debugging, and regretting your choices.

### 2024-04-12: Theme Announced

The theme was announced at 21:00 Eastern time, but it was my last day at my job and we went out for some celebratory drinks and dinner, so I really only had time to quickly check the announcement on my way back home and brainstorm a couple of ideas before bed.

### 2024-04-13: Summoning the Game

The dog woke me up around 07:00 so I walked him and then spent an hour brainstorming over coffee. By 09:00, I had the placeholder art you see in the game - it turns out it wasn't so "temporary" after all, and by 09:30, development had started.

Around 17:00 I had the background music, basic movement, and transformation system.

By 22:00, when I called it a night (25 hours after the start of the Compo), I had the health system and the ability to move between screens and remember the player's position.

### 2024-04-14: Deadline

The dog didn't wake me up quite as early this time, so coffee and level design on paper started around 08:30. By 09:15, I had most of the levels mapped out, but I wasn't sure what the penultimate and boss room would be yet.

By 14:00 I had chests, keys, potions, and the ability to cast the Firebolt spell. At 17:00 I had figured out puzzles with lighting braziers. After that, it was a mad dash to 20:00 trying to build and finalize the levels.

At 20:45, I discovered a massive bug in my "final playtest" that prevented the game from ending. At 21:00, I had "fixed" the bug and was trying to export the game. At 21:15, I really wished that I had exported something previously and learned how it worked in Godot.

### 2024-04-15: Bugfix

At 09:30, I realized that I hadn't saved the bugfix to the final scene, and the game would still get stuck in an infinite loop when you beat the final puzzle. I pushed out the bugfix build and gave myself a high five for actually finishing this thing—even if it's kind of janky.

## Past Ludum Dare Entries

- **Ludum Dare 44**: [Master of Coin](https://dvdagames.github.io/master-of-coin/) is an economy simulator that puts you into the shoes of a newly minted "Master of Coin" in a parody of the world of Westeros from A Song of Ice and Fire (Game of Thrones if you prefer video to the written word). Created for [Ludum Dare 44](https://ldjam.com/events/ludum-dare/44/) in April 2019.
- [**Ludum Dare 35**]: [Pulsar](https://github.com/DVDAGames/pulsar) is a basic space shooter that mixes elements of asteroids and bullet hell games with a shapeshifting system for regenerating your limited ammunition. Created for [Ludum Dare 35](https://web.archive.org/web/20190317153309/http://ludumdare.com/compo/ludum-dare-35/) in April 2016.
- I've also joined and ultimately given up on at least two other Ludum Dare events.