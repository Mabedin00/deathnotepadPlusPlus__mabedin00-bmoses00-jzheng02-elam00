run:
	cat static/js/Bloon.js static/js/mapdata.js static/js/Scene0.js static/js/Scene1.js static/js/config.js > static/js/game.js
	python3 app.py
