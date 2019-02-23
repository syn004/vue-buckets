<template>
  <div class="articleContainer">article</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .articleContainer {
    width: 100%;
    height: 100%;
    background-color: #EBEBEB;
  }
</style>

