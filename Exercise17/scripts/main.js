$(document).ready(function(){
$('.form-elements').find('.error').hide();

var inputGroup = $('.input-group');
var evenInput = inputGroup.filter(':even');
$(evenInput).addClass('even');

function validate(){
var input =  $(this).val();
if(input.length === 0){
    $(this).closest('.input-group').find('.requiredMsg').fadeIn();
}else{
    $(this).closest('.input-group').find('.requiredMsg').fadeOut();
}}
function validateEmail(){
var email = $(this).val();
console.log(email);
console.log(email.indexOf('@'));
if(email.indexOf('@') === -1 || email.indexOf('.com') === -1){
    $(this).closest('.input-group').find('.emailMsg').fadeIn();
}else{
    $(this).closest('.input-group').find('.emailMsg').fadeOut();
}}
$('#firstName').on('blur', validate);
$('#lastName').on('blur', validate);
$('#emailAddress').on('blur', validate);
$('#emailAddress').on('blur', validateEmail);


});