var lyric = "maybe";
//Moved var lyric from inside the function to make it a global variable
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
//Had to move thisIsCrazy() because it was not defined by var thisIsCrazy yet
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";


  function sayMy() {
    var name = "Kristin";
    //Switched the order of these lines because variable needs to be
    // declared before it is called
    console.log(name);
  }
  sayMy();
  //moved the invocation of sayMy() to after its declaration
}
