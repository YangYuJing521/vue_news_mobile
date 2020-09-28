<template>
  <div class="login-container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="smile-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="music-o"
        placeholder="请输入验证码">
          <template #button>
            <van-button class="send-btn" size="mini" round @click="sendMessage">发送验证码</van-button>
          </template>
      </van-field>
    </van-cell-group>

    <!-- 登录按钮 -->
    <div class="login-button-container">
      <van-button class="login-button" type="info" block @click="onLogin">登录</van-button>
    </div>

  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created: {},
  mounted: {},
  methods: {
    async onLogin () {
      try {
        const { data: rst } = await login(this.user)
        console.log(rst)
      } catch (err) {
        console.log(err)
      }
    },

    sendMessage () {}
  }
}
</script>

<style lang="less" scoped>
.login-container {

  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-button-container {
    padding: 26px 16px;
    .login-button {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
