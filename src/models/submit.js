export default {
  namespace: 'studentorgs',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};

//update this page with data logic
