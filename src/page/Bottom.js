import React from "react"
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


export default function Bottom() {
  return (
    <div id='bottom' w='100%' h='screen' overflowX='hidden' >
         <Box overflowX='hidden' w='100%' h='400px' bg='#7FA2CB;' borderRadius='3xl'  >
            
                 
            <Link to='/'>
            </Link>
         </Box> 
         
      </div>
  )
}


