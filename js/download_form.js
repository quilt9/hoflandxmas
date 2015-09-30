window.onload = function() {
  var input = document.getElementById("password").focus();
}

function required()  
{  
var pswd = document.forms["prebook"]["password"].value;  
if (pswd == "")  
{  
document.getElementById("error").innerHTML = "Please enter a password.";  
return false;  
}  
else  
{
	pswd = pswd.toLowerCase();
	if (pswd == "traditionalfresh")
	{
		window.open('http://www.hofland.com/sf-flyers-190823996-0$9-login/Hofland_ChristmasGiftware2014.pdf', '_blank')
	}
	else
	{
		alert("Please enter the password supplied.");
	}
}
}