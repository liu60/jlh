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
                <input class="input-control">
              </div>
              <div class="read">核实</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;"><i class="red">*</i>登录密码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control">
              </div>
              <div class="red cue">6-14为数字加字母</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;"><i class="red">*</i>确认登录密码:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control">
              </div>
              <div class="red cue">6-14为数字加字母</div>
            </div>
          </div>
          <div class="step">
            <label class="el-form-item__label" style="width: 35%;">电子邮箱:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control">
              </div>
              <div class="read">核实</div>
            </div>
          </div>
          <div class="reg-phone">
            <label class="el-form-item__label" style="width: 35%;">联系电话:</label>
            <div class="el-form-item__content" style="margin-left: 30%;">
              <div class="el-select">
                <input class="input-control">
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
            <button type="button" class="check-button-disable" :class="{disable: !check}" :disabled="!check">提交</button>
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
        name:'reg',
        check: false
      }
    }
  }
</script>
<style scoped>
  @import "./../assets/css/reg.css";
</style>
