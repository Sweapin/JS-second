// bank simulator

/*
Object name: account Properties of the object:
accountName: String,
balance: Number (initiate this to 100 from start),
getBalance: function,
deposit: function,
withdrawal: function,
getAccountName: function,
Extra accountError: function,
Extra exitAccount: function

The main function should be called atm() and that is not a 
function that is a property of the object. This function 
holds the actual menu, the switch or if/else. I've provided 
some starter code inside of that function but you need 
to modify it also run the function.

Objektet ska hanetar all logik

Funktionen atm() den ska egentligen bara sköta menyn, att visa en meny

*/

const account = {
  accountName: "Helena",
  balance: 100,
  getAccountName: function () {
    // använda alert
    // glöm inte att du måste använda ett speciellt keyword
  },
  getBalance: function () {
    alert(`account balance ${account.balance}SEK`);
    atm();
  },
  deposit: function () {
    let dep = parseFloat(prompt("How much would you like to deposit?"));
    // hantera error för att man inte kunna sätta in 0, något som inte är nummer och inte minusvärden
    if (isNaN(dep)) {
      // lägg till att kolla så att dep inte är lika med 0 eller mindre
      // om det nu är så att det blir fel så visa ett meddelande om att blev error eller nåt
      // kalla på deposit igen för att ge användaren en ny chans
    } else {
      this.balance += dep;
      //this.balance = this.balance + dep;
      // den nya balansen ska vara lika med den gamla balansen + den nya insatta värdet
      this.getBalance();
    }
  },
  withdrawal: function () {
    // hantera på samma sätt som deposit men ändra till minus istället för +
  },
};

function atm() {
  let choice = parseInt(prompt("Display menu choices here"));
  //prompt user for choice.

  if (choice === 1) {
    // visa namnet
    account.getAccountName();
    //console.log("Choice nr 1");
  } else if (choice === 2) {
    alert("Choice nr 2");
  } else {
    console.log("Error, choose between 1-2");
  }
  // Tänk på att hantera om man väljer något annat nummer som inte är ett menyval
  // hantera sist i en else
}

atm();
