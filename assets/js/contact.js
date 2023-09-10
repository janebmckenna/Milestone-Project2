
// Contact Form Functions
function sendMail(conatctForm) {
    emailjs.send('gmail', 'game-site', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'response': conatctForm.response.value,
        'feedback': contactForm.feedback.value,
        'subject': contactForm.subject.value

    })
        .then(
            function (response) {
                console.log('success - email sent', response);
            },
            function (error) {
                console.log('failed - email not sent', error);
            }
        )
    return false;
}

