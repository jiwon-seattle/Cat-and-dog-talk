$(document).ready(function() {
  $("button#Dog").click(function() {
    $("ul#Catspeak").append("<li>What does the dog say</li>");
    $("ul#Dogspeak").append("<li>Woof</li>");
    $('li').css('background-color', 'green');

    });



  $("button#Cat").click(function() {
    $("ul#Catspeak").append("<li>What does the cat say</li>");
    $("ul#Dogspeak").append("<li>Meow</li>");
    $('<img src="img/cat.jpg" alt="cat">').after("ul#Dogspeak");

  });

 $("button#Pic").click(function(){
   $("ul#pics").append("<li>Let's add a cat's picure</li>");
   $("ul#Catspeak").after('<img src="img/cat.jpg" alt="cat">')
   $("ul#Dogspeak").after('<img srcp"img/dog.jpg alt="dog">')
 });

 $("button#remove").click(function(){
   $("img").remove();
   $("li").remove();
 });


});
