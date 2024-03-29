import type { AsyncThunkAction, DeepPartial, Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import axios, { type AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

export function TestAsyncThunk<Return, Arg, RejectedValue> (
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
  state?: DeepPartial<StateSchema>
) {
  const dispatch: Dispatch = jest.fn()
  const getState: () => StateSchema = jest.fn(() => state as StateSchema)
  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg)
    const result = await action(dispatch, getState, { api })

    return result
  }

  return { dispatch, getState, api, callThunk }
}
