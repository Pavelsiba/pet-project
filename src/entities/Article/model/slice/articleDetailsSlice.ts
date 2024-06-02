import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type IArticle } from '../types/article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<IArticle>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
