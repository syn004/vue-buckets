<template>
  <div class="count">{{count}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.count,
      age: state => state.age,
      name: state => state.name
    }),
  },
  mounted() {
    console.log('this', this.$store)
  }
}
</script>

<style scoped>
  .count {
    color: red;
    font-size: 18px;
  }
</style>

