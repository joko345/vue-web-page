<template>
    <h2>Add Users:</h2>
    <div v-show="loading">
      <app-loader></app-loader>
    </div>
    <div v-show="!loading">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" class="form-control" type="text" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input id="lastname" class="form-control" type="text" v-model="user.lastname">
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        loading: false, 
        user: {
          name: '',
          lastname: ''
        }
      };
    },
    methods: {
      submit() {
        this.loading = true;  
        axios({
          method: 'post',
          url: 'http://localhost:2002/users',
          data: this.user
        })
        .then(response => {
          this.$toast.succes('user has been added',{
            position: 'bottom',
            duration: 2000
          })
          console.log(response);
        })
        .catch(error => {
          this.$toast.succes('Error',{
            position: 'bottom',
            duration: 2000
          })
          console.log(error);
        })
        .finally(() => {
          this.loading = false;  
        });
      }
    }
  }
  </script>
  