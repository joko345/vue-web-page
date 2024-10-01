<template>
  <h2>Login:</h2>
  <div v-show="loading">
    <app-loader></app-loader> <!-- Loader saat proses berlangsung -->
  </div>
  <div v-show="!loading">
    <div class="form-group">
      <div class="form-group">
      <label for="firstName">First Name</label>
      <input id="firstName" class="form-control" type="text" v-model="user.firstName" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input id="lastName" class="form-control" type="text" v-model="user.lastName" />
    </div>
      <label for="nick">Name</label>
      <input id="nick" class="form-control" type="text" v-model="user.nick" />
    </div>
    <div class="form-group">
      <label for="pass">Password</label>
      <input id="pass" class="form-control" type="password" v-model="user.pass" />
    </div>
    <button class="btn btn-primary" @click="login">Login</button> <!-- Tombol login -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  inject: ['loginCheck'], // Inject the global state
  data() {
    return {
      loading: false,
      user: {
        firstName: '',
        lastName: '',
        nick: '',
        pass: ''
      },
      
    };
  },
  methods: {
    goToArticle() {
      this.$router.push('/');
    },
    login() {
      this.loading = true;
      axios.get(`http://localhost:2002/users?nick=${this.user.nick}&pass=${this.user.pass}`)
        .then(response => {
          if (response.data.length > 0) {
            // Update the global state with user info
            this.loginCheck.loggedIn = true;
            this.loginCheck.firstName = response.data[0].firstName;

            this.$toast.success('Login successful', {
              position: 'bottom',
              duration: 2000
            });
            this.goToArticle();
            console.log('User found:', response.data);
          } else {
            this.$toast.error('User not found', {
              position: 'bottom',
              duration: 2000
            });
            console.log('No user found with that nick and pass');
          }
        })
        .catch(error => {
          this.$toast.error('Error during login', {
            position: 'bottom',
            duration: 2000
          });
          console.error('Error:', error);
        })
        .finally(() => {
          this.loading = false;
        });
        console.log(this.user.firstName);
    }
  }
};
</script>
