<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
    <boots v-if="$route.path !=='/reg'"></boots>
  </div>
</template>

<script>
  import headers from './components/header';
  import footers from './components/footer';
  import boots from './components/boots';
export default {
  name: 'app',
  components:{
    headers,footers,boots
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  ul,li{
    text-decoration: none;
  }
  .pr{
    position: relative;
  }
  /*button:focus{*/
    /*outline: none;*/
  /*}*/
  .fl{
    float: left;
  }
</style>
