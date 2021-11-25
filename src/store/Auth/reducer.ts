import { TermsState, TermsActions } from './types'
import ActionTypes from './constants'

export const initialState: TermsState = {
  termsList: [],
}

function AuthReducer(state: TermsState = initialState, action: TermsActions) {
  switch (action.type) {
    case ActionTypes.GET_TERMS_LIST:
      return {
        ...state,
        termsList: action.payload.termsList,
      }

    default:
      return state
  }
}

export default AuthReducer
