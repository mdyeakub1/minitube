import React, { useEffect } from 'react'
import { VideoGridItem } from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../redux/features/videos/videosSlice'
import { Loading } from '../Ui/Loading'
import { Error } from '../Ui/Error'


export const VideoGrid = () => {
    const dispatch = useDispatch()
    const { videos, isLoading, isError, error } = useSelector((state) => state.videos)
    console.log(videos)

    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <Error >{error}</Error>
    }
    if (!isLoading && !isError && videos.length === 0) {
        content = <Error >Video not found!</Error>
    }
    if (!isLoading && !isError && videos.length > 0) {
        content = videos.map(video => (
            <VideoGridItem key={video.id} video={video} />
        ))
    }


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                </div>
            </section>
        </section>
    )
}
