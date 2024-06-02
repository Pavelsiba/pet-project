import type { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios'
import type { ArticleDetailsSchema } from 'entities/Article'
import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUserName'
import type { To, NavigateOptions } from 'react-router-dom'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: Reducer<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
