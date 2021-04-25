# Sub Class Dance Party

Time for a dance party, the stage is ready to be filled with people!

In this project you will build a one-page web app with little dots that represent different types of dancers, who move randomly on screen, blink, change color, and rest when needed.

While coding it, you will have a chance to practice different ways of implementing classes and sub-classes in JavaScript.

## Getting started

- To install the required dependencies run `npm i`.
- Now you can execute `npm start` from the project folder: this will open the browser on `index.html`, and automagically reload the page any time you modify a js, html, or css file (if you want to disable automatic syncing, you can do it from the control panel at `http://localhost:3001/sync-options`).
- In the `scripts` folder you find 4 js files, each corresponding to a different section of the exercise. You can also modify `index.html` and `style.css` when required to complete your tasks.

## Tasks

Remember to lint your code and commit often, as this will help you reduce bugs and make your work more professional.

On the app home page there are 3 buttons. You will find some code that has already been prepared for you with classes in functional style, but you need to continue from there.

1. Start from `functional.js`.
   - Each time the “regular” button is clicked on the app home page a new basic dancer should appear on a random position in the `#stage` div.
   - Now create a sub-class of dancers: the tappers. They are like the basic dancers, but they blink. Make sure they can be added to stage whenever someone clicks on the “tapper” button.
   - Finally the wild ones: the rainbow dancers. They are another sub-class of the basic ones, but they keep changing color, smoothly rotating across the RGB spectrum. Oh, and they have a button too... you get it by now.
2. Wow, what a great stage! Now use the `pseudoclassical.js` file to refactor all your code, moving from the functional with shared methods to the pseudoclassical approach. To check that everything is still working fine, remember to update the corresponding script tag in `index.html`.
3. Now refactor once more, using the `es6.js` file to switch from the pseudoclassical to the ES6 approach, and check that your code doesn’t break.
4. Mmm… your dancers are lazy. Let’s get the party started. Add two new buttons on your stage: “Dance” and “Rest”. For this final section of the exercise, copy all your ES6 logic to the `dance.js` file, and continue from there.
   - When you click on “Dance”, all the dots should start smoothly moving around the stage in small random steps.
   - Are they getting tired? When you click on “Rest”, all the dancers on stage slowly align to the bottom of the screen. But when you click on “Dance” again they resume their last dancing position and start dancing again!

## Extra credits

Make dancers that interact with other dancers. For example, by iterating across the dancers and using the Pythagorean theorem to calculate their distance from each other, you can have a dancer find its n closest neighbors and do something based on their positions.
