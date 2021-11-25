import ActionTypes from './constants'
import { action } from 'typesafe-actions'
import { ITerms } from './types'

type TermsAction = {
  type: ActionTypes.GET_TERMS_LIST
  payload: {
    termsList: ITerms[]
  }
}

export const selectTermsList = (termsList: ITerms[]): TermsAction =>
  action(ActionTypes.GET_TERMS_LIST, { termsList })
