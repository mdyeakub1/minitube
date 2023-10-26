import React from 'react'

export const VideoPlayer = ({video}) => {
  console.log(video)
  const { title, link} = video
  return (
    <iframe
                            width="100%"
                            className="aspect-video"
                            src={link}
                            title={title}
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
  )
}
