var today=new Date();
console.log(today);

var year=today.getFullYear();
console.log(year);

var month=today.getMonth();
console.log(month);

var day=today.getDay();
console.log(day);

var date=today.getDate();
console.log(date);
document.write("1.This Year Leap or Not?"+"<br>");
document.write(today+"<br>");
if(year%4==0)
{
	document.write("This is leap Year"+"<br>");
}
else{
	document.write("This is not leap Year"+"<br><br>");
}

today.setFullYear(2000);
console.log(today);
var change=today.getFullYear();
console.log(change);
document.write("2.The given year is leap or not?"+"<br>");
document.write("The given year is 2000"+"<br>");
if(change%4==0)
{
	document.write("This is leap Year"+"<br><br>");
}
else{
	document.write("This is not leap Year"+"<br><br>");
}

document.write("3.Today is weekend or not?"+"<br>");
document.write("Today is&nbsp;"+day+"<br>");
if((day==0)||(day==6)){
	document.write("This is week end"+"<br>");
}
	else{
		document.write("This is not week end"+"<br>");
	}
		