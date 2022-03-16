# Aplikacja Listy

This project enables the user to create 3 different types of lists. 

## Table of contents
* [Version](#version)
* [Technologies and libraries](#technologies-and-libraries)
* [Project setup](#project-setup)
* [App description](#app-description)

## Version

This is a prototype version of the app developed only for full-sized desktop. Data storage is yet to be added to the project. Also, no unit tests have been written so far. 

## Technologies and libraries

Project is created with:
* Angular, version: 12.2.0
* Typescript, version: 4.3.5 
* RxJS, version: 6.6.0
* Bootstrap, version: 5.1.3
* Bootstrap Icons, version: 1.8.1
* CSS, version: 2.2.4

## Project setup

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## App description

The app consists of 3 main components: tasks list, shopping list and books list which are supported with the navbar and main menu helping the user to navigate between them.

#### Main menu

Once the app is built, the main page of the app appears. You can see the title bar at the top of the window showing the name of the app. In the centre, you can find the 3 tiles representing three specific components of the app: tasks list, shopping list and books list. You can navigate to one of the above-mentioned components by clicking on the particular tile.

#### Navbar

When you enter the specific part of the app (tasks list, shopping list or books list), you can see a navbar at the top of the app. The navbar consists of 3 tiles on the left side and one tile on the right side. The tiles on the left let you navigate to the specific types of lists (related to tasks, shopping or books). The tile on the right lets you come back to the main menu.

#### Tasks list

This part of the app allows you to create a to-do list, mark the tasks as prioritised or done and delete the unnecessary ones from the list.

On the left side of the screen there is a form allowing you to add the new task. It consists of the input where need to write the name of the task. Optionally, you can mark a task as a priority by checking the radio button below. You can add the task by simply clicking the add button on the bottom of the form. Once done, the new task will appear on the right side of the screen. 

Each task can be manipulated by using one of the three buttons represented by the specific icons:
* flag icon - marks task as a priority and vice versa (regular tasks are coloured green while the priority ones are coloured red)
* tick icon - marks task as done and moves it to the list of done tasks below
* trash icon - deletes the task irretrievably

Each task located on the list of done tasks can be controlled by using one of the two buttons represented by the following icons:
* counterclockwise arrow icon - moves the task back to the list of pending tasks
* trash icon - deletes the task irretrievably

#### Shopping list

This part of the app allows you to create a shopping list (defining the name, quantity and unit of the products) and mark the products as bought or delete the unnecessary ones from the list. 

On the left side of the screen there is a form allowing you to add the new product to the list. It consists of the input where need to write the name of the product. Following are two other inputs representing the quantity and unit of the product. The input related to the quantity needs to be typed as a number whereas the unit one needs to be chosen from the drop-down list. On the right there is an 'X' button which resets the form if needed. You can add the product by simply clicking the add button on the bottom of the form. Once done, the new task will appear on the right side of the screen. 

Each task can be manipulated by using one of the two buttons represented by the specific icons:
* cart-check icon - marks products as bought and moves it to the list of bought products below
* cart-x icon - deletes the product irretrievably

Each task located on the list of done tasks can be controlled by using one of the two buttons represented by the following icons:
* counterclockwise arrow icon - moves the product back to the list of products to buy
* cart-x icon - deletes the product irretrievably

#### Books list 

This part of the app allows you to create a list of books you would like to read in the future and the ones you are reading at the moment. Each book is represented by its author and title. Moreover, when you are in the middle of reading the particular book, you can edit the number of page you finished your reading on so you know which page you should open next time. Also, the app allows you to mark books as read or delete the unnecessary ones. 

On the left side of the screen there is a form allowing you to add the new book to the list. It consists of two inputs where need to write the name of the book and its author. Following are two buttons. The yellow one is responsible for adding the book whereas the red one resets the form. Once you click the add button, the new book will appear on the list underneath the form.

Each book can be manipulated by using one of the two buttons represented by the specific icons:
* book icon (filled in half) - marks book as pending and moves it to the list of books which are in the middle of reading (on the right side of the screen next to the form)
* trash icon - deletes the book irretrievably

Every book localised on the list of books already started can be manipulated by one of the three buttons represented by the specific icons:
* book icon (filled in full) - marks book as read and moves it to the list below
* trash icon - deletes the book irretrievably
* pen icon - activates the input allowing you to edit the page number (once the new number is typed, the page number will be updated after clicking the journal-check icon which will have appeared in lieu of the pen icon; afterwards, the view will return to the initial structure)

Each book located on the list of read books can be controlled by using one of the two buttons represented by the following icons:
* counterclockwise arrow icon - moves the book back to the list of awaiting books (on the left and underneath the form)
* cart-x icon - deletes the book irretrievably

## Developers

The app was created by the would-be front-end developer Marek Kozień.