import { useEffect } from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Banner />
      <Features />
      <Footer />
    </>
  )
}

export default HomePage
