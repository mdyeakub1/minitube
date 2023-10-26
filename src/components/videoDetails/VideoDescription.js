import React from 'react'
import likeIcon from '../../assets/like.svg'
import unLike from '../../assets/unlike.svg'

export const VideoDescription = ({ video }) => {
    const {title, date,likes, unlikes, description } = video
  return (
    <div>
                            <h1
                                className="text-lg font-semibold tracking-tight text-slate-800"
                            >
                                {title}
                            </h1>
                            <div
                                className="pb-4 flex items-center space-between border-b"
                            >
                                <h2
                                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                                >
                                    {date}
                                </h2>

                                <div className="flex gap-10 w-48">
                                    <div className="flex gap-1">
                                        <div className="shrink-0">
                                            <img
                                                className="w-5 block"
                                                src={likeIcon}
                                                alt="Like"
                                            />
                                        </div>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                          { likes}K
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="shrink-0">
                                            <img
                                                className="w-5 block"
                                                src={unLike}
                                                alt="Unlike"
                                            />
                                        </div>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            {unlikes}K
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
                            >
                                {description}
                            </div>
                        </div>
  )
}
