<template>
    <section>
        <div v-if="method === 'signin'">
            <h1>POSTER CHILD APP</h1>
            <h3>SIGN IN</h3>
            <p>NEED TO REGISTER?
                <button @click="method = 'signup'">SIGN UP</button>
            </p>
            <CredentialsForm prompt="Sign In" :onSubmit="handleSignIn" />
        </div>
        <div v-if="method === 'signup'">
            <h1>POSTER CHILD APP</h1>
            <h2>SIGN UP</h2>
            <p>ALREADY HAVE AN ACCOUNT?
                <button @click="method = 'signin'">SIGN UP</button>
            </p> 
            <form @submit.prevent="handleSignUp(profile)">
             <h3>REGISTER</h3>
            <label>
                FIRST NAME:
                <input v-model="profile.first" v-focus required>
            </label>
            <label>
                LAST NAME:
                <input v-model="profile.last" required>
            </label>
            <label>
                EMAIL:
                <input v-model="profile.email" required>
            </label>
            <label>
                USERNAME:<pre v-if="error">{{error}}</pre>
                <input v-model="profile.username" required>
            </label>
            <label>
                PASSWORD:
                <input type="password" v-model="profile.password" required>
            </label>
            <label>
                <button>SIGN UP</button>
            </label>
            </form>
        </div>
        <pre v-if="error">{{error}}</pre>
    </section>
</template>

<script>
import CredentialsForm from './CredentialsForm';

export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      profile: {
        username: '',
        password: '',
        first: '',
        last: '',
        email: ''
      },
      method: 'signin', 
      error: ''
    };
  },
  components: {
    CredentialsForm 
  },
  methods: {
    handleSignIn(profile) {
      this.error = '';
      
      this.onSignIn(profile)
        .catch(error => {
          this.error = error.error;
        });
    },
    handleSignUp(profile) {
      this.error = '';
      
      this.onSignUp(profile)
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Audiowide');
h1{font-family:'Audiowide'}
p {
    margin: 0 auto;
    margin-bottom: 19px;
    width: 330px;
    padding:10px;
    color:white;
    font-weight:600;
    background-color: #74b5e0;
    }
 form {
    padding:10px;
    margin: 0 auto;
    align-content: center;
    width:330px;
    background-color:#74b5e0;
    color:white;
    }
h3 {
    text-align: center;
    }    
input {
   display: block;
   padding: 10px;
   width:300px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
  input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
  pre{color:rgb(201, 94, 94);}
</style>
