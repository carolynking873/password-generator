var employeePassword = window.prompt("Please create a password.");
var employeePasswordMaxCharacters = 128;
var employeePasswordMinCharacters = 8;

// You can also log multiple values at once like this
console.log(employeePassword, employeePasswordMinCharacters, employeePasswordMaxCharacters);

var generate = function() {
    // Alert employee that they are generating a password
    window.alert("Welcome to the Password Generator!");

    // Log a resulting message to the console so we know that it worked.
    console.log(
        employeePassword + " created"
    );

    // check password length
    if (employeePassword < 8) {
        window.alert(employeePassword + " is too short.");
    }
    else {
        window.alert(employeePassword + " created ");
    }
};

generate();