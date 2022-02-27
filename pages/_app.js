import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import Router from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 4,
  color: '#CBC3E3',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
