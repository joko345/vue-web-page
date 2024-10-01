<template>
  <h2>Login:</h2>
  <div v-show="loading">
    <app-loader></app-loader> <!-- Loader saat proses berlangsung -->
  </div>
  <div v-show="!loading">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input id="firstName" class="form-control" type="text" v-model="user.firstName" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input id="lastName" class="form-control" type="text" v-model="user.lastName" />
    </div>
    <div class="form-group">
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
      this.$router.push('/'); // Redirect to the homepage after successful login
    },
    login() {
      this.loading = true;
      // Fetch the local db.json file
      axios.get('./db.json') // Make sure to use the correct path to your db.json
        .then(response => {
          // Filter users based on nick and pass
          const user = response.data.users.find(u => u.nick === this.user.nick && u.pass === this.user.pass);
          if (user) {
            // Update the global state with user info
            this.loginCheck.loggedIn = true;
            this.loginCheck.firstName = user.firstName;

            this.$toast.success('Login successful', {
              position: 'bottom',
              duration: 2000
            });
            this.goToArticle();
            console.log('User found:', user);
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
