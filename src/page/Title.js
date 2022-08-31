import React from "react";
import { Link } from 'react-router-dom';
import {Box,Stack,HStack} from '@chakra-ui/react'
import {List,ListItem,ListIcon} from '@chakra-ui/react'
import { FiCornerDownRight,FiSend } from "react-icons/fi"




 export default function Title(){
    return (
      <div calss='Title' w='100%' h='100%' overflowX='hidden' >
         <Box overflowX='hidden'  w='100%' h='100%'   bg='#BDDFFE' >
            <Box  w='100%' h='100%' style={{backgroundImage: "url(banner-img2.png)" ,backgroundRepeat:"no-repeat",backgroundSize:"50%"}}>      
               <Box  w='100%' h='' style={{backgroundImage: "url(intro-background.png)" ,backgroundRepeat:"no-repeat" ,WebkitBackgroundSize:"110%"}}>            
                  <HStack >
                     <Box w='70%' mt='-3%'> 
                        <img src='banner-img.png' alt='banner'/>
                     </Box>
                     <Stack w='50%' pt='5%'>
                        <Box w='100%' ml='-15%'>
                           <img src='matrixTitle.png' alt='banner'/>
                        </Box>

                        <List class="class-bo" pt='8%' spacing={3}  textAlign='left' fontSize='xl' lineHeight='10'>
                           
                           <ListItem>
                              <ListIcon as={FiSend} color='blue.500' />
                              如果你渴望着手设计舒适简单的UI界面
                           </ListItem>

                           <ListItem>
                              <ListIcon as={FiSend} color='blue.500' />
                              亲自把奇思妙想的idea变成现实
                           </ListItem>

                           <ListItem>
                              <ListIcon as={FiSend} color='blue.500' />
                              或者希望体验产品调研分析的乐趣
                           </ListItem>
                  
                           <ListItem>
                              <ListIcon as={FiCornerDownRight} color='blue.500' />
                              那就不妨来Matrix试试吧~
                           </ListItem>
                        </List>

                        <Box w='40%' alignSelf='end'>
                           <img src='banner-img3.png' alt='banner'/>
                        </Box>

                     </Stack>
                  
                  
                     
                     </HStack>
               </Box>       
            </Box>
                     
         </Box> 
         <Link to='/'>
         </Link>
      </div>
      

     
    )
 }