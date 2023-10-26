import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../redux/features/tags/tagsSlice'
import { Tag } from './Tag'

export const Tags = () => {
    const dispatch = useDispatch()
    const { tags } = useSelector((state) => state.tags)

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    return tags.length > 0 ? (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {tags.map((tag) => <Tag key={tag.id} title={tag.title} />)}
            </div>
        </section>
    ) : null
}

{/* <div
className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
>
redux
</div> */}