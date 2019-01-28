<template>
  <div class="container">
    <div class="loginBtn" @click="loginDialog"></div>
    <Login v-if="loginShow" />
  </div>
</template>

<script>
  import Login from 'components/DialogLogin'

  export default {
    data() {
      return {
        loginShow: false
      }
    },
    methods: {
      loginDialog() {
        this.loginShow = true
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
    
  }
</style>