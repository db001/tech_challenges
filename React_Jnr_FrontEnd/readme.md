# Junior Front End Developer - React / Redux

Make simple application for posts and comments. 

Default view will contain posts with date and headline (see picture 1.png) in order from newest to older. 

### Post events:
  *On click on concrete post - show its text and all its list of comments in order from oldest to newer (see picture 2.png).
  *On click on "x" icon button (on post)

   if post has at least one comment, show standard alert dialog with error message

   if post hasn't any comment, delete the post  

  *On click on "comment" icon button (on post) - show "new comment dialog" (see picture 4.png).

### Other events:

On click on "new post" button - show "new post dialog" (see picture 3.png).
New post dialog:
"Headline" textbox - default text "Headline", on click - delete the default text, on focus out in case of empty value - show default text
"Text" textarea - default text "Text", on click - delete the default text, on focus out in case of empty value - show default text
On click on "cancel button" - close the dialog
On click on "save button" - check if "Headline" and "Text" fields are not empy or not default value, if they're ok, save the post, close the dialog and add the new post on the top of post list
New comment dialog:
"Text" textarea - default text "Text", on click - delete the default text, on focus out in case of empty value - show default text
On click on "cancel button" - close the dialog
On click on "save button" - check if "Text" field is not empy or not default value, if it's ok, save the comment, close the dialog and add the new comment on the bottom of comment list 
Notes:
Make the application visually exactly the same as it's showed on pictures
Used font - "Ubuntu" - you can use Google fonts (https://fonts.google.com/specimen/Ubuntu)
Used icons - "Font Awesome" (http://fontawesome.io/icons/) - you can use this or any else free font icons
Application will contain valid HTML/CSS, with adequate HTML 5 semantic elements
Use React/Redux for all events/actions
Try to make all UI elements as re-usable components
If neccessary, use any back end technologies
All "save" actions will be asynchronous by AJAX and updating of lists (posts or comments) will be without reloading the whole page