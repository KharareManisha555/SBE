<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    // echo $_POST;
    $x =  $_POST;
    echo json_encode($x);
    // echo $_POST['emailId'];
    // echo $_POST['companyName'];
    if ($_POST['firstName']){
    
    	$to = $_POST['emailId'];
         $subject = $_POST['companyName'];
         
        //  $message = "<b>Hello Shree Balaji Electricals</b>";
         $message = 'Hello Shree Balaji Electricals,' . '<br><br> You got an request from '.$_POST['firstName'] .' '.$_POST['lastName'].'<br><b>Company Name:</b> '.$_POST['companyName'].'<br><b>Requirements:</b> '. $_POST['requirement'] .'<br><b>Address:</b> '.$_POST['address'].'<br><b>Mobile Number:</b> '.$_POST['mobileNumber'].'<br> <b>Email Id:</b> '.$_POST['emailId'];
         
         $header = "From:shhribalajielectricals@gmail.com \r\n";
         $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully.";
         }else {
            echo "Message could not be sent.";
         }
    	
    }else{
    	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}
?>