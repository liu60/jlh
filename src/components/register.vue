<template>
  <div>
    <div class="reg-bg">
      <div class="reg-main">
        <h2 class="orange">会员注册</h2>
        <div>
          <h3 class="blue">账户信息</h3>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;">用户名:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input v-model="username" class="input-control">
              </div>
              <div class="read" @click="checkUserName">核实</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;"><i class="red">*</i>登录密码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input v-model="password" type="password" class="input-control">
              </div>
              <div class="red cue">6-14为数字加字母</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;"><i class="red">*</i>确认登录密码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input v-model="confirmPassword" type="password" class="input-control">
              </div>
              <div class="red cue">6-14为数字加字母</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;">电子邮箱:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input v-model="email" class="input-control">
              </div>
            </div>
          </div>
          <div class="reg-phone">
            <label class="el-form-item__label" style="width: 35%;">联系电话:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input v-model="tel" class="input-control">
              </div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;">推广代码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control">
              </div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;">验证码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control" style="width: 65%">
              </div>
              <div class="reg-code">1234</div>
            </div>
          </div>
          <div>
            <button @click="submit" type="button" class="check-button-disable" :class="{disable: !check}" :disabled="!check">提交</button>
            <button type="button" class="check-button">取消</button>
            <div style="margin-top: 35px;margin-left: 267px;margin-bottom: 35px;color: #ff0000">
              <input type="checkbox" v-model="check"> 本人已年满十八岁，在此网站所有活动并没有抵触所在国家所管辖的法律
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        name: 'reg',
        check: false,
        username: '',
        password: '会员密码',
        confirmPassword: '确认会员密码',
        email: '电邮地址',
        tel:'电话号码'
      }
    },
    methods: {
      checkUserName(){
        this.$http.post('/api/web/Account/IsUsernameExists?username=' + this.username, {
          params: {
            username: this.username
          }
        }).then(res => {
          if (res.data === true) {
            alert('该用户名已经存在')
          } else {
            alert('该用户名可以使用')
          }
        })
      },
      submit(){
        var regUserName = /^[A-Za-z0-9]+$/;
        var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!regUserName.test(this.username))return alert('用户名只能是英文和数字');
        if (!regEmail.test(this.email))return alert('电子邮箱格式不正确');
        if (this.password !== this.confirmPassword)return alert('密码和确认密码不一致');

        this.$http.post('/api/web/Account/Register', {
          Username: this.username,
          Password: this.password,
          ConfirmPassword: this.confirmPassword,
          Email: this.email,
          PhoneNumber: this.tel
        }).then(function (res) {
          alert('注册成功');
          this.$http.defaults.headers.common['Authorization'] = res.data.accessToken;
        })
      }
    },
    mounted(){
    }
  }
</script>
<style scoped>
  @import "./../assets/css/reg.css";
</style>
