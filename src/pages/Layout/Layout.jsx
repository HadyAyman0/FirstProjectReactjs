import React from 'react'
import { StickyNavbar } from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function Layout() {
    return (
        <>
        <StickyNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
