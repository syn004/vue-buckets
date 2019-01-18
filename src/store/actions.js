const actions = {
  'increase_count': (context) => {
    context.commit('INCREASE_COUNT')
  },
  'increase_count_number': (context, payload) => {
    context.commit('INCREASE_COUNT_NUMBER', payload)
  },
  'reduce_count': (context) => {
    context.commit('REDUCE_COUNT')
  },
  'set_name': (context, payload) => {
    context.commit('SET_NAME', payload)
  },
  'set_age': (context, payload) => {
    context.commit('SET_AGE', payload)
  }
}

export default actions