import { CHANGE_IS_SUBMITTING } from "./types"

export const changeIsSubmitting = value => dispatch => {
  dispatch({
    type: CHANGE_IS_SUBMITTING,
    payload: value,
  })
}
