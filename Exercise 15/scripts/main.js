$(document).ready(function(){

     ///// Code goes here
//Part 1
$('#btnOne').on('click', function(){
alert('You Clicked the button');
});

//Part 2
$('#btnTwo').on('click', function(){
    //console.log('Clicked button 2 test');
    $('.update-html').html('<h3>Hello World!<h3>');
    
});

//Part 3
$('#btnThree').on('click', function(){
    $('#text-update').val('Hello World');

});

//Part 4
$('#btnCopyHtml').on('click', function(){
    var copiedHTML = $('.copy-html').html();
    $('.paste-html').html(copiedHTML);

});

//Part 5
$('#btnCopyValues').on('click', function(){
    var copiedValue = $('#copy-text').val();
    $('#paste-text').val(copiedValue);

});

});
