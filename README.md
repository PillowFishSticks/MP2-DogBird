[The Bookshelf](https://the-bookshelf-milestone.herokuapp.com/) was designed, built, and deployed, by myself, Michelle Newell as the 
third project for the Code Institute Full Stack Web Development diploma. The purpose of The Bookshelf is to be an online book club 
that allows members to view The Bookshelf’s monthly recommendations, as well as provide and share book recommendations of the users 
own liking. The website is designed to share literary experiences, specifically for those looking for book suggestions and wanting to 
share their own books that they have read and enjoyed. 

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
        - [Elements on every page](#elements-on-every-page)
        - [Who we are](#who-we-are)
	    - [Login](#log-in)
	    - [Register](#register)
        - [Club picks](#club-picks)
        - [Your picks](#your-picks)
        - [Add book](#add-book)
        - [Edit book](#edit-book)
   	    - [Log out](#log-out)
    - [Features for Future Releases](#features-for-future-releases)

3. [Information Arcitecture](#information-architecture)
	- [Database choice](#database-choice)

4. [Technologies Used](#technologies-used)
    - [Tools](#tools)
    - [Databases](#databases)
    - [Libraries](#libraries)
    - [Languages](#languages)

5. [Testing](#testing)
    - See seperate [TESTING.md](TESTING.md) file.

6. [Deployment](#deployment)
    - [How to run this project locally](#how-to-run-this-project-locally)
    - [Heroku Deployment](#heroku-deployment)
 
7. [Credits](#credits)
    - [Content](#content)
    - [Images](#images)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

----

# UX

## Goals

### Visitor Goals

The target audience for The Bookshelf are:
- People who enjoy reading. 
- People who are interested in joining an online book club.
- People who want to share good books they read. 
- People looking for book recommendations. 
- People looking for detailed book reviews for book recommendations. 

User goals are:
- To join an online book club. 
- Find new reading material via the book club. 
- Share books that I have enjoyed with other book club members. 
- Share reviews about the books I have read. 
- To be able to add, edit, and delete books on the website. 
- Be able to navigate the website easily and view detailed information on books. 

### The Bookshelf’s Goals

The goals of The Bookshelf are:
- Provide a platform where users can find book recommendations via the book club and its members. 
- For book club members to be able to add, edit, and delete books that they would like to share. 
- Provide a platform for book club members to share reviews about the books they would like to add. 
- For book club members to be able to view books in detail, including a purchase link. 

## User Stories

As a visitor to The Bookshelf website I expect/want/need:

1. To be able to easily find the information I am looking for, the layout needs to make sense so that I am not put off. 

2. The site to be laid out in a way that is easy to navigate, so that I can find what I need. 

3. The site to be responsive and navigable for various device sizes; desktop, tablet, and phone. For the content to look good 
   on all of the devices.

4. To learn more about The Bookshelf. 

5. To be able to connect to The Bookshelf’s social media accounts. 

6. To be able to click on books for further information about them. 

7. A purchase link to be provided for each book, in the event that I would like to buy it. 

8. To be able to add, edit, and delete books that I would like to share with others. 

9. To be able to write reviews about the books I would like to share. 

10. To be able to log in and out with ease. 

11. To be notified that I have logged in or out of my account. 

12. To be notified about changes that are made, inlcluding adding, editing, and deleting books. 

## Design Choices

The Bookshelf has a fun feel to it, with emphasis on displaying books in an easy to read manner. The following design choices were 
made bearing this in mind:

### Fonts
- The primary font 'Roboto' was chosen to be the main text of this site as it is easy to read, looks professional, and goes well 
  with the secondary font. 

- The secondary font 'Rocknroll One' was chosen for the headings as it looks fun, and is easy to read. 

### Icons
- Very few icons were used, as to avoid overcrowding. 
- The following icons were used in [Add book](https://the-bookshelf-milestone.herokuapp.com/add_book) page to emphasize each sections purpose:        
   - The **book** icon was placed next to 'Title'. 
   - The **user** icon was placed next to 'Author'.
   - The **file image** icon was placed next to 'Image URL'. 
   - The **credit card** icon was placed next to 'Amazon store URL'. 
   - The **comment** icon was placed next to 'Synopsis'. 
   - The **pencil** icon was placed next to 'Your review'. 
- The **Facebook logo** icon, **Instagram logo** icon, **Twitter logo** icon, are included in the footer to lead visitors to The 
  Bookshelf's social media accounts.

### Colours
- Yellow: #ffff66
- Orange: #ffcc99
- Light blue: #87cefa
- Light grey: #87cefa

- The bright orange and yellow were chosen for the navbar and footer as they provide a fun, happy feel to the website. No other bright 
  colours were used as the book covers provide an array of different colours. The light gray was chosen for the 'Donate Books' section
  as it goes well with the bright colours, but provides a subtle colour to a page filled with bright colours. The light blue was chosen
  to highlight monthly and user picks in the modals. 

## Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the design and planning process for this project. 

- [Who we are](/static/images/wireframes/wireframe-who-we-are.png)
- [Log in](/static/images/wireframes/wireframe-log-in.png)
- [Register](/static/images/wireframes/wireframe-register.png)
- [Club picks](/static/images/wireframes/wireframe-club-picks.png)
- [Club picks modal](/static/images/wireframes/wireframe-club-picks-modal.png)
- [Your picks](/static/images/wireframes/wireframe-your-picks.png)
- [Your picks modal](/static/images/wireframes/wireframe-your-picks-modal.png)
- [Add book](/static/images/wireframes/wireframe-add-book.png)

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

1. **Being able to upvote books**
    - Having a star rating available in a book's modal for users to vote for. 
    - The star rating is displayed in each book's modal, giving the user an idea of how other members felt about the book. 

2. **Users being able to add reviews to The Bookshelf's picks and members books**
    - Having an option for users to write a reviews on books added by The Bookshelf and its members. 
    - The option would be available on each of the book's modals next to the done, edit, and delete buttons. 
    - The reviews would appear under the orginal review added. 

# Information Arcitecture

### Database Choice
- According to project instructions, the document-based database MongoDB is used. 

- The database 'theBookshelf' has two collections 'users' and 'your_picks'.

**users**

![users](/static/images/db-users.png)

- **users** contains information about the user, including a unique id, their username, and a hashed password. 
    
**your_picks**

![your_picks](/static/images/db-your-picks.png)

- **your_picks** contains information about the books added to the 'Your picks' page. 
- This includes the book's title, author, a link to the book cover, a link to the Amazon store, a synopsis, a review written by
  the user, and who the added book was created by. 

# Technologies Used

### Tools

- [GitHub](https://github.com/) to store and share all project code remotely. 
- [Gitpod](https://www.gitpod.io/) - IDE (Integrated Development Environment) used to write the code.
- [Balsamiq](https://balsamiq.com/) to create the wireframes for this project.
- [Heroku](https://id.heroku.com/) - Container-based cloud platform for deployment and running of apps.

### Databases
- [MongoDB](https://www.postgresql.org/) a NoSQL database program, using JSON-like documents. 

### Libraries
- [JQuery](https://jquery.com) to simplify DOM manipulation.
- [Bootstrap](https://www.bootstrapcdn.com/) to simplify the structure of the website and make the website responsive easily.
- [FontAwesome](https://www.bootstrapcdn.com/fontawesome/) to provide icons for The House of Mouse webshop.
- [Google Fonts](https://fonts.google.com/) to style the website fonts.

### Languages
- This project uses HTML, CSS, JavaScript and Python programming languages.

# Testing 
 
- See seperate [TESTING.md](TESTING.md) file. 

# Deployment

## How to run this project locally

To run this project on your own IDE follow the instructions below:

Ensure you have the following tools: 
    - An IDE such as [Visual Studio Code](https://code.visualstudio.com/)

The following **must be installed** on your machine:
    - [PIP](https://pip.pypa.io/en/stable/installing/)
    - [Python 3](https://www.python.org/downloads/)
    - [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

### Instructions
1. Save a copy of the github repository located at https://github.com/MAN95-dev/the-bookshelf by clicking the "download zip" button at 
   the top of the page and extracting the zip file to your chosen folder. If you have Git installed on your system, you can clone the 
   repository with the following command.
    ```
    git clone https://github.com/MAN95-dev/the-bookshelf
    ```

2. Open your preferred IDE, open a terminal session in the unzip folder or cd to the correct location.

3. A virtual environment is recommended for the Python interpreter, I recommend using Pythons built in virtual environment. Enter the command:
    ```
    python -m .venv venv
    ```  
_NOTE: The `python` part of this command and the ones in other steps below assumes you are working with a windows operating system. 
Your Python command may differ, such as `python3` or `py`_

4. Activate the .venv with the command:
    ```
    .venv\Scripts\activate 
    ```
_Again this **command may differ depending on your operating system**, please check the [Python Documentation on virtual environments](
    https://docs.python.org/3/library/venv.html) for further instructions._

5. If needed, Upgrade pip locally with
    ```
    pip install --upgrade pip.
    ```

6. Install all required modules with the command 
    ```
    pip -r requirements.txt.
    ```

7. Set up the following environment variables within your IDE. 

    - If using VSCode, locate the `settings.json` file within the .vscode directory and add your environment variables as below. 
      Do not forget to restart your machine to activate your environment variables or your code will not be able to see them: 

    ```json
    "terminal.integrated.env.windows": {
        "HOSTNAME": "<enter hostname here>",
        "DEV": "1",
        "IP": "<your IP>",
        "MONGO_DBNAME": "<your database name on MongoDB>",
        "MONGO_URI": "<your URI to your MongoDB database>",
        "PORT": "<your port>",
        "SECRET_KEY": "<your secret key>" 
    }
    ```

    - If using an IDE that includes a `bashrc` file, open this file and enter all the environment variables listed above using the 
      following format: 
    ```
    HOSTNAME="<enter key here>"
    ```
    - `HOSTNAME` should be the local address for the site when running within your own IDE.
    - `DEV` environment variable is set only within the development environment, it does not exist in the deployed version, making it 
      possible to have different settings for the two environments. For example setting DEBUG to True only when working in development 
      and not on the deployed site.

8. If you have restarted your machine to activate your environment variables, do not forget to reactivate your virtual environment with 
   the command used at step 4.

9. Migrate the admin panel models to create your database template with the terminal command
    ```
    python manage.py migrate
    ```

10. You can now run the program locally with the following command: 
    ```
    python manage.py runserver
    ```

## Heroku Deployment

To deploy The Bookshelf website to heroku, take the following steps:

1. Create a `requirements.txt` file using the terminal command `pip freeze > requirements.txt`.

2. Create a `Procfile` with the terminal command `echo web: python app.py > Procfile`.

3. `git add` and `git commit` the new requirements and Procfile and then `git push` the project to GitHub.

4. Create a new app on the [Heroku website](https://dashboard.heroku.com/apps) by clicking the "New" button in your dashboard. 
   Give it a name and set the region to whichever is applicable for your location.

5. From the heroku dashboard of your newly created application, click on "Deploy" > "Deployment method" and select GitHub.

6. Confirm the linking of the heroku app to the correct GitHub repository.

7. In the heroku dashboard for the application, click on "Settings" > "Reveal Config Vars".

8. Set the following config vars:

| Key | Value |
--- | ---
IP | `<your IP>`
MONGO_DBNAME | `<your database name on MongoDB>`
MONGO_URI | `<your URI to your MongoDB database>`
PORT | `<your port>`
SECRET_KEY | `<your secret key>`

9. In your heroku dashboard, click "Deploy". Scroll down to "Manual Deploy", select the master branch then click "Deploy Branch".

10. Once the build is complete, click the "View app" button provided.

12. Your heroku site should run as expected.

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

 - Special thanks to my mentor Moosa, for his time, and guidance with this project. 
 - Code Institute tutors for helping support and guide me in the right direction with my code.