$(document).ready(function(){
    
  document.getElementById("tabs").innerHTML = "Let's check out Exercise 9!";
    
  $('button').click(function(){
        $('p').text("Hello look at me!");
    });    
    
  $('#second').click(function(){
        $('p').text("Hello second line changed following the click function!");
    });  
    
});


