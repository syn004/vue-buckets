<template>
  <div class="container">
      <div class="loginBtn" @click="loginDialog"></div>
      <Login v-if="loginShow" @close-dialog = "closeDialog"/>
      <div class="footer">
        <div>本网站仅限个人使用,非商业化,还请各位大佬手下留情!</div>
        <!-- <div>京ICP备18046878号-1</div> -->
      </div>
  </div>
</template>

<script>
  import Login from 'components/DialogLogin'
  // import { getList } from 'api/api'

  export default {
    data() {
      return {
        loginShow: false
      }
    },
    created() {
      // getList().then(res => {
      //   console.log('res', res)
      // })
      // .catch( err => {
      //   console.log(err)
      // })
    },
    methods: {
      loginDialog() {
        this.loginShow = true
      },
      closeDialog() {
        this.loginShow = false
      }
    },
    components: {
      Login
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-image: url("../../common/image/bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .loginBtn {
      position: absolute;
      right: 40px;
      top: 40px;
      width: 32px;
      height: 32px;
      background-image: url("../../common/image/login_btn.png");
      background-repeat: no-repeat;
      background-size: 32px 32px;
      cursor: pointer;
    }

    .footer {
      width: 100%;
      position: absolute;
      bottom: 0;

      div {
        color: rgb(255, 106, 106);
        font-size: 14px;
        text-align: center;
      }
    }
    
  }
</style>