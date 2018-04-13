<template>
  <div>
    <div class="title1">
      请正确填妥以下「转帐表格」中的每一项，您提交后，我们将即时为您处理。
    </div>
    <div class="cell">
      <div class="left required">存款金额</div>
      <div class="right"><input type="text"></div>
    </div>
    <div class="cell">
      <div class="left required">存款方式</div>
      <div class="right">
        <select>
          <option value="">请选择</option>
        </select>
      </div>
    </div>
    <div class="cell">
      <div class="left required">银行账号</div>
      <div class="right">
        <select>
          <option value="">请选择</option>
        </select>
      </div>
    </div>
    <div class="cell">
      <div class="left required">存款时间</div>
      <div class="right">
        <input type="date">
      </div>
    </div>
    <div class="cell">
      <div class="left required">付款人银行省市支行</div>
      <div class="right">
        <input type="text">
      </div>
    </div>
    <div class="cell">
      <div class="left">备注</div>
      <div class="right">
        <textarea rows="3"></textarea>
      </div>
    </div>
    <div class="cell">
      <div class="submit">提交</div>
      <div class="reset">重置</div>
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
  @import "../../assets/css/personal-comp/common.css";
</style>
