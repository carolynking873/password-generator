document.getElementById("submit").onclick = function() {generatePassword()};

function generatePassword() {
    var password = prompt("Please select criteria: length, lowercase, uppercase, numeric, special characters");
    if (password != null) {
        document.getElementById("submit").innerHTML = 
        "You selected " + password;
    }
}
