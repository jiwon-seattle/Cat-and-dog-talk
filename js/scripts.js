$(document).ready(function() {
  $("button#Dog").click(function() {
    $("ul#Catspeak").append("<li>What does the dog say</li>");
    $("ul#Dogspeak").append("<li>Woof</li>");
    $('li').css('background-color', 'green');
   
    });
 


  $("button#Cat").click(function() {
    $("ul#Catspeak").append("<li>What does the cat say</li>");
    $("ul#Dogspeak").append("<li>Meow</li>");
    $("ul#Dogspeak").append('<img src="img/cat.jpg" alt="cat">');
    
  });

 $("button#Pic").click(function(){
   $("ul#Catspeak").append('<img src="img/cat.jpg" alt="cat">');
   $( "ul#Catspeak").after("Isn't this cat cute")
 });


});