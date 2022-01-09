/* 
What to do:
I need to create an personal bank account which withholds balance
withdrawal function, deposit funtion.. etc

Object name: account Properties of the object:
accountName: String,
balance: Number (initiate this to 100 from start),
getBalance: function,
deposit: function,
withdrawal: function,
getAccountName: function,
Extra accountError: function,
Extra exitAccount: function
*/

const account = {
    accountName: "Alexander",
    balance: 100,
    getAccountName: function () {
        alert('Name of account: ${this.accountName}');
        atm();
    },

    getBalance: function(){
        alert('Your balance is: ${this.balance}SEK');
        atm();
    },
    
    deposit: function() {
        let dep = parseInt(prompt('How much do you wish to deposit?'));
        if (isNaN(dep) || dep <= 0 || dep === "") {
            alert(`please enter valid number`);
            this.deposit();
        } else {
            dep = dep + account.balance;
            alert(`your current balance is ${dep}kr`);
            account.balance = dep;
            atm();
        }
    },

    withdrawal: function() {
        let dep = parseInt(prompt('How much do you wish to withdraw?'));
        if (isNaN(dep) || dep <= 0 || dep === "") {
            alert(`please enter valid number`);
            account.withdrawal();
        } else if (account.compare(dep, account.balance)) {
            alert('insufficient account balance');
            account.withdrawal();
        } else {
            account.balance = account.balance - dep;
            alert(`account balance is${account.balance}kr`);

            atm();
        }
    },

    accountError: function() { alert(`error`); 
    
    },

    exitAccount: function () {
        alert('Thank you for using this ATM, logging out..');
        window.close();
    }
}

function atm() {
    let choice = parseInt(
        prompt("Select a number: 1. Account information 2. Withdrawal 3. Deposit 4. Check your balance 5. Log out"
        )
    );

    if (choice === 1) {
        account.getAccountName();
        atm();
    } else if (choice === 2) {
        withdrawal = prompt("How much do you want to withdrawal?");
        if (account.balance >= withdrawal) {
          account.withdrawal();
    } else if (choice === 3) {
        deposit = prompt("How much would you like to deposit?");
        account.deposit();
    } else account.accountError();
    } else if (choice === 4) {
        alert(`Your current balance is: ${account.balance}`);
        atm();
    } else if (choice === 5) {
        account.exitAccount();
    } else if (choice > 5) {
        alert("this service is not available!");
        atm();
    }
}

atm();


