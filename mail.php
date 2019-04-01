<?php
    $theme="Новое письмо";
    error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
    // создание переменных из полей формы		
    if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
    if (isset($_POST['phone']))		{$phone		= $_POST['phone'];		if ($phone == '')	{unset($phone);}}
    if (isset($_POST['mail']))			{$mail			= $_POST['mail'];		if ($mail == '')	{unset($mail);}}
    $variable__inp = $_POST['variable__inp'];
    //стирание треугольных скобок из полей формы
    // if (isset($name1) ) {
    // $name1=stripslashes($name1);
    // $name1=htmlspecialchars($name1);
    // }
    // if (isset($email1) ) {
    // $email1=stripslashes($email1);
    // $email1=htmlspecialchars($email1);
    // }
    // if (isset($text) ) {
    // $text=stripslashes($text);
    // $text=htmlspecialchars($text);
    // }
    // адрес почты куда придет письмо
    $address="Smart74-diana@mail.ru";
    // текст письма 
    $note_text="Тема : $theme \r\nИмя : $name \r\nPhone : $phone \r\nMail : $mail \r\nLamp : $variable__inp";
    
    if (isset($name)) {
    mail($address,$theme,$note_text,"Content-type:text/plain; windows-1251"); 
    }
    // сообщение после отправки формы
    header('Location: gratitude.php ');
?>