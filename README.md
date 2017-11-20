# Readable Project

Is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

## Why this project?
This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit. By building this project, you will gain an understanding of how Redux can function in a standard type of application.

## Walkthrough

![Readable Walkthrough](https://github.com/DeekshaPrabhakar/readable/blob/master/public/readable.gif)

## Project Specifications
You will start with [local backend development server](https://github.com/udacity/reactnd-project-readable-starter). 

The server is built in Node, but it is very simple. You won't need to edit the server code; instead, your code will talk to the server using documented API endpoints. You can use the server's endpoints to manage storing, reading, updating, and deleting data for your application.

Using this server, you will build a React/Redux front end for the application. 

### Required
#### Application Setup
- [x] Application easy to install and start.
  - install all project dependencies with `npm install`
  - start the development server with `npm start`
- [x] Application includes README with clear installation and launch instructions

#### Views
Your application should have, at a minimum, four views:

##### Default (Root)
- [x] should list all available categories, which should link to a category view for that category
- [x] should list all of the posts ordered by voteScore (highest score first)
- [x] should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- [x] should have a control for adding a new post

##### Category View
- [x] identical to the default view, but filtered to only include posts with the selected category

##### Post Detail View
- [x] should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- [x] should list all of the comments for that post, ordered by voteScore (highest first)
- [x] should have controls to edit or delete the post
- [x] should have a control to add a new comment.
- [x] implement comment form however you want (inline, modal, etc.)
- [x] comments should also have controls for editing or deleting

##### Create/Edit View
- [x] should have a form to create new post or edit existing posts
- [x] when editing, existing data should be populated in the form

#### Post/Comment UI

- [x] Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. 
- [x] Posts should display the number of comments associated with the post.

### Specific Requirements
*Use React to build your application UI*. Remember that composition is key. It’s rarely a mistake to break a component into smaller pieces. Look for opportunities to reuse your components. We recommend using create-react-app to bootstrap your project, but it is not required for this project.

While the focus (and specification) of this project is based on functionality, rather than styling, please ensure that your app is presentable and easy to navigate.

*Use Redux to manage your application state*. This includes all user actions and responses from the API server. You may use component state to handle form input fields and controlled components. Otherwise, the rest of the state for your application should be controlled by your reducers.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Acknowledgements:
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
- App Icon made by [Alfredo Hernandez](https://www.flaticon.com/authors/alfredo-hernandez)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Post Edit Icon made by [Pixel Buddha](https://www.flaticon.com/authors/pixel-buddha)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Delete Icon made by [Freepik](http://www.freepik.com)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Comment Icon made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Vote Icon made by [Gregor Cresnar](https://www.flaticon.com/authors/gregor-cresnar)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Vote Icon made by [Chanut is Industries](https://www.flaticon.com/authors/chanut-is-industries)</a> from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- Themes from [Adobe](https://color.adobe.com/explore/?filter=most-popular&time=month).

## Contributions

Please submit a pull request with a description of the feature/fix.

## License & Copyright

MIT License

Copyright (c) [2017] [Deeksha Prabhakar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
