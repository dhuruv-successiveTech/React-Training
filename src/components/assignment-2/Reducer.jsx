export const initialVotes = {
  OptionA: 0,
  OptionB: 0,
  OptionC: 0,
};

export function voteReducer(state, action) {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
}
