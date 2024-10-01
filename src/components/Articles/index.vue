<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <!-- Item 1 -->
      <div class="col" v-for="article in articles" :key="article.id">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" :src="article.img + '?' + Math.random()" />
          <div class="card-body">
            <p>{{  article.excerpt }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <router-link :to="'/articles/' + article.id">
                  <!-- redirect ke article 1 saat di klik -->
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [] // Data Articles kosong sebagai array
    };
  },
  mounted() {
    // Axios GET request dilakukan setelah komponen di-mount
    // console.log(this$route)
    axios.get('http://localhost:2002/articles')
      .then(response => {
        this.articles = response.data; // Menyimpan data respons ke dalam Articles
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }
}
</script>
