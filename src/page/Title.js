import React from "react";
import { Link } from 'react-router-dom';
import {Box} from '@chakra-ui/react'
// import theme from '@chakra-ui/theme'
import { Heading,List,ListItem,ListIcon,HStack} from '@chakra-ui/react'
import { FiCornerDownRight,FiSend } from "react-icons/fi"



 export default function Title(){
    return (
         <div calss='Title' w='100%' h='screen' overflowX='hidden' >
         <Box overflowX='hidden'  w='100%' h='100%' bg='#7FA2CB;' >
            <HStack  textAlign='left' color='white' mt='5%' spacing='3' >
               <Box boxSize='5%' ml='5%'>
                  <img src='homeImageSvg.png' alt='matrix'/>
               </Box> 
               <Box boxSize='25%' >
                  <img src='matrixTitle.png' alt='matrix'/>
               </Box>         
               <Heading   fontSize='6xl'>
                  2022  秋季招新
               </Heading>
            </HStack>
            <HStack mt='100' spacing={30} mb='150'>
               <List class="class-bo" spacing={2}  textAlign='left' position='relative' ml='15%' fontSize='xl' lineHeight='10' color='white'>
                  <ListItem>
                     <ListIcon as={FiSend} color='rgb(135 ,206 ,250)' />
                     如果你渴望着手设计舒适简单的UI界面
                  </ListItem>
                  <ListItem>
                     <ListIcon as={FiSend} color='rgb(135 ,206 ,250)' />
                     亲自把奇思妙想的idea变成现实
                  </ListItem>
                  <ListItem>
                     <ListIcon as={FiSend} color='rgb(135 ,206 ,250)' />
                     或者希望体验产品调研分析的乐趣
                  </ListItem>
                  <ListItem>
                     <ListIcon as={FiCornerDownRight} color='rgb(135 ,206 ,250)' />
                     那就不妨来Matrix试试吧~
                  </ListItem>
               </List>          
            </HStack>      
            <Link to='/'>
            </Link>
         </Box> 
         
      </div>
      

     
    )
 }