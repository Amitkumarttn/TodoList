const INITIAL_STATE = {
    name: 'Dummy',
  };
  
  const TestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  export default TestReducer;