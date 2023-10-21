/**
 * sends email to janemckenna@hotmail.com using email.js content based on user input.
 * Alerts the user if contact has been successfully sent or not. 
 */
function sendMail(contactForm) {
    emailjs.send('gmail', 'game-site', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'response': contactForm.response.value,
        'feedback': contactForm.feedback.value,
        'subject': contactForm.subject.value

    }).then(function (response) {
        console.log('success - email sent', response);
        alert('Your email has been sent - thank you have a great day!');
    }, function (error) {
        console.log('failed - email not sent', error);
        alert('Ops sorry there was a problem your email hasnt sent, please try again');
    });
    return false;
}

