import { IConfig, createOvermind } from 'overmind'
//import { state } from './state'
import * as actions from './actions';

import { createHook } from 'overmind-react'          
export const config = {
    state: {taps:0},
    actions
}
export const overmind = createOvermind({
  state: {},
  actions
})

export const useOvermind = createHook()
