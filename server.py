from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
  return jsonify(
    message = 'hello world',
    data = 123123123123123
  )

if __name__ == '__main__':
  app.run()