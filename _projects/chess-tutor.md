---
title: "Chess Tutor"
excerpt: A Generative AI-powered chess tutoring app for beginner players that helps analyze potential moves and allows you to explore your opponent's possible responses before committing to a move.
coverImage: /assets/blog/chess-tutor/knight.png
bannerImage: /assets/blog/chess-tutor/chess-tutor-eval.png
ogImage:
  url: /assets/blog/hex-flower-engine/chess-tutor-eval.png
date: 2024-12-21
ctas:
  - label: "View the Project"
    url: "https://github.com/dvdagames/chess-tutor"
price: "FREE"
---

The goal of this tutor is to help players analyze and understand the impact of each move they make by combining features from the post-game analysis of tools like [chess.com](https://www.chess.com/analysis?tab=analysis) or [lichess](https://lichess.org/analysis) into the real-time play of a game of chess against a bot.

If you find yourself missing an attack from an opponent's knight after you move, in this tutoring environment, you can make your move and then check the legal moves for your opponent's knights before you commit.

### Primary Learning Features

- **Positional Help**: a lost player can right-click on a piece to ask the tutor if moving that piece is a good idea based on the current position
- **Outcome Analysis**: explore the legal moves of the opponent's pieces before committing to their move - the player can take back their move and try another one any number of times before committing to it
- **Real-time Evaluation**: the Stockfish evaluation of the position updates in real-time as each player moves pieces instead of waiting for the game to be over to see what the engine thinks about each position and how it changes over time
- **Commentary and Analysis**: the tutor can be configured to provide an automatic, running commentary as the game progresses or provide commentary only when asked or when the game comes to an end
