import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { validateProfileErrors, type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<validateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if (errors?.length) { return rejectWithValue(errors) }

    try {
      const response = await extra.api.put<Profile>('/profile', formData)

      if (!response.data) {
        throw new Error('error update profile')
      }

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue([validateProfileErrors.SERVER_ERROR])
    }
  }
)
