const mutations = {
  'INCREASE_COUNT': (state) => {
    state.count ++
  },
  'INCREASE_COUNT_ARGUMENTS': (state, number) => {
    state.count += number
  },
  'REDUCE_COUNT': (state) => {
    state.count --
  },
  'SET_NAME': (state, user) => {
    state.user = user
  },
  'SET_AGE': (state, age) => {
    state.age = age
  }
}

export default mutations