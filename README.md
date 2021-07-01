[Dogbird](https://pillowfishsticks.github.io/MP2-Catbird/) was designed, built, and deployed, by myself, Mark Percy as the second project for the Code Institute Full Stack Web 
Development diploma. Is it a dog? Is it a bird? No, its Dogbird! A game of skill, luck, and chance. You need to dodge pipes, catch 
treats and fly like your life depends on it. Best of luck!

## Table of Contents
1. [UX](#ux)
    - [Goals](#goals)
        - [Visitor Goals](#visitor-goals)
        - [Site Owner Goals](#site-owner-goals)
    - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)

2. [Features](#features)
    - [Existing Features](#existing-features)
    - [Features for Future Releases](#features-for-future-releases)

3. [Technologies Used](#technologies-used)
    - [Tools](#tools)
    - [Libraries](#libraries)
    - [Languages](#languages)

4. [Testing](#testing)
    - See seperate [TESTING.md](TESTING.md) file.

5. [Deployment](#deployment)
    - [Github Deployment](#heroku-deployment)
    - [How to run this project locally](#how-to-run-this-project-locally)
 
6. [Credits](#credits)
    - [Content](#content)
    - [Images](#images)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

----

# UX

## Goals

### Visitor Goals

The target audience for Dogbird are:
- People who enjoy playing games. 
- People who are interested in playing games online. 

User goals are:
- To play a fun game with sound effects. 
- Information about the game and how to play it. 
- To have information on game controls.
- To be be able to see my highscores whilst playing.  

### The Dogbird's Goals

The goals of Dogbird are:
- To provide a platform for users to be able to play a fun game. 
- Provide information about the game and how to play it. 
- Provide information on the controls used to play the game. 
- Ensure users are able to see their highscores whilst playing the game. 

## User Stories

As a visitor to the Dogbird game I expect/want/need:

1. To be able to easily find the information I am looking for, the layout needs to make sense so that I am not put off. 

2. The site to be laid out in a way that is easy to navigate, so that I can find what I need. 

3. The site to be responsive and navigable for various device sizes; desktop, tablet, and phone. For the content to look good 
   on all of the devices.

4. To learn more about Dogbird. 

5. To learn how to play the game and the controls needed to do so. 

6. To have information on the rules of the game. 

7. To be able to see my highscores after each of my games. 

8. For the game to have power ups that boost my score.

9. A timer to be displayed on the game to keep track of game time. 

## Design Choices

Dogbird has a fun feel to it, displaying the game information in a quirky and easy to read manner, with the game easily accessable. 
The following design choices were made bearing this in mind:

### Fonts
- The primary font 'Press Start 2P' was chosen to be the main text of this site as it mimics an arcade gaming font, giving that retro
  arcade feel to it. 

- The secondary font 'Anton' was chosen for the body of the accordian as it was a suggested pairing on Google fonts. 

### Colours
- Black: #000000
- White: #FFFFFF
- Bright pink: #FF1493
- Bright green: #32CD32
- Bright purple: #FF00FF

- Black was chosen to be the background color so that bright colors could be used in the foreground. White was chosen for the text as
  it is easy to read. Bright green was chosen for the sub-headings and start button as it is bright and fun and reminds one of an 
  arcade game. The bright pink is used for the accordian as it ties in with the other colors used. 

## Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the design and planning process for this project. 

- [Wireframe for desktop](/images/wireframes/wireframe1.png)
- [Wireframe for tablet and mobile](/images/wireframes/wireframe2.png)

# Features
 
## Existing Features

![Dogbird](/images/dogbird.png)

**Game**
- The game section outlines some informatioon about Dogbird, including About, Rules, and Controls, in the form of an accordian. 
- About includes more information on Dogbird. 
- Rules includes information how to play the game and how to increase your score. 
- Controls includes information on the controls needed to play the game. 

**Dogbird**
- This section includdes the actual game which is on a canvas. 
- It includes a start button at the bottom of the canvas. 
- The game includes sound effects when playing. 
- A timer displays once the game starts. 
- The game character falls faster at 10, 30, and 90 secoonds. Making the game more difficult the longer users play. 

**Highscore**
- This section includes a list of all the scores a user gets when playing. 
- Users are able to compare their different scores to track their progress. 

**Responsive layout**

- **In desktop view**  The Game section is on the left, Dogbird is in the center, and the Highscore section is on the right. 

- **In tablet and mobile view**  everything is stacked, with the Game section on top, followed by Dogbird, and finally the 
  Highscore section. 

## Features for Future Releases

1. **Add powerups**
    - Add more power ups to increase the users score when caught. 
    - Negative power ups that could slow down the users character or decrease their score. 

2. **Add different difficulty levels**
    - Have different difficulty levels for the user to choose from, including easy, medium, and difficult. 
    - Each level will come with its own power ups and an increase in the speed of the game. 

3. **Add user functionality**
    - Users need to create a username when they want to play. 
    - Users will be able to compare their scores with other users. 

4. **Character choice**
    - Users have the choice of different characters to play with. 
    - When starting a new game, users are able to choose a new character to play with. 

# Technologies Used

### Tools

- [GitHub](https://github.com/) to store and share all project code remotely. 
- [Gitpod](https://www.gitpod.io/) - IDE (Integrated Development Environment) used to write the code.
- [Balsamiq](https://balsamiq.com/) to create the wireframes for this project.

### Libraries
- [JQuery](https://jquery.com) to simplify DOM manipulation.
- [Bootstrap](https://www.bootstrapcdn.com/) to simplify the structure of the website and make the website responsive easily.
- [Google Fonts](https://fonts.google.com/) to style the website fonts.

### Languages
- This project uses HTML, CSS, and JavaScript programming languages.

# Testing 
 
- See seperate [TESTING.md](TESTING.md) file. 

# Deployment

## GitHub Deployment

This project is hosted in GitHub pages

1. On the menu on the top of the project's repository on GitHub select **Settings.** 
2. Scroll down to the GitHub **Pages** section. 
3. Inside that section, click on the drop down menu under **Source** and select **Master Branch**. 
4. The page refreshes auttomatically and the website is now deployed. 
5. The link to the webpage is in the GitHub **Pages** section down below. 

## How to run the project locally 

To clone this project from GitHub

1. Under the repository's name, click **Clone or download**. 
2. In the **Clone with HTTPs** section, copy the given URL. 
3. In your IDE of choice, open **Git Bash**. 
4. Change the current working directory to the location where you want the cloned directory to be made. 
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the clone will be created. 

# Credits

## Content
- [freeCodeCamp](https://www.freecodecamp.org/) provided code for this project. 
- [Mixkit](https://mixkit.co/) was used to create the MP3 sounds for Dogbird. 

## Images
- All images were sourced from [CleanPNG](https://www.cleanpng.com/).
- Images were resized using [Online PNG Tools](https://onlinepngtools.com/). 

## Code

- The following websites helped me understand and create my website, by viewing examples and explanatons.
    - [W3schools](https://www.w3schools.com/)
    - [Stack Overflow](https://stackoverflow.com/)

- The following website provided inspiration for my website.
    - [Flappy Bird](https://flappybird.io/)

- The README file was taken from Anna Greave's 'The House of Mouse' project to use as a template.
    - [The House of Mouse by Anna Greaves ](https://github.com/AJGreaves/thehouseofmouse)

## Acknowledgements

 - Special thanks to my mentor Precious, for his time, and guidance with this project. 
 - Code Institute tutors for helping support and guide me in the right direction with my code.