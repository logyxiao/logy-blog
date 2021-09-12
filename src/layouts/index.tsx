import React, { useState } from 'react'
import Loading from '@/component/Loading'

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
:        children
        }
    </>
})



export default Layout
