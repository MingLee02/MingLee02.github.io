---
layout: main
title: "Html 5 game"
description: "Part one - Setting up"
---

<header class='post-title'>
    <span class='date'>
        {{ page.date | date:"%A %-d %B %Y" }} 
    </span>
    <h1 class='title'>Making a Html 5 game</h1>
    <p class='subtitle'>
        Setting up phaser.io
    </p>
</header>

Hello.
This will be my first attempt at building a game.
I Have 3 years web programming experience and i love games, so I thought why not make a game.
These next few posts will document my journey.


Part one - Setup

So my framework of choice is Phasor.  Why Phasor you ask. Its free and the site looks awesome.

Im using these packages for development.

        npm.json:
            grunt
            grunt-open
            grunt-contrib-watch
            grunt-contrib-connect
        bower:
            phaser

grunt connect is used to run a local server. I could also use apache or Lamp (if windows Wamp would be the alt). Grunt connect is the easiest.
Phaser could be installed via npm but im using bower as i find it easier to link in the index file.

You can check out the code <a href="https://github.com/MingLee02/phaser/commit/37c023860a90425247ef240aae7788abd8250b88">here</a> 

Below is a screenshot of the phaser version and the browser can load it.

Thats it for this post.

Thanks for reading.

<img src="{{ site.url }}/assets/images/finished-phaser-setup.PNG"/>
