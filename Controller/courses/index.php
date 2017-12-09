<?

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/*
 * We would need:
 * */

$courses = array();

echo json_encode($courses);

?>
