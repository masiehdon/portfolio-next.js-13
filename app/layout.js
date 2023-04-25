import Header from './header/page'
import Footer from './footer/page'
import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Thats me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
       
        {children}
        
        {/* <Footer /> */}
      </body>
    </html>
  )
}
