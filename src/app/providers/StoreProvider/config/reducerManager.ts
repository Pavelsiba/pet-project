import {
  type ReducersMapObject,
  combineReducers,
  type AnyAction,
  type Reducer
} from '@reduxjs/toolkit'
import type { StateSchemaKey, StateSchema, ReducerManager } from './StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema | undefined, action: AnyAction) => {
      if (keysToRemove.length > 0 && state !== undefined) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          delete state?.[key]
        })
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (typeof key === 'undefined' || typeof reducers[key] !== 'undefined') {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (typeof key === 'undefined' || typeof reducers[key] === 'undefined') {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
