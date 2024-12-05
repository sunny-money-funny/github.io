<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>실험 설문</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f7f7f7;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        .question {
            margin-bottom: 15px;
        }
        .options input {
            margin-right: 10px;
        }
        .submit-btn {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }
        .submit-btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>실험 설문</h1>
        <form id="experimentForm">
            <div id="questionContainer"></div>
            <button type="submit" class="submit-btn">결과 제출</button>
        </form>
    </div>

    <script src="experiment.js"></script>
</body>
</html>
