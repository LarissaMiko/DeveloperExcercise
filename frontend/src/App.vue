<template>
  <div id="app">
    <div class="container content">
      <h2 class="title mb-4">Welcome to CorrectMe</h2>
      <h4 class="subtitle mb-3">Record an audio-file and get a corrected version</h4>
      <div class="user-info container" v-if = "recordSent == false">
        <form class="form-group">
          <div class="row">
            <div class="col-12 col-sm-6 mb-1">
              <input class="form-control" v-model = "name" type="text" name="name" placeholder="Your name *" required>
            </div>
            <div class="col-12 col-sm-6">
              <input class="form-control" v-model= "email" type="email" name="email" placeholder="Your e-mail *" required>
            </div>
          </div>
        </form>
        <div class="recorder">
          <audio-recorder 
            upload-url="localhost:5000/audio"
            :attempts="3"
            :time="2"
           />
        </div>
        <div class="send-info mt-5">
          <b-button pill variant="success" v-on:click="sendData">Get corrected Audio!</b-button>
        </div>
      </div>

      <div class= "container response" v-if = "recordSent == true">
        <div class="send-info mt-5">
          <p>Hey, {{name}}, in a later version, your corrected audiofile will appear here! Give us some more time :) </p>
          <b-button pill variant="success" v-on:click="newRecord">Record another audio</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import AudioRecorder from 'vue-audio-recorder';
import axios from 'axios';

Vue.use(BootstrapVue)
Vue.use(AudioRecorder)

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      name: '',
      email: '',
      recordSent: false
    }
  },
  methods: {
    
    //send username, e-mail and soundfile to Server
    sendData: async function() {
      this.recordSent = true
      await axios.get('localhost:5000/convertaudio', {
        "name" : this.name,
        "email" : this.email,
      })
      
    },

    newRecord: function() {
      this.recordSent = false
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  padding-top: 60px;
  padding-bottom: 100px;
}
.recorder{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
</style>
