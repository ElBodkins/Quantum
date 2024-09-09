<?php
if (isset($_POST['submit'])) {
   //Obtenemos valores input formulario
   $name = $_POST['fname'];
   $lastname= $_POST['lname'];
   $email = $_POST['email'];
   $company = $_POST['company'];   
   $message = $_POST['message'];
   $to = 'dadatavo25@gmail.com';

   //Creamos cabecera.
   $headers = "From: noreplay@quantum.com" . "\r\n";
   $headers .= "Content-type: text/html; charset=utf-8";
   $headers .= "X-Mailer: PHP/". phpversion();
   //Componemos cuerpo correo.
   $msjCorreo = "Nombre: " . $name ." ".$lastname;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Email: " . $email;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Company: " . $company;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Mensaje: " . $message;
   $msjCorreo .= "\r\n";
   $asunto = "Nuevo correo";
  $mail= mail($to,$asunto,$msjCorreo,$headers);
 if ($mail) {
      echo "<h4>Enviado Correctamente</h4>";
 } 
}
 
?>