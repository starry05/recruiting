import React from "react";
import { Link } from 'react-router-dom';
// import Recent from './Recent'
import {Box,Stack,Text,HStack} from '@chakra-ui/react'

 export default function Introduction(){
   return (
    <div id="introduction" w='100%' h='100%' style={{minWidth:'940px'}} >
      <div style={{backgroundImage: "url(intro-background.png)" ,backgroundRepeat:"no-repeat",WebkitBackgroundSize:"100%"}}>
      <HStack w='100%' h='100%' > 
        <Stack w='35%' mt='50px'>
          <Box  w='100%' pl='15%' >
            <img src='introImg.png' alt='matrix logo'/>
          </Box>
          <Box  w='90%' pl='8%' pt='15%'>
            <img src='homeImg.png' alt='matrix logo'/>
          </Box>
        </Stack>

        <Stack w='60%'  >
        
          <Box  w='40%'   ml='20%' mt='-10%'>
               <img src='about-us.png' alt='about-us'/>
          </Box>
          <Box w='90%' m='5%' bg='rgba(255,255,255,0.3)'  borderRadius='xl' boxShadow='lg'>
          <Text  fontSize='initial' w='90%' p='5%' pl='10%' fontFamily='-moz-initial' lineHeight='taller'textAlign='justify' style={{textIndent:"2em"}} >
          <p>Matrix 课程系统，也就是大家程设、算法课上用到的平台，是由我们学校大二、大三的学生构成的 Matrix 实验室维护的。  </p> 
          <p>
            可能和很多同学想的不⼀样,Matrix 课程系统的开发和维护几乎全是由学生完成的。
            和⼀般的科研实验室不同，比起探索未知，我们更注重对现有知识的应用。
            如何使用几台商业服务器和网络设备支撑 Matrix 考试的流量？
            如何使永用 Web 知识打造⼀个已用过的网页程序？
            如何解决用户等待评测结果时间太长的问题？
            课堂里或许只能让你知道几个概念，几个定义，几在这里⼀切都是真枪实弹。 
          </p>
          <p>
            在这里，你可以和成功保研（甚至是免试保研）的学长学姐进行交流，收获学习经验；
            可以和工作在腾讯、字节跳动等国内顶尖互联网公司的师兄师姐亲切沟通，喜提大厂内推；
            更有超强队友⼀起学习、工作、交流，获得扎实项目经历。
          </p>
          </Text>
          </Box>
        </Stack>
      </HStack>

      <Link to='/introduce'>
      </Link>
      </div>
    </div>
      ) 
 }