import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer'

export const store = configureStore({
    reducer: {
      counter: reducer
    }
  });