---
templateKey: 'blog-post'
path: /blog
title: Classic Arcade Game
date: '2020-11-29T23:46:37.121Z'
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

<!-- @format -->

**Project 3: Classic Arcade Game Clone (72 hrs)** ~ [Udacity Front-End Web Developer Nanodegree Program (https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)

In order to recreate the classic arcade game Frogger, we were provided with visual assets, an image loading utility (resources.js) and a game loop engine (engine.js). I created all of the game logic and the code within app.js to add a number of entities to the game, including player characters, enemies, and gem prizes.

### [**PLAY GAME HERE**](http://klammertime.github.io/P3-Classic-Arcade-Game-Clone/)

## Usage

1. Clone this repository
2. Navigate to your local copy of index.html through your web browser

## Technologies Used

Object-Oriented JavaScript, HTML5 Canvas, HTML5 Drag & Drop

- When you drag and drop a new player onto the board, the background changes color to match the player using a CSS gradient.

## Style Guide Used

[Udacity Front-End Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/)

## Game Directions & Rules

1. The goal is to get your character to the water while avoiding getting hit by the enemy bugs
2. Pick the character you'd like by dragging and dropping your character onto the game board. You are given 5 lives to start (hearts). Keep track of your score at the top
3. Use your keyboard arrow keys to move the player up, down, right, left
4. If a bug hits you, you die, lose a life, and 20 points
5. If you gain a gem by moving on top of it, you gain 20 points
6. If you lose you 5 lives, you lose the entire game, lose 50 points, and your character is reset with new lives
7. If you reach the water, you win, gain 40 points and 1 life

## Resources

- **Udacity Supporting Courses**: [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud015) & [HTML5 Canvas](https://www.udacity.com/course/html5-canvas--ud292)
- **Treehouse**: [Coding Your First HTML5 Game](https://teamtreehouse.com/library/coding-your-first-html5-game), [Object Oriented JavaScript](https://teamtreehouse.com/library/objectoriented-javascript), [Understanding 'this' in JavaScript](https://teamtreehouse.com/library/understanding-this-in-javascript), [Interactive Web Pages with JavaScript](https://teamtreehouse.com/library/interactive-web-pages-with-javascript)
- **Pluralsight**: [HTML5 Canvas Fundamentals](https://app.pluralsight.com/player?course=html5-canvas-fundamentals&author=dan-wahlin&name=html5-canvas-m3&clip=10&mode=live)
- **Lynda.com**: [HTML5: Drag and Drop in Depth](http://www.lynda.com/HTML-tutorials/Understanding-HTML5-drag-drop/84812/87645-4.html), [Code Clinic: JavaScript - Using Drag & Drop](http://www.lynda.com/JavaScript-tutorials/Using-drag-drop/369707/386507-4.html), [JavaScript: Events - Dragging & dropping](http://www.lynda.com/JavaScript-tutorials/Dragging-dropping/140780/148737-4.html), [HTML5: Graphics and Animation with Canvas](http://www.lynda.com/HTML-tutorials/Welcome/80782/85030-4.html)
- All game graphics provided from Daniel Cook under Creative Commons: [LostGarden](http://www.lostgarden.com/search/label/free%20game%20graphics)

## Potential New Features

- Use video game icons from http://megaicons.net/
- Use sounds from http://www.freesound.org/ for sound effects
- Use winner images in images library: when win the screen is covered by image then resets and starts again
- Use localStorage to save the score

- [Javascript Game Foundations - State Management](http://codeincomplete.com/posts/javascript-game-foundations-state-management/)
- [How to code a HTML5 game with distinct game state](https://stackoverflow.com/questions/18038502/how-to-code-a-html5-game-with-distinct-game-states)
- [Finite-State Machines: Theory and Implementation](https://gamedevelopment.tutsplus.com/tutorials/finite-state-machines-theory-and-implementation--gamedev-11867)
