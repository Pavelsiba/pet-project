import { getLoginState } from '../getLoginState/getLoginState'
import { createSelector } from '@reduxjs/toolkit'

export const getLoginIsLoading = createSelector(getLoginState, LoginForm => LoginForm.isLoading)
