import Sidebar from '@/components/Shared/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode }) => {
  return (
    <main className='root'>
      {<Sidebar/> }
      {/*<MobileNav/>*/ }


      <div className="root-container">
        <div className="wrapper"></div>
      </div>
      {children}
    </main>
  )
}

export default Layout