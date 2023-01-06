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
    <><form ref={form} onSubmit={sendEmail}>
          <label className="motion-safe:animate-fadeIn border-solid border-2 border-violet-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Name</label>
          <input type="text" name="namee" className="motion-safe:animate-fadeIn hover:h-8 hover:w-96 duration-1000 cursor-text border-solid border-2 border-violet-900 w-80 ml-[30px]" />
          <br></br>
          <label className="motion-safe:animate-fadeIn border-solid border-2 border-violet-900 w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Email</label>
          <input type="email" name="email" className="motion-safe:animate-fadeIn hover:h-8 hover:w-96 duration-1000 cursor-text border-solid border-2 border-violet-900 w-80 ml-[34px]" />
          <br></br>
          <label className="motion-safe:animate-fadeIn border-solid border-2 border-violet-900 w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Message</label>
          <textarea name="message" className="motion-safe:animate-fadeIn hover:h-36 hover:w-96 duration-1000 cursor-text border-solid border-2 border-violet-900 h-32 w-80 ml-[10px] " />
          <br></br>
          <input className="motion-safe:animate-fadeIn hover:h-8 duration-1000 hover:text-lg font-sans hover:text-rose-900 hover:font-black transition-all font-black cursor-pointer border-solid border-2 border-violet-900 w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl ml-[76px]" type="submit" value="Send" />
      </form>
      <div className="grid grid-cols-4 gap-4 motion-safe:animate-fadeIn">
        <a href="https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/" target="_blank"><img src="\linkedinlogo1.png" alt="linkedinlogo" className="mt-[50px] w-40 hover:w-48 duration-1000"></img></a>
        <a href="https://www.youtube.com/channel/UCe2iiKDlnL3Rr1N2K-eMQRA" target="_blank"><img src="\youtubelogo.png" alt="youtubelogo" className="mt-[50px] w-40 hover:w-48 duration-1000"></img></a>
        <a href="https://www.tiktok.com/@tiktokwithnas" target="_blank"><img src="\tiktoklogo.png" alt="tiktoklogo" className="mt-[50px] w-40 hover:w-48 duration-1000"></img></a>
      </div>
    </>
  );
};

export default Contact;