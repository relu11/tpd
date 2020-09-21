import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navigation/navigationSlice";
import authReducer from "../features/auth/authSlice";
import releaseRequestsReducer from "../features/releaseRequests/releaseRequestsSlice";
import resourceRequestsReducer from "../features/resourceRequests/resourceRequestsSlice";

export default configureStore({
    reducer: {
        nav: navReducer,
        auth: authReducer,
        release: releaseRequestsReducer,
        resource: resourceRequestsReducer,
    },
});
