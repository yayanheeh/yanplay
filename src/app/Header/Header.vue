
<template>

     <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-pink.min.css">
       

<!--hide mobile-->
  <v-toolbar class="class="hidden-md-and-up"
    color="vTyoobRed"
    dense
    fixed
    dark
    clipped-left
    :height="64"
    app
  >
    <v-toolbar-side-icon @click="toggleDrawer"/>
    <router-link 
      @click.native="sendLogoClickGA"
      aria-label="home" 
      :to="{name: 'home'}">
      <img 
        class="logo mr-2" 
        alt="Youtube Logo"
        src="/img/full-logo-white.png">
    </router-link>

    <v-layout 
      row 
      justify-center>
      <v-flex 
        xs12 
        md8 
        lg6 >
        <v-form 
          @submit.prevent="searchVideos">
          <v-combobox
            ref="searchBox"
            :menu-props="{
              transition: 'slide-y-transition'
            }"
            clearable
            class="mx-3"
            no-filter
            :loading="searching"
            :items="searchSuggestions"
            :append-icon="null"
            :search-input.sync="query"
            v-model="searchSelectedValue"
            @input="searchVideos"
            dark
            flat
            full-width
            prepend-inner-icon="search"
            hide-no-data
            hide-details
            :label="$t('searchHeaderPlaceholder')"
            solo-inverted
          />
        </v-form>
      </v-flex>
    </v-layout>

  </v-toolbar>
<!--hide mobile-->
<!--hide destktop-->
<div class="mdl-cell--hide-phone mdl-cell--hide-tablet alert desktop">
          You are on a desktop
       </div>
       <div class="mdl-cell--hide-desktop mdl-cell--hide-tablet alert phone">
          You are on a phone
       </div>
       <div class="mdl-cell--hide-desktop mdl-cell--hide-phone alert tablet">
          You are on a tablet
       </div>


</template>

<style scoped>
.logo {
  height: 28px;
  margin-top: 8px;
}
</style>


<script>
import Header from "./Header.ts";
export default Header;
</script>
