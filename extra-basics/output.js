//give the output for following codes.

//var is function scope
for (var i = 0; i < 5; i++) {
    //synchronous--it is pushed when all conditions are fulfilled when i =5
    setTimeout(() => {
      //asynchronous--it prints 5 five times
      console.log(i);
    }, 500);
  }
  
  //let is block scope
  for (let i = 0; i < 5; i++) {
    //after each blocked it is pushed
    setTimeout(() => {
      //it prints all the numbers
      console.log(i);
    }, 500);
  }
  
  //order of executing
  
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 500);
  console.log("3");
  
  //micro and macro task queues decide the priority of executing two or more asynchronous functions
  
  console.log("1");
  
  Promise.resolve().then(() => {
    console.log("Promise resolved");
  }); //promise is a part of microtask and is executed first
  
  setTimeout(() => {
    console.log("inside setTimeout");
  }); //set timeout is a macrotask and will be executed later.
  
  console.log("3");
  
  console.log("1");
  
  Promise.resolve().then(() => {
    console.log("Promise resolved");
  });
  setTimeout(() => {
    console.log("inside setTimeout");
    Promise.resolve().then(() => {
      console.log("promise inside timeout");
    });
  });
  
  console.log("3");
  