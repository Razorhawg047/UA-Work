var errorlist = [];

document.getElementById('submit').addEventListener('click', function(){
    var name = document.getElementById('username').value;
    var nameInput = document.getElementById('username');
    var password= document.getElementById('password').value;
    var pwdInput = document.getElementById('password');
    var email = document.getElementById('email').value;
    var emailText = document.getElementById('email');
    var emailValid = email.indexOf('@');
    var timezone= document.getElementById('timezone').value;
    var timeZoneInput = document.getElementById('timezone');
    var terms= document.getElementById('terms').checked;
    var termsInput = document.getElementById('terms');
    if(name.length===0){
        errorlist.push('User Name is required');
        nameInput.classList.add('invalid');
    if(email.length===0|| emailValid===-1){
        errorlist.push('Email is required');
        emailText.classList.add('invalid');
    if(password.length===0){
        errorlist.push('Password is required');
        pwdInput.classList.add('invalid');
    if(timezone.length===0){
        errorlist.push('Time Zone is required');
        timeZoneInput.classList.add('invalid');
    if(terms!==true){
        errorlist.push('Acceptance of the terms is required');
        termsInput.classList.add('invalid');
    }}}}}else{
    document.getElementById('message').innerHTML = 'Form Successfully Submitted';
}
for (i = 0; i < errorlist.length; i++){
document.getElementById('message').innerHTML += errorlist[i] + ', '; 
}
if (errorlist.length>0){
    var message = document.getElementById('message');
    message.classList.add('error');
}
})
document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('timezone').value = '';
    document.getElementById('terms').checked = false;
})
