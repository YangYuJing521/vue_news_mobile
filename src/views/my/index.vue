<template>
  <div class="my-container">

    <!-- 具有相同背景的头部 -->
    <van-cell-group class="header">
      <!-- 通过插槽的方式自定义cell 单元格 -->
      <van-cell class="base-info" center :border="false">
        <van-image
          slot="icon"
          class="avator"
          width="66px"
          height="66px"
          fit="cover"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">黑马头条</div>
        <van-button type="default" round slot="default">编辑资料</van-button>
      </van-cell>

      <!-- grids -->
      <van-grid :border="false" class="data-info">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">上面</div>
            <div class="text">下面</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">上面</div>
            <div class="text">下面</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">上面</div>
            <div class="text">下面</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">上面</div>
            <div class="text">下面</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <!-- 收藏历史 -->
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="收藏" to="/" />
      <van-grid-item icon="search" text="历史" url="/" />
    </van-grid>

    <!--  -->
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <van-cell class="login-button" title="退出登录" center />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created: {},
  mounted: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.my-container {

  .header{
    background: url("./banner.png") no-repeat;
    background-size: cover;
  }
.login-button {
  text-align: center;
  color: #d86262;
}
}

</style>
