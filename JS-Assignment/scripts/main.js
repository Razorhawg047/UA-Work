var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    document.getElementById('p1_fullName').innerHTML = firstName + ' ' + lastName;
    fnameLength = firstName.length;
    lnameLength = lastName.length;
    if ((fnameLength > 0) && (lnameLength > 0)){
        document.getElementById('p1_valid').innerHTML = 'Yes';
    }else{
        document.getElementById('p1_valid').innerHTML = 'No';
    }
    document.getElementById('p1_fullNameLength').innerHTML = fnameLength + lnameLength;


    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;
    var validEmail = (emailAddress.indexOf('@') > -1);
    document.getElementById('p2_valid').innerHTML = validEmail;
    emailLength = emailAddress.length;
    document.getElementById('p2_emailLength').innerHTML = emailLength;


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById('p3_number').innerHTML = randomNumber;
    var numberValid = parseInt(randomNumber);
    if (isNaN(numberValid)){
        document.getElementById('p3_valid').innerHTML = "No";
    }else {
        document.getElementById('p3_valid').innerHTML = "Yes";
    }




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    arrayItems.push(arrayInput);
    var arrayLength = arrayItems.length;
    getElm('p4_arraylength').innerHTML = arrayLength;
    getElm('p4_valid').innerHTML = arrayItems;










    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

