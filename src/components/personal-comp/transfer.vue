<template>
  <div>
    <div class="box">
      <div class="text">主帐户余额</div>
      <div class="name">CNY</div>
      <div class="num">0.00</div>
    </div>
    <ul class="list">
      <li>平台余额</li>
      <li>
        <div class="fl">AG</div>
        <div class="fr">
          <span>
            0.00
          </span>
          <img src="" alt="">
          <div class="button">转入</div>
          <div class="button">转出</div>
        </div>
      </li>
      <li>
        <div class="fl">AG</div>
        <div class="fr">
          <span>
            0.00
          </span>
          <img src="" alt="">
          <div class="button">转入</div>
          <div class="button">转出</div>
        </div>
      </li>
      <li>
        <div class="fl">AG</div>
        <div class="fr">
          <span>
            0.00
          </span>
          <img src="" alt="">
          <div class="button">转入</div>
          <div class="button">转出</div>
        </div>
      </li>
    </ul>
    <div class="form">
      <p>户内转账</p>
      <div>
        <select class="output">
          <option value="">请选择转出</option>
        </select>
        &gt;
        <select class="input">
          <option value="">请选择转入</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="转账金额">
      </div>
      <div class="button">开始转账</div>
      <div class="tip">
        温馨提示：金连环体育仅AG、PT、MG、欧博、JA SPORT及eBET平台需进行户内转账，其他平台均通用。
      </div>
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
<style scoped>
  @import "../../assets/css/personal-comp/transfer.css";
</style>
