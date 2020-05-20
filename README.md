## Developer Excercise - Single Page Web Application

**Task:** Imagine a Single Page Web Application which is able to record spoken text as audio (mobile and desktop) and replay the recorded audio. The once recorded audio should be sent together with the email address of the user to a REST-API backend. 
The backend API receives the audio and asynchronously processes it by an algorithm which corrects potential (grammatical) errors and produces a corrected audio. Once the audio is corrected, the backend API sends it back to the frontend, where it is displayed and can be played back by the user. 

**Result:** 
The node.js backend uses express and defines the endpoints that the application needs.
In a more advanced version of the application the user would send a GET request with content-type "mp-3" and the recorded file to the endpoint "/convertaudio".
Maybe I would try to rewrite some of the functionality of the npm "audioRecorder" module to make it fit to the needs of the application (For example there is already functionality to send the recorded audio to an API-Url, this could probably extracted and used for the application)

The backend needs a function correctAudio() that translates the audio into text, corrects it, translates it back to audio. Maybe there are npm packages for some of the tasks but probably I would try to include some Python NLP functionality to do this job. (Maybe because of this I might rewrite the backend with Flask).
Node.js is used in this version because it can easily handle asynchronous requests.

The frontend is set up with Vue. In a later version the "send"-button for the audio should be disabled if there is no name, an invalid e-mail or no text-file.
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
