import React, { Component } from 'react'
import Banner from './Components/Banner'
import Consultants from './Components/Consultants'
import Partners from './Components/Partners'
import Services from './Components/Services'
import Statistics from './Components/Statistics'
import Testimonials from './Components/Testimonials'

export default class Home extends Component {
    render() {
        return (
            <>
                <Banner/>
                <Services/>
                <Statistics/>
                <Testimonials/>
                <Consultants/>
                <Partners/>
            </>
        )
    }
}
