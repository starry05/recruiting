import React from 'react'
import Title from './page/Title'
import Navigation from './page/Skip'
import Introduction from './page/Introduction'
import Recent from './page/Recent'
import Requirement from './page/Requirement'
import Welfare from './page/Welfare'
import Bottom from './page/Bottom'


export default function APP(){
    return(
        <div  >
            
            <Title />
            <Navigation />
            <Introduction />
            <Recent />
            <Welfare />
            <Requirement />   
            <Bottom />
        </div>
    )
}