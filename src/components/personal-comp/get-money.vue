<template>
  <div>
    <div class="title1">取款</div>
    <div class="box">
      <div class="text">余额</div>
      <div class="name">CNY</div>
      <div class="num">0.00</div>
    </div>
    <ul class="form">
      <li>
        <div class="name required">取款</div>
        <input type="text">
        <div class="describe">取款金额必须少过或等于主帐户余额，
          最低为100元，最高上限为200, 000元
        </div>
      </li>
      <li>
        <div class="name required">银行卡</div>
        <input type="text">

      </li>
      <li>
        <div class="name required">银行帐号户名</div>
        <input type="text">
      </li>
      <li>
        <div class="name required">银行帐号</div>
        <input type="text">
      </li>
      <li>
        <div class="name required">省</div>
        <input type="text">
      </li>
      <li>
        <div class="name required">城市</div>
        <input type="text">
      </li>
      <li>
        <div class="name required">取款密码</div>
        <input type="text">
      </li>
      <li>
        <div class="name">备注</div>
        <textarea rows="5"></textarea>
      </li>
      <li>
        <p>取款注意事项:</p>
        <ul>
          <li>银行帐户持有人姓名必须与注册时的姓名一致，否则无法申请取款。</li>
          <li>每次最低 100元人民币，每天最高上限为20万元人民币。</li>
          <li>只需达到存款额的1倍有效投注额即可申请取款。</li>
          <li>所有取款均不收取任何手续费。</li>
          <li>本公司并不提供付款予第三者服务。</li>
        </ul>
        <p>24小时取款，无限次:</p>
        <p>为方便会员在本网站进行投注，活动期间每日取款不限次数，活动规则如下:</p>
        <ul>
          <li>会员取款全天候24小时圴可申请，并在10分钟内到帐。</li>
          <li>24小时不限次数，想提就提!</li>
        </ul>
      </li>
    </ul>
    <div class="submit">提交</div>
    <div class="reset">重置</div>
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
  @import "../../assets/css/personal-comp/get-money.css";
</style>
