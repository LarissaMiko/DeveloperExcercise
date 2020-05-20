## Developer Excercise - Single Page Web Application

**Task:** Imagine a Single Page Web Application which is able to record spoken text as audio (mobile and desktop) and replay the recorded audio. The once recorded audio should be sent together with the email address of the user to a REST-API backend. 
The backend API receives the audio and asynchronously processes it by an algorithm which corrects potential (grammatical) errors and produces a corrected audio. Once the audio is corrected, the backend API sends it back to the frontend, where it is displayed and can be played back by the user. 

**Result:** 
The node.js backend uses express and defines the endpoints that the application needs.
In a more advanced version of the application the user would send a GET request with content-type "mp-3" and the recorded file to the endpoint "/convertaudio". The response will be the corrected audio.

The backend needs a function correctAudio() that translates the audio into text, corrects it and translates it back to audio. Maybe there are npm packages for some parts of the task but probably I would try to include some Python NLP functionality to do this job. (Maybe because of this I would rewrite the backend with Flask).
Node.js is used in this version because it can easily handle asynchronous requests.

The frontend is set up with Vue. Currently an audiofile can be recorded using the npm package "audioRecorder". With this module the recorded file can be sent to an APIUrl. In a later version I would try to extract and extend this functionality to fit the need of the GET-request for the API. Also the send button should only be displayed if the user also entered a valid name and e-mail.
Of course also the result of the correction needs to be displayed.


# How to use the application:
## Getting started with the backend

Run the following command to install the necessary npm modules for the backend:

```
npm install
```

Run backend server:

```
node backend
```

## Run frontend locally

change to frontend folder and install dependencies:

```
npm install
```

Start Development Server
```
npm run serve
```

The Application will the be running on localhost:8080
