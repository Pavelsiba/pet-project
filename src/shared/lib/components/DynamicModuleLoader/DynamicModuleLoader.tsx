import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { useEffect, type FC, type ReactElement } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

export type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactElement
  reducers: ReducersList
  removeAfterUnmount: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const dispatch = useAppDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])
  return children
}
