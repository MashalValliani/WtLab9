$(document).ready(function (v){
//$(function() {
    // Get the form.
    //var form = $('#ajax-contact');

$("#submit").click(function (e){

e.preventDefault();

var usr=$("#usr").val();
var email=$("#email").val();
var num=$("#num").val();
var comment=$("#comment").val();
//alert(usr);

$.ajax({
	url: "lab9Part(B)Task1php.php",
	type: "POST",
	data:{usr:usr, email:email, num:num, comment:comment},
		success:function(data)
		{
		$("#usr").val("");
		$("#email").val("");
		$("#num").val("");
		$("#comment").val("");
		alert("Inserted Successfully");
		},
		
		error:function(error){
		alert(error);
		alert(JSON.strinify(error));
		}
	});
});

});