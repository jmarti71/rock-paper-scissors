# rock-paper-scissors
## Summary
You may have guessed it, this is a rock paper scissors game! This game is a webpage put together with HTML, CSS and JavaScript where the user plays rounds of rock, paper, scissors against "The Computer" until a score of 5 is reached.

### How it works
This page consists of various HTML and styling elements that are accessed by the controller.js file. The elements that are referenced include divs, paragraphs and buttons, and may be modified depending on user input. The first occurance of user input will happen when the start button is pressed, this will run a startGame() function that will hide the start button and display a score board and more options that the player can select when competing against "the computer". This was accomplished this by assigning new class names to certain elements in the startGame () function. These elements are given different display properties from our style.css file based on class name. 

When the user selects their play for the match, a Play() function will run. This function will take the players selection and the "computer's" selection, and then compares the selections to determine the winner. The player's choice will appear on the right side of the score board, behind the "vs" text, and the "computer's" chioce will appear on the left side of the score board, in front of the "vs" text. As expected, the score of the victor will increase by 1 with each win, unless there is a tie.

Once a score of 5 is reached, the player selection buttons disppear and are replaced by an "end game" button. When pressed, this button will revert the page elements to the state they were in before the "start" button was pressed.

### Design
What happens when the user selects their play?

The script run this nested sequence of 4 functions:

>(1) Play(playerSelection)
    >(2) computerPlay()
    >(3) playRound(playerSelection, computerSelection)
        >(4) checkForWinner()

------------------
Sequence Explained
------------------

(1) Play() takes the playerSelection parameter. When a choice button is pressed, the Play() function passes "rock", "paper" or "scissors" as the argument from the corresponding button. Within the Play function, (2) the computerPlay() function returns a random selection from an array into the block-scoped computerSelection variable. This "random" selection will be "rock", "paper" or "scissors". Play() re-cases the selections for display and then returns the results from the (3) playRound() function, passing the player's selection and the "computer's" selection as arguments. The PlayRound function compares these two arguments, determines the winner for the round based on the selections, and modifies the HTML content appropriately. Upon competeing each playRound() function, a (4) checkForWinner() function is ran. This function evaluates each score to see if a score of 5 has been reached, if so, the game is finished.
