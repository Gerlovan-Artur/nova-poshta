import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'd984b6694b59f2f994c49da721afacfe';

export const fetchInfo = createAsyncThunk(
  'info/fetchInfo',

  async (number, thunkAPI) => {
    const data = {
      apiKey: API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
          },
        ],
      },
    };
    try {
      const response = await axios.post(axios.defaults.baseURL, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);