import React, { useEffect } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { VideoDescription } from './VideoDescription'
import { RelatedVideos } from '../relatedVideos/RelatedVideos'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideo } from '../../redux/features/video/videoSlice'
import { useParams } from 'react-router-dom'

export const Details = () => {
  const dispatch = useDispatch()

  const { video } = useSelector((state) => state.video)
  const {id, tags}= video
  
  const {videoId} = useParams()
  console.log(video)

  useEffect(() => { 
    dispatch(fetchVideo(videoId))
  },[dispatch, videoId])

  return (
    <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <VideoPlayer video={video} />
                        <VideoDescription video={video}/>
                  </div>
          <RelatedVideos currentVideoId={id } tags={tags} />
              </div>
          </div>
        </section>
  )
}
