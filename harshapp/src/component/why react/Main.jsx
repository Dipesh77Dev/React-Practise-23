import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Leftsection from './Leftsection'
// import Rightsection from './Rightsection'
import './main.css'

const Main = () => {
    return (
        <>
            <Header />
            <Leftsection />
            {/* <Rightsection /> */}
            <Footer />
        </>
    )
}

export default Main;