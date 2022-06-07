import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollPrompt from '../components/ScrollPrompt'

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(null)  // 'landing', 'contact' or null (hide)
  const contactRef = useRef(null)

  useEffect(() => console.log('hi there. come here often?'), [])

  const scrollToContact = () => {
    contactRef.current.scrollIntoView()
  }
  
  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <Head>
        <title>Angelica Lopez</title>
        <meta name="description" content="Angelica Lopez's web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing 
        setScrollPosition={setScrollPosition} 
        scrollToContact={() => scrollToContact()} 
      />
      <About />
      <Projects />
      <Contact 
        ref={contactRef} 
        setScrollPosition={setScrollPosition}
      />
      <Footer />

      <ScrollPrompt element="landing" scrollPosition={scrollPosition} />
      <ScrollPrompt element="contact" scrollPosition={scrollPosition} scrollToTop={ scrollToTop } />
    </>
  )
}

export default Home