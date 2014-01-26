

//Create a user Cookie
function createCookie(username, daysForCookie)
{
	var storedInfo = "username=" + username + "; ";
	var expireDate = calcExpireTime(daysForCookie) + "; "; //Must be in UTC blank means cookie is deleted when browser closed
	var path = "students.cpcc.edu/~apannel1/"; //Sets where cookie is valid
	
	document.cookie = storedInfo + expireDate + path;
}//End createCookie

function calcExpireTime(days)
{
	if(days === 0)
		return "";
	else
	{
		var expireDate = new Date();
		expireDate.setTime(expireDate.getTime() + (days * 24 * 60 * 60 * 1000)); //Gets current date adds number of days in miliseconds to date sets date var
		
		var expireString = "expires=" + expireDate.toGMTString(); 
		
		return expireString;
	}
}//End calcExpireTime

function readCookie()
{
	if(document.cookie)
	{
		index = document.cookie.indexOf("username");
		if(index != -1)
		{
			var valueStart = document.cookie.indexOf("=", index) + 1;
			var valueEnd = document.cookie.indexOf(";", index);
			if(valueEnd == -1)
			{
				valueEnd = document.cookie.length;
			}
			
			var value = document.cookie.substring(valueStart, valueEnd);
			
			if(value === "username")
			{
				return "No Cookie Found";
			}
			else
			{
				return value;
			}
		}
	}
	else
	{
		return "No Cookie Found";
	}
}//End readCookie

function deleteCookie()
{
	createCookie("", -1);
}