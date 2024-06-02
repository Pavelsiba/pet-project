import { type IArticle } from './../../types/article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
  'profile/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<IArticle>(`/articles/${articleId}`)

      if (!response.data) {
        throw new Error(' error in fetch article')
      }

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  }
)
