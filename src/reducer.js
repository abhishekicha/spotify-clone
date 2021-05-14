export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finish developing
  // token:
  //   "BQAkrt8fzQg9OHi3hqUxQX4vxVmSoVkNRHBCLRHCwOkiW3swGd3-LLrNG-XNkSgjCu2roGeBXf-EeVAC6sXCJKAJIIBbQV3MBw5OlThFVbzDPjZ3KDyGgKbV0tUgJ0lKLGTfXXFUxRPGEeQfkKF4IJFFreZ-W2qKbQIsZYhTBWRWPWV4ulh0",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
