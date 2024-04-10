import emailjs from '@emailjs/browser';

export const handleUpdateSubscription = async (e, form) => {
  e.preventDefault();
  // send the form data to emailjs
  emailjs
    .sendForm(`${process.env.REACT_APP_EMAILJS_SERVICEID}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
      form.current, {
      publicKey: `${process.env.REACT_APP_EMAILJS_PK}`,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Thank you for subscribing to the early access list!');
        // clear the form
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to subscribe. Please try again later.');
      }
    );
};
