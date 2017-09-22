$(document).ready(function(){
var quotes = [
    "'I am Beyonce, always.' - Michael Scott (NBC's The Office)",
    "'Never, never, never give up' - Winston Churchill",
    "'I believe the most meaningful way to succeed is to help other people succeed' - Adam M Grant",
    "'No man has a good enough memory to be a successful liar' - Abraham Lincoln",
    "'If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month' - Theodore (Teddy) Roosevelt",
    "Random6",
    "Random7",
    "Random8",
    "Random9",
]

var getRandomNumber = Math.floor(Math.random() * quotes.length);
$('.quote').html(quotes[getRandomNumber]);
})