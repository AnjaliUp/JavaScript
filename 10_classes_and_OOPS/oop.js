const user = {
    username: "anjali",
    loginCount: 8,
    signedIn: true,
  
    getUserDetails: function () {
      //console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this);
    },
  };
  
  // console.log(user.username)
  // console.log(user.getUserDetails());
  // console.log(this);
  
  function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn - isLoggedIn;
  
  //   return this; -> This is not necessary Psssed implicitly
  }
  
  const userOne = new User("anjali", 12, true)
  const userTwo = new User("ChaiAurCode", 11, false)
  console.log(userOne.constructor);
  //console.log(userTwo);
  
  // New keyword creates a new empty object everytime
  // New keyword calls a constructor function
  // The variables are assigned