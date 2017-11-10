/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/
$('#btnvalidate').on('click', function(){
//console.log('Click works');

var emailAddy = $('#email').val();
var emailTest = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
var emailResult = emailTest.test(emailAddy);

console.log(emailResult);
if (emailResult === false){
    $('#email').addClass('is-invalid');
}else{
    $('#email').removeClass('is-invalid'); //to remove during testing if I test a false first
}

var numVal = $('#numeric').val();
var pattern = /[a-z]/ig;
var numResult = numVal.replace(pattern, '');

console.log(numResult);

$('#numeric').val(numResult);

})

     /*=======================
       Array Methods 
     =======================*/



var arTest = [1, 2, 3, 4]

var squared = arTest.map(function(element, index, array){
    return Math.pow(element, 2);

});
console.log(squared);


});