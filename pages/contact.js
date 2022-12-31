import React, { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wa81ddd",
        "template_1n87wy7",
        form.current,
        "sndBvg3Fj0EYngcPc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Name</label>
      <input type="text" name="namee" className="cursor-text border-solid border-2 border-violet-900" />
      <br></br>
      <label className="border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Email</label>
      <input type="email" name="email" className="cursor-text border-solid border-2 border-violet-900" />
      <br></br>
      <label className="border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Message</label>
      <textarea name="message" className="cursor-text border-solid border-2 border-violet-900" />
      <br></br>
      <input className="cursor-pointer border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl" type="submit" value="Send" />
    </form>
  );
};

export default Contact;