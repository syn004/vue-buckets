<template>
  <div class="container">
    <div class="loginContainer">
      <div class="header"></div>
      <div class="content">
        <div class="name">用户名<input type="text" placeholder="请输入用户名" :userName="userName" class="userName" /></div>
        <div>密 &nbsp;&nbsp;码<input type="text" placeholder="请输入密码" :passWord="passWord" class="passWord" /></div>
        <div class="submit" @click="loginIn">登陆</div>
        <div class="inform">
          <p>注册登陆</p>
          <p>忘记密码?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    loginIn() {
      const { userName, passWord } = this
      console.log('xxx', userName, passWord)
      // if (userName === '' || passWord === '') {
      //   alert('用户名和密码不能为空')
      //   return
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 999;

    .loginContainer {
      width: 400px;
      height: 400px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -200px 0 0 -200px;
      z-index: 998;
      text-align: center;

      .header {
        height: 100px;
        background: rgba(255, 0, 0, 1)
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
          color: rgb(255, 0, 0);
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

