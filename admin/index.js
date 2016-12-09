function registerUserComplete(xhr,status){
	// alert("here");
				var log = $.parseJSON(xhr.responseText);
				// alert("here now");
				if(log.result==1){
				window.location.href = "viewreports.html";
				// alert("worked");
				return;
				}
				
				else{				
				alert("failed");
				return;
				}			
			}
			
			
function Reports(){
var dataString="http://52.89.116.249/~rejoice.hormeku/IseeYou/admin/userdb/message.php?cmd=1";
//alert(dataString);
 //prompt('user has logged in', dataString);
			

$.ajax(dataString, 
		{async:true,
		 complete:registerUserComplete
		}
		);
		// prompt("url",dataString);
	
}

