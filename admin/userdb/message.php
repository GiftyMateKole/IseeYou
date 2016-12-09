
<?php
// define variables and set to empty values


include_once("http://52.89.116.249/~rejoice.hormeku/IseeYou/admin/userdb/users.php");

if(isset($_REQUEST['cmd'])){
$cmd=$_REQUEST['cmd'];
switch($cmd){
	case 1:
	report();
	break;
	default:
	echo "wrong command";
	break;
}
}

function report(){
	
	
	$new = new users();
	$check = $new->adminview();
	
	
if ($check){
		echo '{"result":1,"message":"Success"}';
	}
	else
	{		echo '{"result":0,"message":"Error"}';
}




?>



