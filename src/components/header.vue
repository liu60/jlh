<template>
  <div class="jlh-head">
    <div class="head-nav-top">
      <div class="nav-top-bg">
        <div class="fl">本地时间:  {{dateFilter(time)}}</div>
        <ul class="head-login fr">
          <li>
            会员账号:
            <input type="text" class="login-input">
          </li>
          <li>
            密码:
            <input type="password" class="login-input">
          </li>
          <li>
            验证码:
            <input type="text" class="login-input" maxlength="4">
            <div class="yzm" id="code" @click="createCode()">{{code}}</div>
          </li>
          <li>
            <button class="login-btn">登录</button>
            <a style="color: #fff" href="#">忘记密码?</a>
            <router-link  style="font-size: 12px;" to="/reg">
              <button class="reg-btn">免费开户</button>
            </router-link>
          </li>
        </ul>
        <ul style="display: none" class="head-login fr">
          <li>
            会员账号:
            <span>anne</span>
          </li>
          <li>
            账户余额:
            <span>100.00</span>
          </li>
          <li>
            <button class="chongzhi">充值</button>
          </li>
          <li>
            <router-link style="color: #fff" to="/personal/save-money/qq">个人账户</router-link>
          </li>
          <li>
            积分:
            <span>5</span>
          </li>
          <li>
            <button class="logout-btn">登出</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="head-nav-bottom">
      <img src="./../assets/images/logo.png" class="jlh-logo">
      <ul class="nav-bottom-right fr">
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="">体育投注</router-link></li>
        <li><router-link to="/favourable">优惠中心</router-link></li>
        <li><router-link to="">手机投注</router-link></li>
        <li><router-link to="/daili">代理合作</router-link></li>
        <li><router-link style="color: #ff4e00" to="">在线咨询</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        time:'',
        visible:false,
        visibled:true,
        code:''
      }
    },
    mounted(){
      this.createCode();
      this.dateFilter(this.time);
      this.time = (new Date)*1;
      window.setInterval(()=>this.time += 1000,1000);
    },
    methods:{
      dateFilter(time){
        var date = new Date(time);
        function template(time) {
          return time < 10 ? '0' + time : time
        }
        return date.getFullYear() + '-' + template(date.getMonth() + 1) + '-' + template(date.getDate())
          + "   " + template(date.getHours()) + ':' + template(date.getMinutes()) + ':' + template(date.getSeconds())
      },
      createCode(){
        this.code = '';
        var codeLength = 4;
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X','Y','Z');
        for (var i = 0;i < codeLength;i++){
          var charNum = Math.floor(Math.random()*52);
          this.code += codeChars[charNum];
        }
      },
    },
  }
</script>

<style scoped>
  @import "./../assets/css/header.css";
</style>
