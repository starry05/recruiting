import React from "react"
import { Box ,Text,Highlight} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


export default function Bottom() {
  return (
    <div id='bottom' w='100%' h='100%' overflowX='hidden'style={{minWidth:'940px'}} >
        <Box overflowX='hidden'  bg='#BDDFFE'   >  
            <Box boxSize='30%'  ml='35%' mt='5%' mb='-14%'>
                <img src='bottomTitle1.png' alt='rainbow'/>
            </Box>
            <Box w='90%' mt='8%' mb='5%'  ml='5%' mr='5%' bg='rgb(255,255,255,0.1)' borderRadius='xl' boxShadow='xl'  >
              
              <Text fontSize='2xl' mt='13%' p='5%' pl='8%' fontFamily='-moz-initial' lineHeight='taller' textAlign='justify' color='black' style={{textIndent:"2em"}}>
                <p>Matrix 其实长期都在招新，主要面向本科大一、大二的同学们。</p>
                <p>
                <Highlight
                    query='recruit@matrix.moe'
                    styles={{ color:'blue.500'}}>            
                  如果你有兴趣加入我们，欢迎将简历（格式为 PDF 文件）投递至 recruit@matrix.moe，
                  在邮件标题注名“Matrix招新简历-方向-年级-专业-姓名”，收到简历后我们会尽快回复面试通知。 Matrix期待你的加入！
                  
                </Highlight>
                </p>
                <p>
                <Highlight
                    query='878822270'
                    styles={{ color:'blue.500'}}>            
                  如果你有疑问，或者想和我们交流，欢迎加入 Matrix 秋季招新交流群：878822270
                  
                </Highlight>
                
                </p>
              </Text>
            </Box>
                 
 
         </Box> 
         <Link to='/bottom'>
         </Link>
      </div>
  )
}


