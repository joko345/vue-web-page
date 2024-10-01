<template>
<div v-if="loading">
    <app-loader></app-loader>
</div>
   
    <div class="row" v-else>   
        <div class="card" style="width: 14rem;"
        v-for="(user) in users"
        :key="user.id">
            <!-- Pastikan src mengarah ke URL gambar langsung -->
            <img class="card-img-top" :src="'https://placebeard.it/300/300?' + user.id" alt="Image Host" />
            <!-- agar gambar bisa berbeda tiap index data -->
            <div class="card-body">
                
                <div class="card-text">
                    <strong>Name:</strong> {{ user.name }}
                </div>
                <div class="card-text">
                    <strong>Last Name:</strong> {{ user.lastname }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                users: [],
                loading: true,
            }
        },
        methods:{
            loadUser(){
                axios.get('http://localhost:2002/users')
                .then(response =>{
                    this.users = response.data
                    this.loading = false
                    console.log(this.users)
                })
                .catch(error  => {
                    this.$toast.error(error.message, {//memanggi toast(warning)
                        position: 'bottom',
                        duration: 3000
                    })
                    console.log(error)
                })
            }
        },
        mounted(){
            this.loadUser()
            console.log('first reload')
        }
    }

</script>
<!-- https://thumbs2.imgbox.com/7c/dd/4CIv1mX7_t.jpg -->