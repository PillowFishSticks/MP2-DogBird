# The Bookshelf - Testing details

[Main README.md file](README.md)

## Table of Contents

1. [Automated Testing](#automated-testing)
    - [Validation services](#validation-services)
2. [User Stories Testing](#user-stories-testing)
3. [Manual Testing](#manual-testing)
    - [Testing undertaken on desktop](#testing-undertaken-on-desktop)
    - [Testing undertaken on tablet and phone devices](#testing-undertaken-on-tablet-and-phone-devices)
4. [Solved bugs](#solved-bugs)
5. [Further Testing](#further-testing)

## Automated Testing

### Validation Services
The following validation services were used to check the validity of the website code.

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML. 

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.

- [JSHint](https://jshint.com/) was used to validate JavaScript.

## User Stories Testing

The following section goes through the user stories identified in the [Ux section of README.md](README.md#UX) to check that the site 
meets those needs.

**As a visitor to Dogbird I expect/want/need:**

1. **To be able to easily find the information I am looking for, the layout needs to make sense so that I am not put off.**
   - The game is displayed on a single page and all information is clearly displayed and labelled. 

2. **The site to be laid out in a way that is easy to navigate, so that I can find what I need.**
  - The game is divided into three easy to read sections; Game, Dogbird, and Highscore. 
  - The Game section includes more information about the game. 
  - Dogbird includes the actual game to play.
  - Highscore is where the users highscores will be displayed. 

3. **The site to be responsive and navigable for various device sizes; desktop, tablet, and phone. For the content to look good on all of the devices.**
   - The use of the site has been extensively tested on desktop, tablet and phone size screens.
   - The user can load the website on mobile, tablet, and desktop devices.
   - All elements have been given a responsive design, so nothing to too squashed, squeezed or hard to read on any screen size a user might be using.

4. **To learn more about Dogbird.**
- In the Game section, there is an About section in the accordian, giving more information on the game Dogbird. 

5. **To learn how to play the game and the controls needed to do so.**
   - In the Game section, there is a Controls section in the accordian, explaining the controls of th game.  

6. **To have information on the rules of the game.**
   - In the Game section, there is a Rules section in the accordian, outlining the rules of Dogbird. 

7. **To be able to see my highscores after each of my games.**
   - After each game, the users highscore is updated under the high score section. 
   - All highscores will remain there until the user refreshes the page. 

8. **For the game to have power ups that boost my score.**
   - When playing the game, a bone is available for users to hover over, this boosts their score. 

## Manual Testing
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected. 

### Testing undertaken on desktop

All steps on desktop were repeated in browsers: Firefox, Chrome and Safari. 

## Existing Features

1. Game 
    - Clicked on each section of the accordian to ensure it collapsed. 
    - Checked that the accordian changed to bright purple when collapsed. 
    - Checked that the accordian changedd back to bright pink when not collapsed. 
    - Ensure all text was spelt correctly and legiable. 

2. Dogbird
    - Clicked the Start button to ensure that the game began when clicked on. 
    - Used the mouse or touch pad to ensure the game controls worked. 
    - Put the volume to check if the sounds worked. 
    - Lost the game to ensure the score was displayed on the canvas when the game was over. 

3. Highscore 
   - Played a few games to ensure the highscore was updated and displayed after each game. 

### Testing undertaken on tablet and phone devices
All steps below were repeated to test mobile and tablet specific elements on my iPhone and iPad, in both the Safari browser and Google 
Chrome browser.

   - Check that different page sections are stacked on top of one another. 
   - Responsive design was also tested in the Chrome Developer Tools device simulators on all options and orientations.
   - Check that all buttons, and other elements are the correct proportions and easily clickable with a finger.
   - No content squashed or squeezed or disproportionate in size.
   - Confirm that all clicks and swipes operate as expected on touch screen.

## Solved bugs

1. **Game images were too large**
   - Game images were too large and would not fit on the game canvas. 
   - To fix this I resized the images using [Online PNG Tools](https://onlinepngtools.com/). 

2. **The game was running without a start function**
   - I fixed this by adding a start function to the game. 

    ```JavaScript
      function init(){
    ```

3. **The score was not starting at 0 at the beginning of each game**
   - The score was not starting at 0 at the beginning of each game, because the score variable was not within the start function.
   - To fix this I moved the score variable within the start function. 

4. **The pipes were floating on the canvas**
   - The pipes were floating on the canvas and not aligned with the background. 
   - I increased the gap size of the top and bottom pipe to align it with the background. 

5. **The event listener for movement was assigned to any keyboard control**
   - The event listener for movement was assigned to any keyboard control, but it wasn’t responsive for mobile devices.
   - This was fixed by changing the event listener to a mouse control so that it is responsive for mobile devices. 

6. **The bone power up wasn’t appearing randomly in the game**
   - This was fixed by adding used a math random function for it to appear randomly around the screen. 

7. **The game was not resetting after the user collided with a pipe**
   - This bug was fixed by adding a return function within the if statement for the js to end.

    ```JavaScript
       if (dX + dog.width >= rocketpos[i].x && dX <= rocketpos[i].x + rocketNorth.width 
        && (dY <= rocketpos[i].y + rocketNorth.height || dY+dog.height >=
        rocketpos[i].y+constant) || dY + dog.height >= cvs.height - fg.height){
        {
        death.play();
        }
        {
        ctx.drawImage(bg,0,0);
        ctx.font = "20px serif";
        ctx.strokeText("Game over, your score is "+score, 30, 100);
        {
    ```

8. **The highscore list wasn’t saving**
   - The highscore list wasn’t saving, it reloaded when the user clicked start. 
   - This bug was fixed by adding a create element fuction.  line 136 

    ```JavaScript
        var newScore = document.createElement("P");
        var newText = document.createTextNode("Score to beat is "+score);
        newScore.appendChild(newText);
        document.getElementById("scorelist").appendChild(newScore);
        }
        location.return();
        }
        }
    ```

## Further testing
1. Asked friends and family to look at the site on their devices and report any issues they found.
2. Dogbird was viewed on all devices and orientations available in Chrome DevTools. 