<?php
/*
task: Apply AJAX on feedback/contact form (created in previous HTML+CSS lectures) 
to send the form data to the php server without refreshing the page. Reset all the 
text fields after the data has been sent and display a success message in the alert box.
*/
$name=$_POST['usr'];
$email=$_POST['email'];
$ContactNo=$_POST['num'];
$comment=$_POST['comment'];
print "Done";
/*$emailReg = "/^([][\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
$numReg = "/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/";
if (name != '' && email != '' && contact != '' && comment != '') {
if(preg_match($emailReg, $email)) {
if(preg_match($numReg, $ContactNo)) {
alert("Form Submitted");
} else {
alert("Invalid Contact number");
}
} else {
alert("Invalid Email Address");
}
} else {
alert("Error!\nPlease fill the required fields");
}
}
if(preg_match($emailReg, $email))
echo "Login Successful";
else 
echo "email is incorrect";	
*/
?>