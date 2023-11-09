<html>
    <head></head>
    <body>
<?php
$email = $_REQUEST['email'];
$conn= mysqli_connect('localhost','emily.long','JMK8P529','emilylong');
$sql="INSERT INTO emails(email) VALUE('$email')";
echo("test");

if(mysqli_connect_errno()) {
    echo "Connection to database failed:".mysqli_connect_error();
}
if(mysqli_query($conn, $sql)){
    echo 'window.location.href="successemail.html"';
}
mysqli_close($conn);
?>
<body>
</hmtl>