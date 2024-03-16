import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<Profile>('/profile')

      if (!response.data) {
        throw new Error(' error in fetch profile')
      }

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  }
)
