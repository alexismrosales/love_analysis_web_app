from flask import Flask
from analysis import hello
app = Flask(__name__)
@app.route('/')

def create_app():
    return hello()

if __name__ == "__main__":
    app.run()
    
    
