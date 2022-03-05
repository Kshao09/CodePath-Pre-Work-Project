# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Kenny Shao

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/storm-rigorous-challenge?path=index.html%3A25%3A102

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

http://g.recordit.co/CNRnVwO0ot.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

I used w3schools.com, geeksforgeeks.org, and tutorialspoint.com for reference to help complete my project. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge in creating this project is learning and understanding the basics of JavaScript. At the beginning of this project, I was unfamiliar with JavaScript syntax and how to create objects and functions such as callback functions and arrow functions. I used external resources such as w3schools.net and geeksforgeeks.org for guidance, in order to understand the code and be able to adjust it to accomplish the extra points. As I learned about the hoisting concept and object-oriented programming with JavaScript, I was able to better understand the tasks that were given to me. I learned the differences in scope for var and let, and the differences in using arrow functions and normal function declarations. I also learned the basics of jQuery, which helps improve and simplify JavaScript functions and methods by utilizing certain methods and syntax from the jQuery API documentation. For the extra points, I needed to solve how to give the user three strikes and make a new counter in order to keep track of the user choices and his/her mistakes. By learning how to create a new global variable and function, I was able to solve the problem and be able to record the choices that the user made and alert the user by passing the lose game function when the user makes 3 errors.  

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Some questions that I have about web development are how to grab data from a database and link it to the web using dynamic programming, understand what network sockets are and how to connect it to the server. Also, how can I optimize website’s loading time and various user inputs at the same time, like the concept of multithreading. Furthermore, I wish to learn more about object-oriented design and be able to create more complex websites that incorporate databases and dynamically update information to the user from the backend server. By understanding the concepts of JavaScript with the help of jQuery and AJAX, I can better improve my website projects.  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to optimize my code, I would choose to incorporate the clock to notify the user as to how much time is remaining before the round ends. I would need to create a new function in JavaScript that creates a new clock and style it using CSS properties. I would choose to refactor and improve the various functions such as clue Sequence method and win/lose methods. By changing the pattern to randomization, I would be able to randomize the sequence of squares that will be played and be able to customize the squares with images and change the audio with some music. 

## Interview Recording URL Link

[My 5-minute Interview Recording]




## License

    Copyright [Kenny Shao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
