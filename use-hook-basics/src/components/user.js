import { useState, useEffect } from "react";

const User = () => {
  const [isLoggedIn, setLoggedin] = useState(false);

  useEffect(() => {
   
    document.title = isLoggedIn ? "welcome User" : "Please Login";
  }, [isLoggedIn]);

  const handleClick = () => {
    setLoggedin(true);
  };

  const handleClickk = () => {
    setLoggedin(false);
  };

  return (
    <div className={"centered-container"}>
      <div className={"intro"}>
        <h2>{isLoggedIn ? "Welcome!" : "Please log in"}</h2>
        {isLoggedIn ? (
          <button onClick={handleClickk}>Logout</button>
        ) : (
          <button onClick={handleClick}>Login</button>
        )}
      </div>
    </div>
  );
};

export default User;
