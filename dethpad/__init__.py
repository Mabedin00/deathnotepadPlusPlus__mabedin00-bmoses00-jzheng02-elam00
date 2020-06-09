import os

from flask import Flask, render_template, request
from flask_login import LoginManager, current_user

from dethpad.models import db, User
from dethpad.auth import auth

app = Flask(__name__)
app.register_blueprint(auth)
app.secret_key = os.urandom(32)
DIR = os.path.dirname(__file__) or "."
DIR += "/"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./static/data/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

db.init_app(app)
#with app.app_context():
#    db.create_all()

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth.login'
login_manager.login_message = 'Log in to view this page.'
login_manager.login_message_category = 'danger'


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/')
def root():
    return render_template("game.html", dir = DIR)


@app.route('/test')
def test():
    return render_template('base.html')


@app.route('/bagel', methods=['POST'])
def bagel():
    data = request.get_json(force = True)
    print (data['score'])
    return 'nothing to see here';


if __name__ == "__main__":
    app.debug = True
    app.run()