import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useService from "../../dbAPI";
import Cookies from "js-cookie";

const initialState = {
    user: null,
    // isAuthenticated: false,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createUser = createAsyncThunk(
    "/register", async (data, thunkAPI) => {
        try {
            return await useService.createUser(data);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "/login", async (email, password, thunkAPI) => {
        try {
            return await useService.loginUser(email, password);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getUser = createAsyncThunk(
    "/getUser", async (thunkAPI) => {
        try {
            return await useService.getUser();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "/logout", async (thunkAPI) => {
        try {
            return await useService.logOutUser();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const checkAuth = createAsyncThunk(
    "/checkauth", async (thunkAPI) => {
        try {
            return await useService.checkAuth();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = false;
                state.message = "";
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload?.user;
                // state.user = action.payload.success ? action.payload.user : null;
                Cookies.set("Auth_token", action.payload?.token);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.user = action.payload.success ? action.payload.user : null;
                state.user = action.payload?.user;
                state.isSuccess = true;
                Cookies.set("Auth_token", action.payload?.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                Cookies.remove("auth_token");
            }).addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload?.user;
                state.isSuccess = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
                state.user = null;
            })
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;