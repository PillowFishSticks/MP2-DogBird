# The Bookshelf - Testing details

[Main README.md file](README.md)

[View website on Heroku](https://the-bookshelf-milestone.herokuapp.com/)

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
The following validation services and linter were used to check the validity of the website code.

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML. 

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.

- [JSHint](https://jshint.com/) was used to validate JavaScript.

- [PEP8 online check](http://pep8online.com/) was used to check Python code for PEP8 requirements.

- [Pylint](https://pypi.org/project/validator/) was used to validate Python.

## User Stories Testing

The following section goes through the user stories identified in the [Ux section of README.md](README.md#UX) to check that the site 
meets those needs.

**As a visitor to The Bookshelf website I expect/want/need:**

1. **To be able to easily find the information I am looking for, the layout needs to make sense so that I am not put off.**
    - Arrangement of site elements such as navbar, footer, icons, and forms conform to expected placement.

1. **The site to be laid out in a way that is easy to navigate, so that I can find what I need.**
    - The navbar offers easy navigation for the user and is clearly labeled.
    - Icons and images are used to help the user digest information quickly.

1. **The site to be responsive and navigable for various device sizes; desktop, tablet, and phone. For the content to look good on all of the devices.**
    - The use of the site has been extensively tested on desktop, tablet and phone size screens.
    - The user can load the website on mobile, tablet, and desktop devices.
    - All elements have been given a responsive design, so nothing to too squashed, squeezed or hard to read on any screen size a user might be using.
    - The navbar has a collapsed menu for tablet and mobile viewing, this makes navigation easier for smaller devices.

1. **To learn more about The Bookshelf.**
    - The home page 'Who we are' offers more information about The Bookshelf, including some of the features it has. 
    - The footer contains links to The Bookshelf's different social media accounts for more information. 

1. **To be able to connect to The Bookshelf’s social media accounts.** 
    - The footer contains links to The Bookshelf's different social media accounts, including Facebook, Instagram, and Twitter. 

1. **To be able to click on books for further information about them.**
    - Each book contains a modal button under the book cover, which can be clicked on for further information on each of the books. 
    - The modal contains the book cover image, title, author, synopsis, link to the Amazon store, and a review. 

1. **A purchase link to be provided for each book, in the event that I would like to buy it.**
    - Each book modal contains a link to the Amazon store, and has the option of hardcover, paperback, or kindle. 

1. **To be able to add, edit, and delete books that I would like to share with others.**
    - The Add book page allows members to add books that they would like to share with others, by filling in the form and submitting the 
      information. 
    - Members are able to edit their own book additions by clicking the edit button within their book modal. The edit book page allows
      members to cancel or save their edited book information. 
    - Members are able to delete their own book additions by clicking the delete button within their book modal. This brings up a modal
      askng whether they are sure they want to delete this book, giving them the option to cancel or delete. 

1. **To be able to write reviews about the books I would like to share.**
    - The Add book page requires members to add a review about the book they read before adding it, these reviews appear in the books 
      modal. 

1. **To be able to log in and out with ease.**
    - Both log in and log out pages are displayed in the navbar, making it easy to do both functions. 
    - The log in form is able to store your username and password if desired, making it easier and faster to log in. 

1. **To be notified that I have logged in or out of my account.**
    - When a member logs into their account, they are taken to their profile page, where a flash message displays 'Welcome, (Username)'.
    - When logged out, a flash message displays 'You have been logged out', and bringing them back to the log in page. 

1. **To be notified about changes that are made, inlcluding adding, editing, and deleting books.**
    - Flash messages have been designed to notify members when any changes have been made. 
    - When a member had added a book, a flash message displays 'Book successfully added'. 
    - When a book has been edited, a flash message displays 'Book successfully updated'.
    - When a member deletes a book, a flash message displays 'Book successfully deleted'.

## Manual Testing
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected. 

### Testing undertaken on desktop

All steps on desktop were repeated in browsers: Firefox, Chrome and Safari. 

#### Elements on every page

1. Navbar 
    - Clicked each link in the navbar to confirm that it leads to the correct page.
    - Confirm that when logged out the options "Register" and "Log in" are visible and that "Club picks", "Your picks", "Add book" and 
      "Log out" are not.
    - Log into the site, confirm that options ""Club picks", "Your picks", "Add book" and "Log out" are visible and that "Register" and 
      "Log in" are not.

2. Footer
    - Hover over links in the footer, confirm that they change color. 
    - Click all links in the footer, confirm that they take the user to the relevant pages within the site.
    - Click the facebook, instagram, and twitter icons, confirm that they open a new tab and take the user to the differnt social media sites. 

#### Who we are

1. About The Bookshelf 
    - Adjust width of browser window, confirm image is always cropped in an attractive way.

2. Why The Bookshelf?
    - Adjust width of browser window, confirm image is always cropped in an attractive way.

3. Donate books
    - Click link to confirm it takes the user to the correct page, in a new tab. 

#### Log in

- Attempt to log in with a username not in the database, confirm the relevant error message is shown.
- Attempt to log in with a correct username but wrong password, confirm the relevant error message is shown.
- Log in with a correct username and password, confirm that the user is logged in and that they are redirected to the Your picks page.

#### Register

- Log out then go to the register page. Confirm that the register form is displayed as expected.
- Fill in the form with a username already in the database, confirm that the user is informed that the username already exists. 
- Fill in the registration form correctly, confirm that the user is automatically directed to the Your picks page, and the message 
  "Weclome `<username>`." is displayed above the Your picks page. 

#### Club picks

- Go to the Club picks page and check that it is laid out correctly, 4 books to a row. 
- Click the modal button below each book cover to ensure the modal works. 
- Check that that the modal is laid out correctly, with all necessary information present. 
- Click on the Amazon link, to ensure it opens up a new tab and takes you to the correct book to purchase. 
- Click all the buttons, making sure they close the modal. 

#### Your picks

- Go to the Your picks page and check that it is laid out correctly, 4 books to a row. 
- Confirm that above the Your picks page, the heading "`<username>`'s picks" is displayed, depending on who is logged in. 
- Click the modal button below each book cover to ensure the modal works. 
- Check that that the modal is laid out correctly, with all necessary information present. 
- Click on the Amazon link, to ensure it opens up a new tab and takes you to the correct book to purchase. 
- Click the edit button on a modal to make sure it takes you to the Edit book page with all previous book information entered. 
- Click the delete button on a modal to check whether an additional modal pops up asking if the user is sur they want to delete this book. 
  Click the delete button to delete the book and ensure it is deleted from the Your picks page and the database. 

#### Add book

- Go to Add book page and ensure the form is laid out correctly. 
- Try and submit the form with information missing to ensure that it doesn't send. 
- Fill out the form correctly and click the submit button, ensure that the user is redirected to the Your picks page and that the message 
  "Book successfully added" displays at the top of the page. 
- Check that when a book has been added, that is displays on the Your picks page and the information is added to the database. 

#### Edit book

- Go to the Ypur picks page and click on a modal of a book I added. Click on the edit button to open up the Edit book page. 
- Check that the form is laid out correctly, with all previous book information present in the form. 
- Edit the content and click the submit button, ensure that the user is redirected to the Your picks page and that the message 
  "Book successfully updated" displays at the top of the page. 
- Check that when a book has been edited, that the changes are displayed on the Your picks page and the information has been updated in 
  the database. 

#### Log out

- Click Logout in the navbar to ensure that the user is logged out and redirected to the log in page with the following message 
  displayed "You have been logged out". 

### Testing undertaken on tablet and phone devices
All steps below were repeated to test mobile and tablet specific elements on my iPhone and iPad, in both the Safari browser and Google 
Chrome browser.

Responsive design was also tested in the Chrome Developer Tools device simulators on all options and orientations.

#### Elements on every page

1. Navbar 
    - Open the website on mobile and tablet, confirm that the navbar is collapsed into a burger icon
    - click the burger icon, confirm that the navbar list appears are expected.

2. Footer
    - Scroll to the bottom of the page, confirm that the footer content is displayed as expected with the bootstrap grid.
    - No content squashed or squeezed or disproportionate in size.
    - Confirm that all links and buttons in footer are easy to click with a finger on the smallest screen sizes.

3. Club picks and Your picks pages
    - Confirm that the books ar displayed 2 to a row on mobile, and 3 to a row on tablet.
    - Confirm that all clicks and swipes operate as expected on touch screen.
    - Check that modals are the correct proportions and that all their buttons are easily clickable with a finger.

5. All pages
    - Navigate to all pages on the site, check that the layout is as expected for the screen size.
    - Check that all buttons, forms and other elements are the correct proportions and easily clickable with a finger.

## Solved bugs

1. **Flash messages not displaying**
   - None of the flash messages were displaying when logging in and out. 
   - Flash messages were hidden by the navbar. 
   - To fix this I increased the top margin of the flash messages, so that they appeared below the navbar. 

2. **When running the app.py file the js file was displaying a 404 error in the terminal**
   - When running the app.py file I was getting the following message in the terminal `J"GET /%7Burl_for('static',%20filename='js/script.js')%20%7D%7D HTTP/1.1" 404`
   - The js link at the bottom of the base.html page was missing a curly bracket. When this was added the 404 error disappeared. 

3. **Alert boxes displaying flash messages won't close when the x icon is clicked**
   - Any time a flash messaged displayed, I was unable to close it. 
   - To fix this bug I added the following on click function `onclick="this.parentElement.style.display='none';"` to the alert box button. 

   ```html
   <div class="alert success flashes">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <strong>{{ message }}</strong>
        </div>
    ```

4. **Modals are not updating with the correct book content**
   - When each of the book modals are clicked on, they are all appearing with the first books' content on not their own content. 
   - To fix this I gave each books' modal button a unique data-bs-target that matched the modal's id.  

5. **A book was added to the database, but was not displaying on the members profile**
   - When adding a book via the Add book page, it would display the flash message 'Book successfully added', but was not displaying on 
     the members profile. I checked the database to ensure the data had been added, and it had. 
   - This bug was fixed by changing the href in the Your picks page to access the username instead of the book_name when displaying the 
     book's image. 

     From 

 ```html
 <a href="{{ url_for('your_picks', book_name=your_picks._id) }}"></a>
 ```
     
     to 

 ```html
 <a href="{{ url_for('your_picks', username=your_picks._id) }}"></a>
 ```

6. **The author's name was not displaying in the book modals**
   - When opening the book modals, none of the author's names were displaying. When I checked the database 'null' was displayed next to
     author_name. 
   - In the Add book template, book_author was used in the label, name and id, instead of author_name. Once this was changed, the authors'
     names were displaying in the modals.  

7. **Horizontal scroll present on home page**
   - To fix this bug, the footer was deleted from the home page template, as the home page was extended from the base template, which already
     included the footer. 

8. **Your picks page and modal displaying incorrect names of the members who added books**
   - If a book was uploaded by another member, it does not display that members name on the Your picks page or in the modal. Instead,
     it displays the name of the member logged in. 
   - This bug was fixed by changing `{{ username }}’s review` which displayed the name of whoever was logged in, to 
     `{{ your_picks.created_by }}'s review`, which displays the name of the member who added the book. 

9. **When deleting a book, the incorrect book was deleted**
   - When deleting a book, the previous book added by a member was deleted, whether it was their book they uploaded or another member's book. 
   - This bug was fixed by appending {{ your_picks._id }} to the delete modal button's data-bs-target and the delete modal's id. 

```html
 <!-- Modal button for Delete Book modal -->
                    <button class="btn btn-danger" data-bs-target="#modal-delete{{ your_picks._id }}"
                        data-bs-toggle="modal" data-bs-dismiss="modal">Delete</button>
```

```html
<!-- Modal for Delete Book -->
    <div class="modal fade" id="modal-delete{{ your_picks._id }}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
```

10. **The background color on the home page not stretching the full browser width**
    - This bug was fixed by adding the container-fluid class to the <main> element in the base.html page and deleting all container classes
      in the other templates. 

## Further testing
1. Asked friends and family to look at the site on their devices and report any issues they found.
2. The Bookshelf viewed on all devices and orientations available in Chrome DevTools. 