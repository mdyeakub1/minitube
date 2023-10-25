import React from 'react'
import { Header } from '../components/header/Header'
import { Tags } from '../components/tags/Tags'
import { VideoGrid } from '../components/videoGrid/VideoGrid'
import { Pagination } from '../components/Ui/Pagination'
import { Footer } from '../components/footer/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer/>
   </>
  )
}
