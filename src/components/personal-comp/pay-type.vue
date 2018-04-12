<template>
  <div>
    <p class="text">选择支付方式:</p>
    <ul class="type-list">
      <li :class="{current: type === 0}">
        <label>
          <input type="radio" :value="0" v-model="type">
          <img src="../../assets/images/qq.png" class="icon" alt="">
          <p>QQ钱包</p>
        </label>
      </li>
      <li :class="{current: type === 1}">
        <label>
          <input type="radio" :value="1" v-model="type">
          <img src="../../assets/images/wx.jpg" class="icon" alt="">
          <p>微信钱包</p>
        </label>
      </li>
      <li :class="{current: type === 2}">
        <label>
          <input type="radio" :value="2" v-model="type">
          <img src="../../assets/images/pay.png" class="icon" alt="">
          <p>支付宝</p>
        </label>
      </li>
      <li :class="{current: type === 3}">
        <label>
          <input type="radio" :value="3" v-model="type">
          <img src="../../assets/images/bank.jpg" class="icon" alt="">
          <p>银行转账</p>
        </label>
      </li>
      <li :class="{current: type === 4}">
        <label>
          <input type="radio" :value="4" v-model="type">
          <img src="../../assets/images/union.png" class="icon" alt="">
          <p>银联扫码</p>
        </label>
      </li>
      <li :class="{current: type === 5}">
        <label>
          <input type="radio" :value="5" v-model="type">
          <img src="../../assets/images/online.png" class="icon" alt="">
          <p>线上支付</p>
        </label>
      </li>
    </ul>
    <div class="button" @click="jump">
      确认
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        type: 0
      }
    },
    methods: {
      jump(){
        switch (this.type) {
          case 0:
              this.$router.push('/personal/qq')
            break;
          case 1:
              this.$router.push('/personal/wx')
            break;
          case 2:
              this.$router.push('/personal/pay')
            break;
          case 3:
              this.$router.push('/personal/bank')
            break;
          case 4:
              this.$router.push('/personal/union')
            break;
          case 5:
              this.$router.push('/personal/online')
            break;
        }
      }
    }
  }
</script>
<style>
  @import "../../assets/css/personal-comp/pay-type.css";
</style>
