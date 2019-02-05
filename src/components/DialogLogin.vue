<template>
  <div class="login" @click.self="closeDialog">
    <div class="loginContainer">
      <div class="close" @click="closeDialog">X</div>
      <!-- <div class="header" :class="[{'isTwo': 'two'}]"></div> -->
      <div class="content">
        <div class="name">用户名<input type="text" placeholder="请输入手机号" maxlength="11" v-model.number="userName" class="userName" /></div>
        <div>密 &nbsp;&nbsp;码<input type="password" placeholder="请输入密码" v-model="passWord" class="passWord" /></div>
        <div class="submit" @click="loginIn">登陆</div>
        <div class="inform">
          <p @click="register">注册登陆</p>
          <p>忘记密码?</p>
        </div>
      </div>
    </div>
    <Message :msg="prompt"/>
  </div>
</template>

<script>
import Message from 'components/Message'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      userName: '',
      passWord: '',
      prompt: ''
    }
  },
  created() {
  },
  methods: {
    async loginIn() {
      const { userName, passWord } = this
      if (userName === '' || passWord === '') {
        this.prompt = '用户名和密码不能为空!'
        return
      }
    },
    async register() {
      location.href = location.href + 'register'
    },
    closeDialog() {
      this.$emit('close-dialog')
    }
  },
  components: {
    Message
  }
}
</script>

<style lang="scss" scoped>
  .login {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 999;

    .loginContainer {
      width: 400px;
      height: 300px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -150px 0 0 -200px;
      z-index: 998;
      text-align: center;

      .close {
        width: 30px;
        height: 30px;
        position: absolute;
        right: -21px;
        top: -24px;
        background: rgb(248, 62, 137);
        border-radius: 50%;
        line-height: 30px;
        color: white;
        cursor: pointer;
      }

      .header {
        height: 100px;
        background-image: url('../common/image/1.png');
        margin: -100px auto 0;
        background-size: 100px 100px;
        background-repeat: no-repeat;
        width: 100px;
      }

      .two {
        background-image: url('../common/image/2.png');
      }

      .content {
        margin: 60px 0 0 0;

        div {
          color: rgb(189, 183, 107);
        }
        .name {
          margin: 0 0 30px 0;
        }

        input {
          width: 200px;
          height: 40px;
          line-height: 40px;
          border: 1px solid rgba(248, 240, 220, 1);
          margin: 0 0 0 20px;
          font-size: 16px;
          outline: none;
          color: rgb(255, 106, 106);
        }

        .submit {
          width: 260px;
          height: 40px;
          margin: 30px auto;
          background: linear-gradient(rgb(247, 197, 207), rgb(236, 226, 213));
          color: rgb(241, 29, 123);
          cursor: pointer;
          line-height: 40px;
          letter-spacing: 5px;
        }

        .inform {
          display: flex;
          justify-content: space-between;
          padding: 0 70px;
          color: rgb(192, 192, 192);
          font-size: 12px;

          p {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

