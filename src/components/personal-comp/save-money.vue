<template>
    <div>
      <p class="text">存款</p>
      <ul class="type-list">
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/qq'}" to="/personal/save-money/qq">QQ钱包</router-link>
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/wx'}" to="/personal/save-money/wx">微信钱包</router-link>
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/pay'}" to="/personal/save-money/pay">支付宝</router-link>
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/bank'}" to="/personal/save-money/bank">银行转账</router-link>
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/union'}" to="/personal/save-money/union">银联扫码</router-link>
        <router-link tag="li" :class="{current: $route.path === '/personal/save-money/online'}" to="/personal/save-money/online">线上支付</router-link>
      </ul>
      <router-view/>
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
@import "../../assets/css/personal-comp/save-money.css";
</style>
