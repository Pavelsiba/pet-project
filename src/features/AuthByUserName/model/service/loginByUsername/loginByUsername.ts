import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>(
  'login/loginByUserName',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData)

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      typeof extra.navigate !== 'undefined' && extra.navigate('/about')
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  }
)
