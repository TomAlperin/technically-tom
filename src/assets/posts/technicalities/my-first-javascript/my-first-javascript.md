
<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width="700px"" src="assets/posts/technicalities/my-first-javascript/blackjack.jpg" />
</div> 

This last month, I took a course in JavaScript to get myself back into programming and web design. The class included projects to work on that demonstrated each new concept, however I felt I needed an additional challenge.

Years ago I wrote a blackjack game in Pascal and I decided it would be fun to try to rewrite it in JavaScript, seeing what else I might be able to accomplish. I had none of the original code to go on, just the basic concepts of how I organized the game as I could remember them. The original vanilla JavaScript site is no longer available however I have converted the game to Angular and added Solitaire and FreeCell. Here is the result of my efforts so far linked below:

<div class="d-flex justify-content-center">
<a href="https://blackjack.technicallytom.com" target="_blankk"><h3>Technically Blackjack</h3></a>
</div>
This “web app” is my first attempt at writing a complete program in JavaScript. I wanted the site to work on desktop and mobile. It needed to look as much like an app as possible when accessed from mobile, and it needed to save the score and game state. Originally I considered only saving the score, but this would mean a user could refresh the page every time they though they had a bad hand.  This is not to say that the game can not be “hacked.” The entire game is written to run locally in the browser. Anyone with JavaScript skills should be able to figure out how to cheat. I may eventually rewrite the game to have a back-end that protects against this, but since this was just a fun project to get back into programming, I can’t say whether I will do that or not. Right now, I’m liking that when a user goes to play the game, the files are sent from the web server and then there is no more interaction, unless the user refreshes the page.

The game state is stored to “Local Storage” on the client computer after every move, so the browser can be closed at any time and the player will be returned to exactly how the game was when they left. None of this information is sent back to the server.

<div class="d-flex justify-content-center">
<h3>JavaScript For The Win</h3>
</div>
The game uses various CSS tricks and JavaScript to do some animations, like the dealers card flipping over and a little bonus for when the player gets blackjack. The game was written without the use of jQuery. I may add it later, but for now, I wanted to write as much of the code myself as possible. That being said, I have researched all over the web to find different ways to accomplish what I had. I eventually included a sound library called howler, by James Simpson as the basic sound access from JavaScript does not work well on mobile for game sounds for a number of reasons.

The game is now completely functional, although I feel I need to do a few minor tweaks for display on some mobile devices. Insurance has not been implemented for an ace showing on the dealer’s hand and I may not add this at all. When the page first loads, there is a “splash screen” and this is not completed. I wanted make the game available though so friends could try it out and give me some feedback.