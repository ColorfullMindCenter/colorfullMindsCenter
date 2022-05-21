$(document).ready(function(){   //When page loads

    //Hide name and slogan
    $("#header").hide(); 
    $("#name").hide();       
    $("#slogan").hide();   
    $("#arrow-down").hide(); 
    $("#arrow-bottom").hide();   
      
    //Slide down name and fade in slogan and down arrow
    $("#name").slideDown(1500);             
    $("#slogan").fadeIn(2500); 
    $("#arrow-down").slideDown(1500);
    $("#header").slideDown(1500);
    
    //Run Arrow slide animation after 1200 ms
    setTimeout(function() {  
        $("#arrow-bottom").show();
        $("#arrow-bottom").animate({'margin-left':'0'},800);
    }, 1200); 

});
     