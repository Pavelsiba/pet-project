import {
  type CombinedState,
  configureStore,
  type ReducersMapObject,
  type Reducer,
  type Action
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

const extraArg: ThunkExtraArg = {
  api: $api
}

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema, Action<any>> | undefined
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  })
  // @ts-expect-error fix this code latter
  store.reducerManager = reducerManager

  return store
}
