$( document ).ready(function() {
    // getting data from input
    $('#search').click(function() {
    	let userUrl = $('#user_input').serializeArray();
    	let myUrl = userUrl[0].value;
    	let myApi = 'AIzaSyAgh-iVLF7p-s8mYHITNvynlsuXlLjp3p4';
    	// requesting shortened url from google URL shortener API
        $.ajax({
             url:'https://www.googleapis.com/urlshortener/v1/url?key='+myApi,
             type:"POST",
             data:JSON.stringify({longUrl:myUrl}),
             contentType:"application/json",
             dataType:"json",
             success: function(data){ 
             	// showing the url to the user
             	$('#results').html("Your new url is : " + data.id);
             	 }
        });
   

    })
});