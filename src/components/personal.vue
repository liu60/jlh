<template>
  <div class="personal">
    <div class="center">
      <div class="title">账户信息</div>
      <ul class="left-side">
        <router-link tag="li" :class="{current:$route.path !== '/personal/get-money' && $route.path !== '/personal/transfer'}" to="/personal/pay-type">存款专区</router-link>
        <router-link tag="li" :class="{current:$route.path === '/personal/get-money'}" to="/personal/get-money">取款专区</router-link>
        <router-link tag="li" :class="{current:$route.path === '/personal/transfer'}" to="/personal/transfer">户内转账</router-link>
      </ul>
      <router-view class="right"/>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
<style>
@import "../assets/css/personal.css";
</style>
