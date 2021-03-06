from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String(64), nullable=False)

    map0_scores = db.relationship('Map0', backref='user', lazy='dynamic')
    map1_scores = db.relationship('Map1', backref='user', lazy='dynamic')
    map2_scores = db.relationship('Map2', backref='user', lazy='dynamic')
    map3_scores = db.relationship('Map3', backref='user', lazy='dynamic')
    map4_scores = db.relationship('Map4', backref='user', lazy='dynamic')
    map5_scores = db.relationship('Map5', backref='user', lazy='dynamic')

    def __init__(self, username, password):
        self.username = username
        self.password = password


class Map0(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id


class Map1(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id


class Map2(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id

class Map3(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id

class Map4(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id

class Map5(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.ForeignKey('user.id'))

    def __init__(self, score, user_id):
        self.score = score
        self.user_id = user_id
