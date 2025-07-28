import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';
// import { fileUploadMiddleware } from './upload/middleware';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['UPLOAD_FILE_REQUEST'],
      }
    }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

