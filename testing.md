# Testing

[Return to README](README.md)

## Contents

[Manual Testing](#manual-testing) \
[User Story Validation](#user-story-validation) \
[Lighthouse Audit](#lighthouse-audit) \
[Validator Testing](#validator-testing)\
[Bugs](#bugs)

## Manual Testing

**Device and Browser Testing**

|**Testing** |**iPhone12 safari** |**iPad Pro 9.7" safari**|**MacBook Air Chrome**|**MacBook Air Safari**|**Lenovo MS OS Edge**|**Lenovo MS OS Edge**|**Chrome Developer Tools**|
|-----|-----|-----|-----|-----|-----|-----|-----|
|Responsive| Yes| Yes|Yes|Yes|Yes|Yes|Yes|
|Contact form opens in a new window| Yes| Yes|Yes|Yes|Yes|Yes|Yes|
|Contact form won't submit without appropriate information| Yes | Yes|Yes|Yes|Yes|Yes|Yes|
|Alert appears when form is submitted|Yes|Yes|Yes|Yes|Yes|Yes|Yes|
|Keyboard is playable on Hangman|Yes| Yes|Yes|Yes|Yes|Yes|Yes|
|Hangman blank letters are visable as the game is played|Yes|Yes|Yes|Yes|Yes| Yes|Screens under 250px wide the game becomes unplayable - added media query to alert user in this senario|


|**Additional Devices Tested Using Chrome Developer Tools**|**Responsive Observations**
|-----|-----|
|Galaxy S9+|P button on hangman game moves to a new line (under 320px)|
|Galaxy S20 Ultra|P button on hangman game moves to a new line(under320px)|
|Pixel 5|
|iPad Air|
|iPad Mini|
|Surface Pro 7|
|Responsive widths to assess breakpoint issues|



**Manual Testing of User Actions**

|**Feature**     |**Action**     |**Expected Behaviour**     |**Result**     |
|----------------|---------------|---------------------------|---------------|
|Nav Bar|Click Chose Game|Navigates to index.html|Pass|
|Footer|Click contact us|Opens contact.html in a new window|Pass|
|Game Play buttons|Click Play Hangman|Opens hangman game in the same window|Pass|
|Game Play buttons|Click Play Adds & Equals|Opens Adds & Equals game in the same window|Pass|
|Hangman Game|Click Hint|Hint Displays|Pass|
|Hangman Game|Click Hint when hint is displayed|The hint disappears|Pass|
|Hangman Game|Click New Game|The game resets, a new word is chosen and the hint is hidden when displayed|Pass|
|Hangman Game|Click letter button|button greys out, if letter is correct then letter is displayed, if letter is incorrect then hangman game advances one wrong move|Pass|
|Adds & Equals Game|Click New Question|New maths question is displayed|Pass|
|Adds & Equals Game|Click Submit Answer|The answer is submitted, win or loss screen displays|Pass|
|Adds & Equals Game|Press Enter to submit the answer|The answer is submitted, win or loss screen displays|Pass|
|Adds & Equals Game|Press Enter without providing an answer|nothing happens|Pass|
|Adds & Equals Game|Click Reset Game|The win/loss counters are reset to zero and a new question is displayed|Pass|
|Contact Us Page|Click Send without providing Name details |Pop up: Please Fill in this Field |Pass|
|Contact Us Page|Click Send without providing Email details |Pop up: Please Fill in this Field |Pass|
|Contact Us Page|Click Send with non email text in email field|Pop up: Please include an '@' in the email address |Pass|
|Contact Us Page|Click Send without toggling a contact radio button |Pop up: Please select one of these options |Pass|
|Contact Us Page|Click Send without filling in 'whats on your mind'|Pop up: Please Fill in this Field |Pass|
|Contact Us Page|Click Send without sellecting what the feedback is in relation to|As this is not essential, form submits and alert appears: Your email has been sent - thank you have a great day!|Pass|
|Contact Us Page|Click Send with all fields provided |form submits and alert appears: Your email has been sent - thank you have a great day!|Pass|
|Win Screen - Hangman|Click Play Again|Win screen disappears and a new Hangman game is displayed|Pass|
|Loss Screen - Hangman|Click Play Again|Loss screen disappears and a new Hangman game is displayed|Pass|
|Win Screen - Adds & Equals|Click Play Again|Win screen disappears and a new Adds & Equals game is displayed|Pass|
|Loss Screen - Adds & Equals|Click Play Again|Loss screen disappears and a new Adds & Equals game is displayed|Pass|

## User Story Validation

## Lighthouse Audit

## Validator Audit

## Bugs

|**Bug**|**Resolution**|
|-----|-----|
|sendMail|Write better notes to myself on what bugs I fixed|
|Correctly guessed letters not displaying in the correct position|I had forgotten to include the li items used in the Nav when I calculated the code for displayGuessedLetters|
|Unused page called mole.html displaying on every button press|I missed a closing angle bracket on a holding nav item|
|Hangman game whilst responsive to the screen size was unplayable due to the small buttons and word display| refactored the code to ensure word and the buttons displayed correctly on small screens and remained playable|
|Maths game submitting empty field|As I had an autofocus on the input field the maths game was submitting empty fields when the win or loss screens were displayed. I tried adding a required field to the input which didnt work. To solve the problem I amended the event listener to not run check answer when the field was empty|

[Return to README](README.md)
