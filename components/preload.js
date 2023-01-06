import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


function MainPage() {
  let [preloaded, setPreloaded] = useState(false)

  useEffect(() =>{
    function displayMainPage() {
      setPreloaded(true)
    }

    setTimeout(displayMainPage, 1000);
  }, [])


  if(!preloaded) {
    return (
      <div>
      <motion.svg
      className="border-solid border-2 border-violet-900 w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed center"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
        <h1 className="text-center overline decoration-emerald-900 decoration-4 font-black text-[1000px] mt-[300px]">Welcome To My Page!</h1>
      </div>
    );
    } else {
      return (
        <div>
          <a href="/"></a>
        </div>
        );
    }
  }

  
 


  export default MainPage;