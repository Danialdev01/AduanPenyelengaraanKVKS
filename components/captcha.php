<?php
function generateCaptcha($num){
	$x=1;
	$code='';
	$num=$num+1;
	for($x;$x<$num;$x++){
		$code .= rand(0,9);
	}
	return $code;
}
$code=generateCaptcha(5);
?>

<style>
    .captcha { 
    padding:10px 30px 10px 30px; font-size: 18px; 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    background-image: url('<?php echo $dir_location ?>/src/assets/images/captcha.png');
    }
</style>