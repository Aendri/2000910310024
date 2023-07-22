from flask import Flask, request, jsonify
import requests
import time

app = Flask(__name__)

def get_numbers_from_url(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            return data.get("numbers", [])
    except requests.exceptions.Timeout:
        pass  

    return []

@app.route('/numbers', methods=['GET'])
def get_merged_numbers():
    urls = request.args.getlist('url')

    merged_numbers = set()
    for url in urls:
        numbers = get_numbers_from_url(url)
        merged_numbers.update(numbers)

    merged_numbers = sorted(merged_numbers)

    return jsonify({"numbers": merged_numbers})

if __name__ == '__main__':
    app.run(host='localhost', port=8080)
