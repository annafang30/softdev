"""
TPNG: TBD
K20: A RESTful Journey Skyward
Estimated Time: TBD
21 November, 2022
"""
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def mimic():
	return render_template("main.html")

if __name__ == "__main__":
	app.debug = True
	app.run()
