import React from "react";
import { Link } from 'react-router-dom';
import {Box,Stack,HStack,Text,List,ListItem,ListIcon, Highlight } from '@chakra-ui/react'
import { AiFillTool,AiFillTags,AiFillCarryOut} from "react-icons/ai";
// import Requirement from './Requirement'


 export default function Recent(){
   return (
    <div id="recent" w='100%'  style={{backgroundImage: "url(recentBg.png)" ,backgroundRepeat:"no-repeat" ,backgroundPosition:'100%,10%'}}>     
        <Box boxSize='30%'  mt='-400px' ml='60%'>
          <img src='rainbow.png' alt='rainbow'/>
        </Box>
        <Stack  pb='200' mt='-400px' pl='10%'>
          <HStack   >
            <Box  w='30%' pl='-5%' pt='5%'>
              <img src='recent.png' alt='matrix logo'/>
            </Box>
            {/* <Box  w='50%' pl='20%' >
              <img src='rainbow.png' alt='rainbow'/>
            </Box> */}
          </HStack>
          <Box  w='80%' h='max-content' p="5%"  bg='rgba(255,255,255,0.3)'  borderRadius='xl' boxShadow='lg'>
             {/*预留*/}
             <List class="class-bo" spacing={2}  textAlign='left' position='relative'  fontSize='2xl' lineHeight='taller' >
                  <ListItem>
                    <ListIcon as={AiFillTool} color='blue.500' />
                      <Highlight
                        query='VSC extension'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        VSC extension
                      </Highlight>
                      <Text  fontSize='xl' w='80%' ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                        可能和很多同学想的不⼀样,Matrix 课程系统的开发和维护几乎全是由学生完成的。
                        和⼀般的科研实验室不同，比起探索未知，我们更注重对现有知识的应用。
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                    <ListIcon as={AiFillCarryOut} color='blue.500' />
                      <Highlight
                        query='服务稳定性提升'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        服务稳定性提升
                      </Highlight>
                      <Text  fontSize='xl' w='80%'ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                        待补
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                    <ListIcon as={AiFillTags} color='blue.500' />
                      <Highlight
                        query='其他大饼'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        其他大饼
                      </Highlight>
                      <Text  fontSize='xl' w='80%'ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                        待补
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                  <ListIcon as={AiFillTags} color='blue.500' />
                      <Highlight
                        query='其他大饼'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        其他大饼
                      </Highlight>
                      <Text  fontSize='xl' w='80%' ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                        待补
                      </Text>
                  </ListItem>
               </List>    
          </Box>       
        </Stack>
      <Link to='/recent'>
      </Link>

    </div>
  )
 }