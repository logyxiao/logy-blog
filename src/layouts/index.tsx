import React, { useState } from 'react'
import Loading from '@/component/Loading'
import Header from '@/component/Header'

const Layout : React.FC =  React.memo(function H5Layout(props) {
    const { children } = props
    const [loading,SetLoading] = useState(true)
    setTimeout(()=>{
        SetLoading(false)
    },2000)
    return <>
        {
            loading?
              <Loading/>
:
          <>
              <Header/>
              {children}
              </>
        }
    </>
})



export default Layout
