<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <title>Моя страница с JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        #result {
            margin-top: 20px;
            font-weight: bold;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Нажми кнопку, чтобы выполнить функцию</h1>
    <button onclick="sayHello()">Нажми меня</button>
    <div id="result"></div>

    <script>
        // Простая функция, выводящая приветствие
        function sayHello() {
            const name = prompt("Введите ваше имя:");
            const message = name ? "Привет, " + name + "!" : "Привет!";
            document.getElementById("result").textContent = message;
        }
    </script>
</body>
</html>
