export const handelPending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handelGetAdverts = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = '';
};
