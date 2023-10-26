import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../features/videos/videosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import relatedVideoSlice from "../features/relatedVideo/relatedVideoSlice";
import filterSlice from "../features/filter/filterSlice";

const store = configureStore({
    reducer: {
        videos: videosSlice,
        video: videoSlice,
        relatedVideo: relatedVideoSlice,
        tags: tagsSlice,
        filter: filterSlice
    }
})

export default store