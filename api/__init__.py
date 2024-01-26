import json
from flask import Flask
from analysis import hello

app = Flask(__name__)

# App route
@app.route('/')

# Return results of analysis
def create_app():
    data  = hello()
    str = "{\"data\": \"" + data + "\"}"
    return json.loads(str)

# Run app
if __name__ == "__main__":
    app.run()