$(document).ready(function(){
  var searchinput;
  
  $("#searchcontent").keypress(function(event) {
  if ( event.which == 13 ) {
     $("#searchbutton").click();
  }
  });
  
  
  
  $("#searchbutton").on("click", function(){
    searchinput = $("#searchcontent").val();
 $.ajax({
 type: "GET",
 url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchinput + "&prop=revisions&rvprop=content|user&format=json&callback=?",
   dataType: 'json',
 async: false,
 success: function(data) {
  // console.log(data[3][1]);
   $("#result").html('');
    for(var i=0; i<data[1].length; i++){
      $("#result").prepend(
        
      "<div> <div class='well'>" + 
          "<a href='" + data[3][i] + "'>" +
            "<h5>" + data[1][i] + "</h5>" + "</a>"     
        + "<p>" + data[2][i] + "</p>"  + 
        "</div>" + "</div>" );
     }
   $("#searchcontent").val('');
 }
    
  });  
    });
  
  
  
  });