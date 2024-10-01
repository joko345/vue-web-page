<template>
    <div class="p-5 mb-4 bg-light rounded">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">JUDUL HOMEPAGE</h1>
        <p class="col-md-8 fs-4">"firstName": "Johan", "lastName": "Martian", "nick": "mati1", "pass": "123456" 
            Kemajuan teknologi kecerdasan buatan (AI) semakin mempengaruhi berbagai sektor industri, mulai dari otomasi pekerjaan hingga pengambilan keputusan. Artikel ini membahas dampak AI terhadap efisiensi kerja, tantangan etis, dan masa depan pekerjaan di era digital.
       </p>
        <button 
        class="btn btn-primary btn-lg" 
        type="button"
        @click="goToActicle()">
          Read More
        </button>
      </div>
    </div>
  
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>PAGE BLACK</h2>
          <p>
            Olahraga tidak hanya bermanfaat bagi kesehatan fisik, tetapi juga sangat penting untuk kesehatan mental. Penelitian menunjukkan bahwa aktivitas fisik dapat mengurangi gejala depresi dan kecemasan, meningkatkan suasana hati, dan meningkatkan kualitas tidur. Artikel ini mengeksplorasi hubungan antara olahraga dan kesehatan mental.
          </p>
          <button class="btn btn-outline-secondary" type="button">Read More</button>
        </div>
      </div>
  
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>PAGE WHITE</h2>
          <p>
            Dalam menghadapi perubahan iklim dan penipisan sumber daya alam, keberlanjutan menjadi isu krusial. Artikel ini membahas pentingnya keberlanjutan dalam bisnis, pola konsumsi individu, dan kebijakan pemerintah, serta langkah-langkah yang dapat diambil untuk menciptakan dunia yang lebih berkelanjutan.
          </p>
          <button class="btn btn-outline-secondary" type="button">Read More</button>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  inject: ['loginCheck'],
  mounted(){
    console.log(this.$router)
  },
  methods:{
    goToActicle() {//programatic navigation
      this.$router.push('/articles')
    }
  },
  beforeRouteEnter(){//cek per route, tidak global
    const isAuth = true;
    if(!isAuth) return './Login'
    return true 
  },
  // beforeRouteLeave(){
  //   console.log('you need fullfill the form')//harus isi form sebelum bisa leave
  //   return false
  // }
  }
</script>