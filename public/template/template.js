module.exports = {
	MAIN:function(script) {
		return `
			<!doctype html>
			<html>
			<head>
				<title>Mine Sweeper</title>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
				<script src="/js/two.js"></script>
				<script src="/js/Board/Board.js"></script>
				<script src="/js/Board/Mine_Board.js"></script>
				<script src="/js/Board/Player_Board.js"></script>
			</head>
			<body>
				<div id="c" style="width: 640px; height:640px;"></div>
				<script>${script}</script>
			</body>
			</html>
		`;
	}
}