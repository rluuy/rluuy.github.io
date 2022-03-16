from flask import Flask, render_template, request, redirect
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == "POST":
        req = request.form

        user_age = req["age"]
        user_weight = req["weight"]

        #print(user_age, user_weight)
        train()
        prediction = load(user_age,user_weight)
        #print('prediction is :' + str(prediction))

        return render_template('index.html', pred=prediction)

    return render_template('index.html')

# Code adapated from model.py
def train():
    df = pd.read_csv("SBP.csv")
    x = df[["Age", "Weight"]]
    y = df["SBP"]
    regr = LinearRegression()
    regr.fit(x, y)

    joblib.dump(regr, "luuy_regr.pkl")

# Code adapated from model.py
def load(user_age, user_weight):
    clf = joblib.load("luuy_regr.pkl")
    age = user_age
    weight = user_weight
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return prediction

if __name__ == '__main__':
    app.run()
