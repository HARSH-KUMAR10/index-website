<html>
<body>
<?php
if(isset($_POST['submit'])){
	$name=$_POST['cname'];
	$phone=$_POST['cpno'];
	$email=$_POST['cemail'];
	$lan=$_POST['clan'];
	$def=$_POST['def'];
	$my_file=fopen("projects/project.txt","a");
	fwrite($myfile,"\n-------\n");
	fwrite($myfile,"Name:");
	fwrite($myfile,$name);
	fwrite($myfile,"\nPhone:");
	fwrite($myfile,$phone);
	fwrite($myfile,"\nEmail:");
	fwrite($myfile,$email);
	fwrite($myfile,"\nLanguage:");
	fwrite($myfile,$name);
	fwrite($myfile,"\nDefinition:");
	fwrite($myfile,$def);
	fwrite($myfile,"\n-------\n");
	fclose($myfile);
	$myfile1=fopen("../../../../Emails/email.txt");
	fwrite($my_file1,"\n------\n");
	fwrite($my_file1,"Name:");
	fwrite($my_file1,$name);
	fwrite($my_file1,"\t\t\tEmail");
	fwrite($my_file1,$email);
	fwrite($my_file1,"\n------\n");
	fclose($my_file1);
	echo "Your Project has been recieved, Our Executive will reach you soon.<br/><br/>";
	echo "<h2>Do not refresh or resubmit the form.</h2><br/>";
	echo "<h3>Please Close This Tab</h3><br/>";
}
else{
	echo "Looking Lost ?";
	echo "Close this tab";
}
?>
</body>
</html>