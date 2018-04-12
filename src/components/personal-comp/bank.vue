<template>
  <div>
    <div class="tip">
      请正确填妥以下「转帐表格」中的每一项，您提交后，我们将即时为您处理。
    </div>
    <ul class="form">
      <li>
        <div class="name">存款金额:</div>
        <input type="text">
      </li>
      <li>
        <div class="name">存款方式:</div>
        <select id="a">
          <option value="">请选择</option>
        </select>
      </li>
      <li>
        <div class="name">银行账号:</div>
        <select id="b">
          <option value="">请选择</option>
        </select>
      </li>
      <li>
        <div class="name">存款时间:</div>
        <input type="date">
      </li>
      <li>
        <div class="name">付款人银行省市支行:</div>
        <input type="text">
      </li>
      <li>
        <div class="name">备注:</div>
        <textarea></textarea>
      </li>
    </ul>
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
  @import "../../assets/css/personal-comp/common.css";
</style>
