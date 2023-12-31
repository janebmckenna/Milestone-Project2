# The Idle Playground
[View live project Here](https://janebmckenna.github.io/Milestone-Project2/index.html)
***

The idle playground is a simple retro style browser based game website that allows people to spend a few minutes playing simple games to pass the time and keep their minds engaged. 

![Mock Up](assets/images/wireframes/mock-up.png)

- [The Idle Playground](#the-idle-playground)
- [User Experience UX](#user-experience-ux)
  - [UX-strategy](#ux-strategy)
  - [UX-scope](#ux-scope)
  - [UX-structure](#ux-structure)
  - [UX-skeleton](#ux-skeleton)
  - [UX-surface](#ux-surface)
- [Technologies-used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

# User Experience UX

## UX-strategy

The goal is to provide a simple website that allows users to pass the time playing simple browser based games. 

**Developer Goals**

The website provides a means to develop coding and programming skills and potential future monetisation through advertising. The MVP of this project is simple but the site can be developed to include additional games and to include more complex java script to improve the first game Hangman. 

**User Goals**

- Entertainment.
- Relaxation.
- Challenge.
- Pass the time.
- Play for free.

**User Stories**

_As a FIRST TIME user of the site I want to be able to:_
- Intuitively and easily navigate the site
- Intuitively be able to play the game/games
- Find help or instruction if necessary
- Play the games on a mobile device without the need for any additional downloads. 

_As a RETURNING user of the site I want to be able to:_
- Easily navigate to my favourite game
- Send feedback and ideas for more games to the website owner

## UX-scope
The site will be written using html and css with javascript controlling the game and site functionality. 

**Existing Features**

**Home/Choose Game Page**

![Nav Image](assets/images/testing/Nav-Home.png) ![Nav Image](assets/images/testing/nav-other.png)

Due to the simple layout of the site I did not feel the need to include a classic Nav bar with navigation to the two games included on the site. I felt that the 'Choose Game' link to the home page was in keeping with the retro feel of the site. 

**The Idle Playground Logo**

![Logo](assets/images/testing/logo.png)

This is a retro logo for the idle playground with a simple tag line to indicate the relaxed nature of the games and subtly conveys the message that the games are just a bit of fun to play while you're passing some time. 

**Game Play Buttons**

![Play Game Buttons](assets/images/testing/game-play.png)

Initial MPV will be two games Play Hangman and Play Adds and Equals

**Footer**

![Footer](assets/images/testing/footer-game.png)

Contains the contact us link and also the help section within the games. 

**Contact Us**

![Contact Us](assets/images/testing/contact.png)

Simple link housed in the footer which opens in a new window to allow users to send feedback. The simple form uses and API email.js to forward the details to me. 

**Help**

![Hangman](assets/images/testing/help-hangman.png)
![Maths](assets/images/testing/help-maths.png)

When completing the testing I had overlooked the need for user help which I identified in my original user stories so I added in help within the games. While the current games are very simple and intuitive this may be necessary in future development and will keep the user experience consistent across games. The contact us feature fulfils any larger help requirements.

**Hangman Game**

![Hangman](assets/images/testing/hangman.png)

Simple game written using Javascript, HTML and CSS. The keyboard is button based on the screen which allows the keys to visually disable for the user when they've already been played. The user has the option to trigger the Hint button to display a hint and resets to hidden when a new game is started. 

**Adds & Equals Game**

![Maths](assets/images/testing/maths.png)

Simple maths game written using, Javascript, HTML and CSS. The game randomly chooses an addition, subtraction, multiplication or division game with two random numbers. The game tally’s the number of correct or incorrect responses. 

**Win/Loss Screen**

![win-hm](assets/images/testing/win-hm.png)
![win-maths](assets/images/testing/win-maths.png)
![loss-hm](assets/images/testing/loss-hm.png)
![loss-maths](assets/images/testing/loss-maths.png)

Once the game is won or lost the win/loss screen appears with confirmation and the correct answer as appropriate. Within the Adds & Equals game I have set the screen to automatically timeout after 2 seconds and start a new game, this is due to the fact that I've set the input as the focus when the DOM loads and I don’t want the user to have to click out of the input box. 

**Hangman game - Generating words**
  1. Create a list of words and hints in an array.
  2. Create approx 5 category buttons, each button would call on its own array of words. The hint is implied by the category chosen but a hint could also be included. 
  3. Find an API to automatically generate words.

Pro to the first option is the simplicity of the idea, easy to execute and implement. 
Con is that it is limiting for the player as extended play may make them familiar with 
the range of words. Second option similarly is simple to execute but potentially also limiting for the player. The second option does has the added benefit for the player to allow them to choose the category of word they wish to play with. The third option extends the potential longevity of the game as there would be a much wider number of possible words. To this point I haven’t been able to find one that could also provide a hint rather than a definition to the player. Without a hint the game maybe too difficult but with a definition too easy. 

**Future Improvements**

- Additional games
- Change the way words are generated for the hangman game to expand the gameplay.
- Hangman - remove the keyboard, add an event listener and refactor the code to allow the game to be played on screens under 250px. 
- Refactor code to reduce repetitive code. 
  
## UX-structure

**Navigation**

Due to the nature of the game site, I have deemed traditional navigation of the site unnecessary instead using the navigation bar to house 'Choose Game'. 

**Game States**
Buttons are used to navigate game states allowing users to start a new game at will. 

**Game Pages**

![Hangman](assets/images/testing/hangman.png)

![Maths](assets/images/testing/maths.png)

I have decided to use separate html pages for each game. 
Within the hangman game I choose not to automatically display the hint to allow the user to choose control the difficulty of the game.

![Hint](assets/images/testing/hint.png)


**Footer**

![Footer](assets/images/testing/footer-game.png)

I've chosen to use the traditional footer space to house a contact us link which opens in a new tab and allows users to provide feedback and ideas to me. Additionally on
the game screens I've used the footer to house the help section. Instead this can be toggled by the user and hides when a new game starts. 

**Win/Loss Screens**

![win-hm](assets/images/testing/win-hm.png)
![win-maths](assets/images/testing/win-maths.png)
![loss-hm](assets/images/testing/loss-hm.png)
![loss-maths](assets/images/testing/loss-maths.png)

I have chosen for these to appear laid over the top of the game in the background with
an opaque background.

**Display Under 250px**

![under250px](assets/images/testing/under250px.png)

At 250px or under the Hangman game becomes unplayable due to the size of the 
keyboard and the display of the word to be guessed. I have therefore decided 
to overlay a message to advise the user of this instead of having a poor game 
experience.

## UX-skeleton

**Design Choices**

I have chosen a retro style for the site. From the simple retro logo, the basic hangman graphics and the overall colour choices, fonts and style of the site. 

**Wireframes**

[View Wireframes](wireframes.md)

## UX-surface

**Colour Palette and Imagery**

I used [colormind.io](http://colormind.io/) to decide on the colour scheme of the site, to achieve the retro feel I intended. I used simple pixelated imagery to make the 
games feel retro. I considered using an AI generated logo using [Bing AI](https://www.bing.com/images/create?FORM=GENILP) but decided against it in the end as I felt 
it wasn’t in keeping with the retro feel I wanted. 

![Logos generated by AI](assets/images/testing/AI-logos.png)

**Fonts**

To accentuate the retro feel of the games from [Google Fonts](https://fonts.google.com/) I choose:
- Caveat
- Permanent Marker
- Roboto Mono

**Responsiveness**

I replied heavily on a combination bootstrap and media queries to ensure the site was visually appealing and well laid out on all screens.

# Technologies-used

- **Languages:** HTML, CSS, JavaScript
- **Libraries:** jQuery, bootstrap
- **Code Anywhere:** used as a cloud code editor.
- **GitHub:** used as a cloud based code repository.
- **GitHub Pages** was used to deploy the site.


# Testing 
[View Testing Documentation](testing.md)

# Deployment
The Website has been deployed using GitHub Pages [Here](https://janebmckenna.github.io/Milestone-Project2/index.html) using the method below:

- I logged into my GitHub account.
- I opened my repository for this site.
- Within the repository I selected 'Settings'
- I navigated to 'Pages' within 'Settings'
- I selected 'Deploy from a branch' from the source menu then the 'Main' branch along with the 'root' folder.
- I then saved the options to deploy the site.

To deploy this website using source files:

- Go to the repository [Here](https://github.com/janebmckenna/Milestone-Project2)
- Clone the repository onto your local device by
  - Click 'Code'
  - Chose 'Download Zip'
- Open the Zip file on your device
- Right click on the 'index.html' file and open with any browser.

If you wish to create a fork of this repository advice can be found [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

# Credits
**Content**

- I used [colormind.io](http://colormind.io/) to decide on the colour scheme of the site, to achieve the retro feel I intended. 
- Icons were sourced from [Font Awesome](https://fontawesome.com)
- My fonts were taken from [Google Fonts](https://fonts.google.com/)
- [Bootstrap Version 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- Wireframes were created using [Balsamiq](https://balsamiq.com/)
- [jQuery Mobile](https://api.jquerymobile.com/) I downloaded a reduced and minified version of jQuery Mobile to reduce what was being loaded.
- Gifs where sourced from [Giphy](https://giphy.com/)

**Code**

- While writing the 'Adds & Equals' section of the project I referred back to pieces of code I had written during the course for the Love Maths project. I wanted to improve on the game by making it randomly generate the type of game. 

- While writing the 'Contact Us' section of the project I referred back to the code I had written during using APIs modules of the course. 

- In trying to ensure the site was accessible I ran into a problem with the label for the input box on the maths game. When searching online for a solution I found [this site](https://css-tricks.com/html-inputs-and-labels-a-love-story/#:~:text=Not%20all%20inputs%20need%20labels&text=An%20input%20with%20type%3D%22hidden,happiest%20with%20a%20label%20companion.) and used this approach to ensure a screen reader could see a label but it didn’t impact the layout. 

I used this code 
.hidden{
    border-width: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

while the recommended code was:
.visually-hidden {
      border-width: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      height: 1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
}

**Images**

All images used on the project I have generated myself. Gifs where sources from
[Giphy](https://giphy.com/) 

**Advice**

I would like to thank my mentor for all his help and advice during the project. 
Including:
- Look and feel of the project, consistency of rounded corners. 
- Advice on output of the JS validator, reassuring me of my thoughts that some of the output was overly critical and not necessary. 
- Use of switch statements and reducing repetitive code in the future.
- Use of comment code 'js doc'
- Increasing my use of global variable when I know the code will not be reassigned.
