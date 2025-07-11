interface VoteInterface{
  [key:string]:number;
}

interface actionInterface {
  type:string;
  option:string
}

export const initialVotes:VoteInterface = {
  OptionA: 0,
  OptionB: 0,
  OptionC: 0,
};




export function voteReducer(state:VoteInterface, action:actionInterface) {
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
