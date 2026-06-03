<?php
$to = 'email@reparaciondieselloja.com';
$subject = 'Test desde Reparación Diesel Loja';
$message = 'Este es un email de prueba desde el servidor.';
$headers = 'From: email@reparaciondieselloja.com';

if (mail($to, $subject, $message, $headers)) {
    echo 'OK - Email funciona correctamente';
} else {
    echo 'ERROR - Email no funciona';
}
?>
