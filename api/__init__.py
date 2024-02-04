import numpy as np

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

from analysis import data_analysis

app = Flask(__name__)

cors = CORS(app, origins=['http://localhost:3000', 'https://alexismrosales.github.io'])
app.config['CORS_HEADERS'] = 'Content-Type'

# App route
@app.route('/')
@cross_origin()
# Return results of analysis
def create_app():
    data  = data_analysis()
    print("Data obtained succesfully...\n")
    data = recursive_map(data)
    print("Data converted succesfully\n")
    # Return of json file with data
    return jsonify(data)

# Convert all np int data of 32 and 64 bits to an python int value
def convert_int64 (value):
  if isinstance (value, np.int64) or isinstance (value, np.int32):
    return int (value)
  else:
    return value

# Use a recursive function to convert every numpy int type data 
def recursive_map(data):
    new_data = {}
    for k, v in data.items():
        if isinstance (v, dict):
            new_value = recursive_map (v)
        elif isinstance (v, list):
            new_value = list (map (lambda x: convert_int64 (x), v))
        else: 
            new_value = convert_int64 (v)
        new_data[k] = new_value
    return new_data
# Run app
if __name__ == "__main__":
    app.run()