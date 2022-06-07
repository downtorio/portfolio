import Layout from '../components/Layout'
import { ModalProvider } from '../contexts/modalContext'
import { ProjectModalProvider } from '../contexts/projectModalContext'
import '../sass/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <ProjectModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProjectModalProvider>
    </ModalProvider>
  )
}

export default MyApp