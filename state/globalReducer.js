import { CHANGE_IS_SUBMITTING } from "../actions/types"

const initialState = {
  isSubmitting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IS_SUBMITTING:
      return { ...state, isSubmitting: action.payload }

    default:
      return state
  }
}
