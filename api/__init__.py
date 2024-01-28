from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

from analysis import hello

app = Flask(__name__)

cors = CORS(app, origins=['http://localhost:3000', 'https://alexismrosales.github.io'])
app.config['CORS_HEADERS'] = 'Content-Type'

# App route
@app.route('/')
@cross_origin()
# Return results of analysis
def create_app():
    data  = hello()
    # Return of json file with data
    return jsonify(data=data)

# Run app
if __name__ == "__main__":
    app.run()