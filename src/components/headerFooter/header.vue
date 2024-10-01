  <template>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span class="fs-4">Vue Routes</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/articles" class="nav-link">Articles</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li> -->
          <li class="nav-item">
            <router-link :to="{
              name: 'contactName'
              // params: {
              //   from: 'navbar'
              // }
            }" 
            class="nav-link">
            Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="!loginCheck.loggedIn" to="/login" class="nav-link">Login</router-link>
            <span v-else class="nav-link">{{ loginCheck.firstName }}</span>
          </li>
        </ul>
      </header>
    </div>
  </template>

  <script>
  export default {
    inject: ['loginCheck'],
  }
  </script>

  <style scoped>
  body {
    padding: 0;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
  }

  .nav-link {
    transition: background-color 0.3s ease, color 0.3s ease; /* Tambahkan transisi untuk efek hover */
  }

  .nav-link:hover {
    background-color: #0d6efd;   
    color: white;
  }
  </style>
