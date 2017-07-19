<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Tic Tac Toe</title>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <div>
            <h2>Tic Tac Toe</h2>
            <h4>
                Player 1 - X<br>
                Player 2 - O
            </h4>
            <table>
                <tr class="fromLeft">
                    <td><button class="btn btn-default btn-lg" id="00"></button></td>
                    <td><button class="btn btn-default btn-lg" id="01"></button></td>
                    <td><button class="btn btn-default btn-lg" id="02"></button></td>
                </tr>
                <tr class="fromLeft">
                    <td><button class="btn btn-default btn-lg" id="10"></button></td>
                    <td><button class="btn btn-default btn-lg" id="11"></button></td>
                    <td><button class="btn btn-default btn-lg" id="12"></button></td>
                </tr>
                <tr class="fromLeft">
                    <td><button class="btn btn-default btn-lg" id="20"></button></td>
                    <td><button class="btn btn-default btn-lg" id="21"></button></td>
                    <td><button class="btn btn-default btn-lg" id="22"></button></td>
                </tr>
            </table>
            <h4 id="playAgain">Play again</h4>
        </div>
        <?php
        // put your code here
        ?>
    </body>
</html>
