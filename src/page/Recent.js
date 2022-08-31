import React from "react";
import { Link } from 'react-router-dom';
import {Box,Stack,HStack,Text,List,ListItem,ListIcon, Highlight } from '@chakra-ui/react'
import { AiFillTool,AiFillTags,AiFillCarryOut} from "react-icons/ai";
// import Requirement from './Requirement'


 export default function Recent(){
   return (
    <div id="recent" w='100%' style={{minWidth:'940px'}}  >     
      <div style={{backgroundImage: "url(recentBg.png)" ,backgroundRepeat:"no-repeat" ,backgroundPosition:'100%,10%',WebkitBackgroundSize:"100%"}}> 
        <Box boxSize='50%'  ml='50%' mt='-15%'>
          <img src='rainbow.png' alt='rainbow'/>
        </Box>
        <Stack   mt='-35%' pl='10%'>
          <HStack   >
            <Box  w='35%' pl='5%' pt='5%'>
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
                      <Text  fontSize='initial' w='80%' ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                      自微软推出 VS Code 以来，因其便捷性、人性化的界面、插件多等优势一跃成为了许多开发者们最爱用的工具之一。
                      目前我们正致力于实现 Matrix 在 VS Code 上的插件，同学们将可以通过插件在 VS Code 上直接进行题目的查看、代码的测试提交，提升做题体验。
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                    <ListIcon as={AiFillCarryOut} color='blue.500' />
                      <Highlight
                        query='服务稳定性提升'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        服务稳定性提升
                      </Highlight>
                      <Text  fontSize='initial' w='80%'ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                      Go 诞生于谷歌，由于出身名门，Go 在诞生之初就吸引了大批开发者的关注。
                      诞生十年以来，已经涌出了很多基于 Go  的应用，其中不妨大家耳熟能详的 Kubernetes、飞书、知乎。
                      本次重构目的是将服务端从 Node.js 这个动态语言迁移到静态语言 Go 上，并添加更多使用功能如监控、RPC服务、Tracing 等。
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                    <ListIcon as={AiFillTags} color='blue.500' />
                      <Highlight
                        query='新前端'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        新前端
                      </Highlight>
                      <Text  fontSize='initial' w='80%'ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                      课程系统新前端采用全新的设计风格，争取为用户提供更加直观、更加美观、更加易用的交互界⾯，提升用户的整体体验，并且我们在新前端中将新增⼀些船新功能，敬请期待。
                      新前端放弃了 Angular 框架，转而使用 React 框架，并且搭配当下最为前沿的技术栈，不仅能够提高开发效率，也能够为用户提供更好的功能。
                      在上一学期，我们已经基本完成了新设计并对部分页面进行了实现。在这⼀学期里，我们将继续着手开发新前端，争取尽早上线。
                      </Text>
                  </ListItem>
                  
                  <ListItem>
                  <ListIcon as={AiFillTags} color='blue.500' />
                      <Highlight
                        query='服务端静态化重构'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'black'}}>
                        服务端静态化重构
                      </Highlight>
                      <Text  fontSize='initial' w='80%' ml='5%' fontFamily='-moz-initial' lineHeight='taller' style={{textIndent:"2em"}}>
                      Go 诞生于谷歌，由于出身名门，Go 在诞生之初就吸引了大批开发者的关注。
                      诞生十年以来，已经涌出了很多基于 Go  的应用，其中不妨大家耳熟能详的 Kubernetes、飞书、知乎。
                      本次重构目的是将服务端从 Node.js 这个动态语言迁移到静态语言 Go 上，并添加更多使用功能如监控、RPC服务、Tracing 等。
                      </Text>
                  </ListItem>
               </List>    
          </Box>       
        </Stack>
      <Link to='/recent'>
      </Link>
      </div> 
    </div>
  )
 }