import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideo } from '../../redux/features/relatedVideo/relatedVideoSlice'
import { RelatedVideoItem } from './RelatedVideoItem'
import { Loading } from '../Ui/Loading'
import { Error } from '../Ui/Error'

export const RelatedVideos = ({currentVideoId, tags}) => {
    const dispatch = useDispatch()
    const {relatedVideo, isLoading, isError,error} = useSelector(state => state.relatedVideo)

    useEffect(() => {
        dispatch(fetchRelatedVideo({tags, id: currentVideoId}))
    }, [dispatch, tags, currentVideoId])


    let content;
    if (isLoading) {
        content = <Loading/>
    }
    if (!isLoading && isError) {
        content = <Error>{ error}</Error>
    }
    if (!isLoading && !isError && relatedVideo.length === 0) {
        content = <Error>No related Video found</Error>
    }
    if (!isLoading && !isError && relatedVideo.length > 0) {
        content = relatedVideo.map(video => <RelatedVideoItem key={video.id} video={video} />)
    }
    

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                        {content}</div>
  )
}
