<template>
  <v-container 
    fluid 
    grid-list-lg>
    <Helmet 
      title="About" 
      :description="metaDescription"/>
    <v-card>
      <v-card-title primary-title>
        <div><p align="justify">
         <p> <b>About Yplay</b></p>
<center><img src="photo.png"/></center>
          <p> <b><span>Hi,I'M Kris</span><b></p>
<small><p>Saya ingin becerita sedikit tentang situs web ini<br/> <b>Yplay</b> adalah Tempat menonton video <b>Youtube</b> Gratis tanpa iklan</p>

<p><b>Kerangka kerja</b></p>

<p>Situs web ini dibuat didasarkan pada kerangka kerja javascript <b>Vuejs<b> dan <b>Vuetify</b> menggunakan Google API DATA YOUTUBE V3 untuk menampilkan semua konten video</p>

<p>Semua isi di web ini saya kelola sendiri di kala waktu sengang saya, jadi silakan menggunakannya Jangan ragu untuk menghubungi saya dan melaporkan <b>bug</b> apabila anda menemukanya melalui via DM instagram saya <a href="">disini</a> Terimakasih.</p></small>   
</p>     
      <v-layout 
        align-center 
        justify-center
        row>
        <a 
          @click="sendTechnologyGA('developed-with-youtube')"
          target="_blank" 
          href="https://developers.google.com/youtube/v3/">
          <img 
            class="developed-yt" 
            src="@/assets/images/developed-with-youtube.png">
        </a>
      </v-layout>
      <v-layout 
        align-center 
        justify-center
        row>
        <a 
          class="mb-3" 
          @click="sendTechnologyGA('vue')"
          target="_blank" 
          href="https://vuejs.org/">
          <img 
            class="logo-height mx-3" 
            src="@/assets/images/vue-logo.svg">
        </a>
        <a 
          class="mb-3" 
          @click="sendTechnologyGA('ts')"
          target="_blank" 
          href="https://www.typescriptlang.org/">
          <img 
            class="logo-height mx-3" 
            src="@/assets/images/ts-logo.svg">
        </a>
        <a 
          class="mb-3" 
          @click="sendTechnologyGA('vuetify')"
          target="_blank" 
          href="https://vuetifyjs.com/">
          <img 
            class="logo-height mx-3" 
            src="@/assets/images/vuetify-logo.svg">
        </a>
        <a 
          class="mb-3" 
          @click="sendTechnologyGA('netlify')"
          target="_blank" 
          href="https://www.netlify.com">
          <img 
            class="logo-height mx-3" 
            src="@/assets/images/netlify-logo.svg">
        </a>
      </v-layout>
    </v-card>
    
  </v-container>
</template>

<style scoped>
.developed-yt {
  max-height: 100px;
}
.logo-height {
  max-height: 30px;
}
</style>

<script>
import About from "./About.ts";
export default About;
</script>
