<template>
  Current article ID: {{ articleId }} 
  <router-link to="/article/3"> go to </router-link>
  <div class="p-4 p-md-5 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">
        {{ article.title }} 
      </h1>
      <p class="lead my-3">
        {{ article.excerpt }}
      </p>
    </div>
  </div>

  <div class="row g-5">
    <!-- Blog post column -->
    <div class="col-md-7">
      <h3 class="pb-4 mb-4 fst-italic border-bottom article-title">
        {{ article.title }}
      </h3>
      <article class="blog-post">
        <p class="blog-post-meta">
          {{ article.date }} by <strong>{{ article.author }}</strong>
        </p>
        <div v-html="article.content"></div>
      </article>
    </div>

    <!-- About me column -->
    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem;">
        <h4 class="fst-italic">About Me</h4>
        <p class="mb-0">
        {{ article.about }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['articleId'],
  data() {
    return {
      article: {} 
    };
  },
  mounted() {
    // Memanggil metode untuk memuat data artikel
    this.loadArticleData(this.articleId || this.$route.params.articleId);
  },
  methods: {
    // Memuat data artikel berdasarkan articleId
    loadArticleData(articleId) {
      axios.get(`http://localhost:2002/articles/${articleId}`)
        .then(response => {
          if (response.data) {
            this.article = response.data; // Set data artikel
          }
        })
        .catch(error => {
          console.error('Error fetching article:', error);
        });
    }
  },
  watch:{
    $route(to) {
      this.loadArticleData(to.params.articleId)
    }
  }
}
</script>

<style scoped>
.article-title {
  margin-top: 1rem; 
}

h4.fst-italic {
  padding-top: 1rem;
}
</style>
