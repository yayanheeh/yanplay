
<template>

     

<!--hide mobile-->
  <v-toolbar 
    color="vTyoobRed"
    dense
    fixed
    dark
    clipped-left
    :height="64"
    app
  >
    <v-toolbar-side-icon @click="toggleDrawer"/>
   
       <v-layout class="hidden-md-and-up"
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
<!--search desktop-->
    <v-layout class="hidden-sm-and-down"
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
<!--search desktop-->
  </v-toolbar>
<!--hide mobile-->


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
