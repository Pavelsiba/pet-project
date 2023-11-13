import { getLoginState } from '../getLoginState/getLoginState'
import { createSelector } from '@reduxjs/toolkit'

export const getLoginPassword = createSelector(getLoginState, LoginForm => LoginForm.password)
