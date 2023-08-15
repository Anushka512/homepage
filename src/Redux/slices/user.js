import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import { axiosClient } from "../../utils/axios/axios";
import Swal from "sweetalert2";
import { setLoading } from "./appConfigSlice";

export const getLoggedInrUser = createAsyncThunk(
  "/api/v1/auth/login",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/api/v1/auth/login", body);
      console.log("This is Loggin Data", response);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const createUser = createAsyncThunk(
  "/api/v1/auth/register",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is bOdy", body);
      const response = await axiosClient.post("/api/v1/auth/register", body);
      console.log("This is Response from our APi", response);
      return response.data;
    } catch (error) {
      return Promise.reject(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const loginGoogleUser = createAsyncThunk(
  "/api/v1/auth/google/login",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      // const response = await axiosClient.get("/api/v1/oauth/google");
      window.location.href = "https://api.freeofgluten.in/api/v1/auth/login";//Change this base Url to Your Backend URL
      // console.log("This is Response from our APi", response);
      // return response;
    } catch (error) {
      return Promise.reject(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Get All User (admin)

export const getAllUsers = createAsyncThunk("/api/v1/admin/users", async () => {
  try {
    const response = await axiosClient.get("/api/v1/admin/users");
    console.log("This is Response from our APi", response);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});
//Get All User (admin)
export const getUserDetail = createAsyncThunk(
  "/api/v1/auth/me",
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/auth/me");
      console.log("This is User from our APi", response.data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.message);
    } finally {
      thunkApi.dispatch(setLoading(false));
    }
  }
);

export const getLoggedoutUser = createAsyncThunk(
  "/api/v1/auth/logout",
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/auth/logout");
      console.log("This is Response from our APi", response);
      return response.data;
    } catch (error) {
      return Promise.reject(error.message);
    } finally {
      thunkApi.dispatch(setLoading(false));
    }
  }
);

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    status: false,
    user: {},
    isAdmin: false,
    isAuthenticated: false,
    error: null,
    addresses: localStorage.getItem("glutenUserAddress")
      ? JSON.parse(localStorage.getItem("glutenUserAddress"))
      : [],
  },

  reducers: {
    createAddress: (state, action) => {
      const { name, title, address, HNO } = action.payload;
      state.addresses.push({ name, title, address, HNO });
      localStorage.setItem(
        "glutenUserAddress",
        JSON.stringify(state.addresses)
      );
      Swal.fire({
        title: "Success!",
        text: "Successfully added Address",
        icon: "success",
        showConfirmButton: false,
        timer: 2500,
      });
    },

    clearError: (state) => {
      state.error = null;
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.user;
          state.status = true;
          state.isAuthenticated = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(loginGoogleUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload;
          state.status = true;
          state.isAuthenticated = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(getLoggedInrUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.user;
          state.isAuthenticated = true;
          state.status = true;
          if (action.payload.user?.isAdmin) {
            state.isAdmin = true;
          }
        }

        if (action.payload.statusCode === 401) {
          state.error = action.payload.message;
        }
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.allUsers = action.payload.result;
        }
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.user = action.payload.result;
          state.isAuthenticated = true;
          if (action.payload.result?.isAdmin) {
            state.isAdmin = true;
          }
        }
      })
      .addCase(getLoggedoutUser.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isAdmin = false;
          state.isAuthenticated = false;
        }
      });
  },
});

const userReducer = userSlice.reducer;
export const { clearError } = userSlice.actions;
export default userReducer;
