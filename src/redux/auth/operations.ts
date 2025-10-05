import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//! refreshUser;

axios.defaults.baseURL = ''; //! поки пусте

export type Credentials = { email: string; password: string };
type AuthResponse = { user: { name: string; email: string }; token: string };
type RejectValue = string;

export const login = createAsyncThunk<
  AuthResponse,
  Credentials,
  { rejectValue: RejectValue }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    //   const response = await axios.post('', credentials);
    //   return response.data;
    return {
      user: { name: 'Mock User', email: credentials.email },
      token: 'mock_token_123',
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error occured');
  }
});
export const register = createAsyncThunk<AuthResponse, Credentials>(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      //   const response = await axios.post('', credentials);
      //   return response.data;
      return {
        user: { name: 'Mock User', email: credentials.email },
        token: 'mock_token_123',
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occured');
    }
  }
);
export const logout = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      //   const response = await axios.post('', credentials);
      //   return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occured');
    }
  }
);
