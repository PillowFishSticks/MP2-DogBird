[Dogbird]() was designed, built, and deployed, by myself, Mark Percy as the second project for the Code Institute Full Stack Web 
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
    - [Databases](#databases)
    - [Libraries](#libraries)
    - [Languages](#languages)

4. [Testing](#testing)
    - See seperate [TESTING.md](TESTING.md) file.

5. [Deployment](#deployment)
    - [How to run this project locally](#how-to-run-this-project-locally)
    - [Heroku Deployment](#heroku-deployment)
 
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

### Elements on every page

#### Navbar

![Navbar](/static/images/navbar.png)

- The navbar features on every page. It is bright, with a mixture of two colours, creating an ombre effect. 

- **In desktop view**  The navigation bar features the website name ‘The’ Bookshelf' on the far left, and website pages on the far right.
  
- A user who is logged in will see the options of Who we are, Club picks, Your picks, Add book, and Log out. 

- A user or visitor who is not logged in will see the options of Who we are, Log in, and Register. 

- **In tablet and mobile view**  the name remains in the left side of the navigation bar, where users would expect it to be. The burger 
  icon to display the full navigation menu is on the far right. 

#### Footer

![Footer](/static/images/footer.png)

- The footer features on every page. It is deliberatly large and bright to attract visitors to sign up and become members and/or visit 
  The Bookshelf's social media pages. 

- The footer includes a tag line 'Not a Bookshelf member? Sign up here' with a clickable link that takes the user to the register page. 
  This is located on the left hand side of the footer.  

- The footer features links to The Bookshelf's social media accounts for Facebook, Instagram, and Twitter. These icons are located
  on the right hand side of the footer. 

### Who we are

**About The Bookshelf**

![About The Bookshelf](/static/images/who-we-are.png)

- 'Who we are' includes a section about The Bookshelf. This includes a short blurb about The Bookshelf, the founder, and some of the
  different features it includes. 

- The blurb is positioned on the left hand side. 

- An image of the founder is located on the right hand side, shaped in an oval. 

- The blurb and image are encompassed in the same colour as the navbar. This creates a uniform background, blending the navbar with 
  the blurb and image. 

**Why The Bookshelf?**

![Why The Bookshelf?](/static/images/why-the-bookshelf.png)

- This section is located in the middle of the 'Who we are' page. It includes six blocks with verious shapes and colours. Each block 
  includes a unique shape with some information about The Bookshelf. 

- This section is used to create a fun way of telling visitors more about The Bookshelf. Short sentences make it easy for visitors
  to gain knowledge about the website, without having to read long paragraphs. 

**Donate Books**

![Donate Books](/static/images/donate-books.png)

- This is the last section of the 'Who we are' page. 'Donate Books' is a section provided to visitors/users to give them an option of 
  where to donate books they might not want anymore. It is divided into three sections, each section having its own column. 

- This includes a 'Who?' section, which tells the visitors/users who they could donate their books to, which includes a link to their 
  website. 

- The next section includes 'Why?', which tells the visitors/users why they should use Better World Books. 

- The last section includes 'How?', which tells the visitors/users how they can go about donating books or how to support Better
  World Books. 

### Log in

![Log in](/static/images/login.png)

- The login page features a standard login form asking for username and password.
- Validation for this form is handled in the back end and a flash message displays 'Welcome (username)'. 
- Once logged in they are taken directly to their profile page. 

### Register

![Register](/static/images/register.png)

- A user who is not logged in can create a new account using the register page. The page on this form includes a username 
 (which must be unique), and a password. 
- If a user who already has an account tries to register, a flash message display 'Username already exists'. 

### Club picks

![Clubs picks](/static/images/club-picks.png)

- This page displays all The Bookshelf's books added each month. There are four books in each row. 
- The book is displayed by its cover image with a button under each book, displaying the month and year it was added. 
- If the button is clicked on, it brings up a modal with futher information about the book. 

**Modals**

![Clubs picks modal](/static/images/club-picks-modal.png)

- The modal is divided into two parts. The first being further information about the book, and the second being a review of the 
  book by The Bookshelf. 
- The first part contains the books image, when it was added, the title of the book, the author, a synopsis, and a link to Amazon
  store if the member wishes to purchase the book. 
- The second part is just a detailed review of the book by The Bookshelf. 
- To close the modal, the member has the option of clicking the x icon on the top right hand side of the modal or the done button at 
  the bottom of the modal. 

### Your picks

![Your picks](/static/images/your-picks.png)

- The top of the page displays the members name, username's picks, indicating that this is their profile. 
- This page displays all if The Bookshelf's members books added. There are four books in each row. 
- The book is displayed by its cover image with a button under each book, displaying the member's name who added it. 
- If the button is clicked on, it brings up a modal with futher information about the book. 

**Modals**

![Your picks](/static/images/your-picks-modal.png)

- The modal is divided into two parts. The first being further information about the book, and the second being a review of the 
  book by the member. 
- The first part contains the books image, when it was added, the title of the book, the author, a synopsis, and a link to Amazon
  store if the member wishes to purchase the book. 
- The second part is just a detailed review of the book by The Bookshelf. 
- The modal also gives the option of editing or deleting the book. Clicking on the edit button will take the member to the edit book page,
  which is detailed further down. 
- If the user clicks on the delete button, they are met with another modal that pops up asking if they are sure they want to delete the 
  book. If they click cancel, it takes them back to their profile page. If they click delete, the book is deleted from their profile.  
- To close the modal, the member has the option of clicking the x icon on the top right hand side of the modal or the done button at 
  the bottom of the modal. 

### Add book

![Add book](/static/images/add-book.png)

- This page contains a form for members to add a book to their profile for other members to see. 
- It includes a section for the book title, author, a link to the book cover, a link to the Amazon store for the book, a synopsis, 
  and the members personal review of the book. 
- Once the book has been added, a flash message displays 'Book successfully added'. 

### Edit book

![Edit book](/static/images/edit-book.png)

- This page is accessed within the edit button of the book modals in Your picks. It contains a form for members to edit a book that they have 
  previously added.  
- It is identical to the Add book page. 
- Once the book has been edited, a flash message displays 'Book successfully updated'.
- Members only have access to edit their own books, and are unable to edit other members books. 

### Log out

![Log out](/static/images/logout.png)

- Any user who clicks on 'Log out' from the navigation bar is automatically logged out and their session data cleared. They are informed
  that they have been logged out with a flash message displaying 'You have been logged out'. 

## Features for Future Releases

1. **Add powerups**
    - 

2. **Add different difficulty levels**
    - Having an option for users to write a reviews on books added by The Bookshelf and its members. 

3. **Add user functionality**
    - Having an option for users to write a reviews on books added by The Bookshelf and its members. 

4. **Character choice**
    - Users have the choice of different characters to play with. 
    - When starting a new game, users  

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

## To run the project locally 

To clone this project from GitHub

1. Under the repository's name, click **Clone or download**. 
2. In the **Clone with HTTPs** section, copy the given URL. 
3. In your IDE of choice, open **Git Bash**. 
4. Change the current working directory to the location where you want the cloned directory to be made. 
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the clone will be created. 

# Credits

## Content
- Register, log in, log out, and add book form provided by [Bootsnipp](https://bootsnipp.com/).
- Book synopses were taken from the [Goodreads](https://www.goodreads.com/) website. 
- Book reviews were taken from the [Kirkus](https://www.kirkusreviews.com/) website.  

## Images
- Book cover images were taken from the [Goodreads](https://www.goodreads.com/) website. 
- The founder image was taken from my personal collection of photos. 
- The 'Why The Bookshelf?' image was created by myself with Powerpoint. 

## Code

- The following websites helped me understand and create my website, by viewing examples and explanatons.
    - [W3schools](https://www.w3schools.com/)
    - [Bootsnipp](https://bootsnipp.com/)
    - [Code with Mosh](https://codewithmosh.com/)

- The following website provided inspiration for my website.
    - [Reese's Book Club](https://reesesbookclub.com/picks/)

- The README file was taken from Anna Greave's 'The House of Mouse' project to use as a template.
    - [The House of Mouse by Anna Greaves ](https://github.com/AJGreaves/thehouseofmouse)

## Acknowledgements

 - Special thanks to my mentor Precious, for his time, and guidance with this project. 
 - Code Institute tutors for helping support and guide me in the right direction with my code.