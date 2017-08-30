function update() {
    /* ===================
        Your code starts here
    =====================*/

 var messages = [];
 var firstName = getValue('firstName');
if (firstName.length == 0){
    messages.push('First Name is required');
}
var lastName = getValue('lastName');
if (lastName.length == 0){
    messages.push('Last Name is required');
}
var emailAddress = getValue('emailAddress');
if (emailAddress.length == 0){
    messages.push('Email is required')
}

for(var i = 0; i < messages.length; i++){
    document.getElementById('error-list').innerHTML += messages[i];
}

var user = {
    firstName: getValue('firstName'),
    lastName: getValue('lastName'),
    emailAddress: getValue('emailAddress'),
    }
var fullName = user.firstName + ' ' + user.lastName;
    console.log(fullName);

    var d = new Date();
if (messages.length == 0){
    alert('Submitted on' + ' '+ d.toDateString());
}

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}