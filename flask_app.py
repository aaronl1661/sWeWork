
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request, jsonify
import git
# from openai import OpenAI



app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def homepage():
    return render_template("main_page.html")

@app.route('/update_server', methods=['POST'])
def webhook():
    if request.method == 'POST':
        repo = git.Repo('github.com/aaronl1661/sWeWork')
        origin = repo.remotes.origin
        origin.pull()

        return 'Updated PythonAnywhere successfully', 200
    else:
        return 'Wrong event type', 400

@app.route('/login')
def login():
    return
@app.route('/dashboard')
def dashboard():
    pending = 0
    saved = 0
    current = 0
    status = {"pending": pending, "saved":saved, "current":current}
    videoURL = ""
    recs = ""
    application = {"video_url": videoURL, "recs":recs}
    return jsonify({'status': status, 'application':application})
@app.route('/apply')
def apply():
    return {'companies':['Amazon', 'Capital One', 'Google']}
@app.route('/codePrompting')
def prompting(topic):
    client = OpenAI()

    response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "user", "content": "write code for a" + topic + " with one bug and one feature that needs to be implemented."},
      ]
    )
    return response

