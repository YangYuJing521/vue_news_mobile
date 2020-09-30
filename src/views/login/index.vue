<template>
  <div class="login-container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <!-- 输入框 -->
    <van-form
      ref="form-ref"
      @submit="onLogin"
      @failed="onFailed"
      validate-first
      :show-error="false"
      :show-error-message="false"
    >
      <van-field
        v-model="user.mobile"
        left-icon="smile-o"
        placeholder="请输入手机号"
        name="mobile"
        :rules="rules.mobileRule"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="music-o"
        name="code"
        :rules="rules.codeRule"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-count-down
            v-if="isShouCountDown"
            :time="5 * 1000"
            format="ss s"
            @finish="isShouCountDown = false"
          />
          <!-- 防止form表单的验证，这里只验证手机号就够了 -->
          <van-button
            v-else
            class="send-btn"
            size="mini"
            round
            :loading="isShowSendMsgLoading"
            @click.prevent="sendMessage"
            >发送验证码</van-button
          >
        </template>
      </van-field>

      <!-- 登录按钮 -->
      <div class="login-button-container">
        <van-button class="login-button" type="info" block>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendSms } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '17090086870',
        code: '246810'
      },
      rules: {
        mobileRule: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        codeRule: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isShouCountDown: false,
      isShowSendMsgLoading: false
    }
  },
  computed: {},
  watch: {},
  created: {},
  mounted: {},
  methods: {
    async onLogin () {
      this.$toast({
        message: '登录中',
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        console.log(data.data)
        this.$toast.success('登录成功')
        // 将后端返回的用户登录状态（token等数据）放到 Vuex 容器中
        this.$store.commit('setUser', data.data)
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: 'top' // 防止手机键盘太高看不见提示消息
        })
      }
    },

    async sendMessage () {
      try {
        // 根据name单独验证某一个，用try catch捕捉验证失败
        await this.$refs['form-ref'].validate('mobile')
        this.isShowSendMsgLoading = true
        await sendSms(this.user.mobile)
        // 短信发出去了，隐藏发送按钮，显示倒计时
        this.isShouCountDown = true
      } catch (err) {
        // try 里面任何代码的错误都会进入 catch
        // 不同的错误需要有不同的提示，那就需要判断了
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败的错误提示
          message = '发送太频繁了，请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败的错误提示
          message = err.message
        } else {
          // 未知错误
          message = '发送失败，请稍后重试'
        }

        // 提示用户
        this.$toast({
          message,
          position: 'top'
        })
      }
      this.isShowSendMsgLoading = false
    }
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
