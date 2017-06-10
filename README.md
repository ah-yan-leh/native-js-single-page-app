# Single page app with routing and state management

[Demo of project on Heroku](http://shielded-bastion-56885.herokuapp.com/)


# One single HTML file

1. House multiple content sections within a ‘main `div`’
    + Show/hide content based on event/user action


2. Script tags are used ‘templates’
    + Create `script` tags just above the closing body tags
    + Assign an ‘id’ attribute as well as type="text/template"
    + `<script id="sources-list-item" type="text/template">`
    + Inside the script tags can house normal html (along with normal html syntax)
    + When browser parses the page, it overlooks the html inside the script section
    + Pull the html inside the script section by targeting the id attribute
    + `document.getElementById("id_assigned_to_script_tag").innerHTML;`
    + Use handlebars syntax to assign to the variables you want to change
    + `data-source-sort="{{sourceSort}}"`

-	In the function, use RegEx to replace the custom variable with string value from the function
--	`sourcesDataHTML += sourcesTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id);`
* Build a module to handle the different data needs
  + User
  + News Source
  + News Source by news category
  + Articles by News Source
  + Static content like ‘about-us’ are stored as js variables.

-	User login status is maintained with ‘Boolean’ value in local storage. Change main nav links based on that.
-	Maintain State by splitting url thru custom JS functions that pull from local storage with exception of static pages.

# Views
-	Homepage – loads all News-Sources
-	News-Sources by Category (like science/technology)
-	Individual detail of News-Source
-	News Article Detail
-	New User Registration Form
-	Login Form
-	About/terms/privacy/terms/newsapi

# TO DO LIST
♣ Use local storage to store the JSON responses to reduce the number of calls
-	Applies when it’s a call to get all the ‘news-sources’ or ‘articles from news-sources.’
