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
2. Dogbird was viewed on all devices and orientations available in Chrome DevTools. 