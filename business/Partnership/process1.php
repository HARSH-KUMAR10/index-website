<html>
<head>
<style>
#head{
	font-size:30px;
	font-weight:800;
	font-family:verdana;
}
#all{
	font-size:20px;
	font-weight:600;
	font-family:verdana;	
}
</style>
<title>Submission For collab or partnership | Group Developer</title>
</head>
<body>
<div id="head">GROUP DEVELOPER</div>
<div id ="all">Thanks for registering with us, if your idea is selected our executive will contact to you directly.</div>
<?php
if(isset($_POST['sub1'])){
	$name=$_POST['yname'];
	$email=$_POST['email1'];
	$mob=$_POST['mob1'];
	$web=$_POST['web'];
	$soc=$_POST['soc1'];
	$idea=$_POST['ideas'];
	$myfile = fopen("../../DATA/collab.txt","a");
	fwrite($myfile,"xx-------------------xx\n");
	fwrite($myfile,"Name:");
	fwrite($myfile,$name);
	fwrite($myfile,"\nEmail:");
	fwrite($myfile,$email);
	fwrite($myfile,"\nNumber:");
	fwrite($myfile,$mob);
	fwrite($myfile,"\nWebsite:");
	fwrite($myfile,$web);
	fwrite($myfile,"\nSocail:");
	fwrite($myfile,$soc);
	fwrite($myfile,"\nIdea:");
	fwrite($myfile,$idea);
	fwrite($myfile,"\nxx-------------------xx\n");
	fclose($myfile);
	$myfile1 = fopen("../../DATA/emails.txt","a");
	fwrite($myfile1,"xx-------------------xx\n");
	fwrite($myfile1,"Name:");
	fwrite($myfile1,$name);
	fwrite($myfile1,"\t\t\tEmail:");
	fwrite($myfile1,$email);
	fwrite($myfile1,"\nxx-------------------xx\n");
	fclose($myfile1);
	echo "Your data has been recorded successfully.";
	
}
?>
</body>
</html>