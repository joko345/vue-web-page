<template>
  <app-header></app-header>
  <div class="container">
    <!-- <articles-comp></articles-comp>
    <articles-main></articles-main> -->
    <!-- <comp-contact></comp-contact> -->
     <router-view></router-view>
     <br/>
     <!-- <router-view name="notify"></router-view> -->
  </div>
  <app-footer></app-footer>
</template>

<script>
//karena memakai router maka tidak perlu deklarasi component manual
// import articlesMain from './components/Articles/index.vue'
// import articlesComp from './components/Articles/Article/index.vue'
// import compContact from './components/Contact/index.vue'
export default {
  // data(){
  //   return{

  //   }
  // },
  // components: {
  //   compContact,
  //   // articlesComp,
  //   // articlesMain
  // }
}
</script>