import React from 'react'

const Layout : React.FC =  React.memo(function H5Layout(props) {
    const { children } = props
    return <>
        this is global header
        {children}
    </>
})



export default Layout
