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
  'SET_NAME': (state, name) => {
    state.name = name
  },
  'SET_AGE': (state, age) => {
    state.age = age
  }
}

export default mutations