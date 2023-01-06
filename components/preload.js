import React, { useEffect, useState } from 'react';


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