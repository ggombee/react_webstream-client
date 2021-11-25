import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface ITerms {
  id: number
  label: string
  value: string
  isCheck: boolean
}

export interface TermsState {
  termsList: ITerms[]
}

export type TermsActions = ActionType<typeof actions>
