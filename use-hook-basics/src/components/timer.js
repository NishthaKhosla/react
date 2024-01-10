import { useState, useEffect } from "react";

const Timer = () => {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
   
   const timeInterval= setInterval(() => {
      console.log("use");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000)

    return () =>{
        clearInterval(timeInterval);
    }
  }, []
  )

  return (
    <div>
      <h1 className={"centered-container"}>{Counter}Seconds</h1>
    </div>
  );
};

export default Timer;
