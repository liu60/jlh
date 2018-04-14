<template>
  <div>
    <img src="./../assets/images/youhui.jpg" width="100%">
    <div class="fa-bg">
      <div class="fa-main">
        <img src="./../assets/images/favourable-0.png" width="100%">
        <div class="main">
          <div class="main-c" @click="show1 = !show1">
            <div class="bx">
              <img src="./../assets/images/favourable-1.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>金连环体育全城最高0.8%体育返水，领取返水后30天内只需1倍流水即可 申请提款！无上限每日返水只在 金连环体育！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">注意事项：1.本活动无需申请，符合流水要求的会员系统将自动统计并派发。</p>
              <p style="margin-left: 110px">2.无论会员使用网页版，手机，平板或金连环体育 APP 进行投注。</p>
            </div>
          </div>
          <div class="hdnr" :class="{hide: !show1}">
            <div class="huodong">
              <img src="./../assets/images/huodong.png">
            </div>
            <div class="neirong" >
              <h2>活动时间:</h2>
              <p>2018年04月01日12:00开始至12月31日11:59结束（北京时间）</p>
              <h2>活动申请:</h2>
              <p>1 . 本活动无需申请，符合流水要求的会员系统将自动统计并派发。</p>
              <p>2 . 无论会员使用网页版，手机，平板或金连环体育 APP 进行。</p>
              <h2>注意事项:</h2>
              <p>1 . 每日有效流水计算时间为北京时间每日 12:00 至次日 11:59。</p>
              <p>2 . 由于平台有时差关系，所以流水统计会有差异。</p>
              <p>3 . 体育返水将在每日结算后的24小时内派发。</p>
              <p>4 . 体育返水需在领取后30天内投注1倍流水即可提款。</p>
              <p>5 . 此活动必须遵从金连环体育的活动规则与条款。</p>
              <p>6 . 若发现有套利客户，对赌或不诚实获取盈利之行为，将取消其返水资格。</p>
              <p>7 . 金连环体育仅对已结算并产生输赢结果的投注额进行计算 : 任何平局、取消赛事、赔率低于小数盘1.50，香港盘0.50，</p>
              <p style="margin-left: 24px"> 马来盘0.50的投注将不计算在有效投注内。</p>
              <p>8 . 金连环体育保留可单方面执行的决定权，在任何时候无事先通知的情况下，修改、改变、停止、取消以使此优惠失效。</p>
              <p>9 . 参与此活动的会员必须接受及遵循上述规则与条款，以及金连环体育使用的一切网站相关规则与条款。</p>
            </div>
          </div>
          <div class="main-c">
            <div class="bx">
              <img src="./../assets/images/favourable-2.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>最低存款额只需100元！</p>
              <p>红利最高888元！快来申请吧！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">如何申请：1 .仅限活动时间内未申请过首存的会员进行申请。</p>
              <p style="margin-left: 110px">2 .会员在进行存款时，即可根据提示选择相应首存红利。</p>
            </div>
          </div>
          <div class="main-c">
            <div class="bx">
              <img src="./../assets/images/favourable-3.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>最低存款额只需100元！</p>
              <p>红利最高888元！快来申请吧！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">如何申请：1. 存款并转帐至体育帐户时，选择 【20％ 再存优惠】 即可。</p>
              <p style="margin-left: 110px">2. 活动时间内，会员只限申请一次金连环体育再存优惠。</p>
            </div>
          </div>
          <div class="main-c">
            <div class="bx">
              <img src="./../assets/images/favourable-4.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>推荐好友最高可拿888红包</p>
              <p>带上您身边的朋友一起致富吧！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">如何申请：1. 推荐人需为金连环体育的直属会员且月存款3000以上。</p>
              <p style="margin-left: 110px">2. 注册时填上推荐人金连环体育会员账号 即可领取红包。</p>
            </div>
          </div>
          <div class="main-c">
            <div class="bx">
              <img src="./../assets/images/favourable-5.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>金连环体育连胜连负奖上奖，</p>
              <p>最高8888奖金！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">如何申请：1.会员提供游戏单号和连胜连负局数给客服人员查询。2.申请连胜连负最低投注额为每场球赛100元。</p>
              <p style="margin-left: 110px">3.本活动只限足球体育全场大小盘口和全场让球盘口。4.每场球赛只取一注注单 单场多注默认下注金额最低注。</p>
            </div>
          </div>
          <div class="main-c">
            <div class="bx">
              <img src="./../assets/images/favourable-6.png">
            </div>
            <div class="bx cbx">
              <h2 class="yl">标题</h2>
              <p>买过关不管输赢都有鼓励金拿</p>
              <p>买越多送越多！</p>
              <p style="margin-top: 10px">活动时间：</p>
              <p>2018年4月1日-2018年12月31日</p>
            </div>
            <div class="waring">
              <p style="margin-left: 15px;">如何申请：1.本活动无需申请，符合流水要求的会员系统将自动统计并派发。</p>
              <p style="margin-left: 110px">2.无论会员使用网页版，手机，平板或金连环体育 APP 进行投注</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'favourable',
        show1:false,
      }
    },
    methods:{},
  }
</script>
<style scoped>
  @import "./../assets/css/favourable.css";
</style>
