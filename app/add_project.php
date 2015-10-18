<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

$name = $_POST['name-input'];
// $fileinput = $_POST['file-input'];
$urlinput = $_POST['url-input'];
$textinput = $_POST['text-input'];

$data = array();
$data['mes'] = 'OK';

// if ($name === '' || $urlinput === '' || $textinput === '')
if ($name === ''){
  $data['status'] = 'error';
  $data['text'] = 'Input please information!';
}else{
  $data['status'] = 'OK';
  $data['text'] = 'Thank, You wrote all data!';
}

header("Content-Type: application/json");
echo json_encode ($data);
exit;
 ?>
