import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice";
import configReducer from "../utils/configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: movieReducer,
            gpt: gptReducer,
            config: configReducer,
        }
    }
)

export default appStore;