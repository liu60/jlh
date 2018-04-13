<template>
  <div>
    <div class="title1">QQ钱包</div>
    <div class="cell">
      <div class="left required">金额</div>
      <div class="right"><input type="text"></div>
    </div>
    <div class="cell">
      <div class="left required">金额</div>
      <div class="right">
        <select>
          <option value="">请选择</option>
        </select>
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
<style scoped>
  @import "../../assets/css/personal-comp/common.css";
</style>
