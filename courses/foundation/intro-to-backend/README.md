//Dog API Postman Collection :
"https://switjyoti26-237736.postman.co/workspace/Jyoti's-Workspace~f2cdb586-5ee9-4f1c-889c-586d551401b0/collection/50885645-39d33494-eabf-4072-a516-3db9edba9a68?action=share&source=collection_link&creator=50885645"

## Assignment: Extend Webserver

### Routes

- `/`  
  Returns an HTML page that displays the total number of users.

- `/user-count`  
  Returns the total number of users in the database as JSON.

- `/users`  
  Returns all users from the database as JSON.

### Description

The home route (`/`) serves an HTML page that fetches data from the `/user-count`
endpoint using JavaScript. The result is displayed in a styled layout in the browser.
