import React from "react";
import { Link } from 'react-router-dom';
import {Box,HStack,Stack,Text} from '@chakra-ui/react'
// import { AiFillCheckCircle} from "react-icons/ai";


export default function Welfare(){
    return (
    <div  w='100%' h='100%'  style={{backgroundImage: "url(welfareBg.png)" ,backgroundRepeat:"no-repeat" ,WebkitBackgroundSize:"100%",minWidth:'940px'}}>
        <Stack >
            <Box id="welfare" w='30%'  alignSelf='end' mr='10%' mt='5%'>
                <img src='welfare.png' alt='welfare heading'/>
            </Box>
        </Stack>
        
        <HStack  mt='6%' spacing='20' ml='6%' mr='6%' pb='10%'>

            <Box  w='30%' h='full'  bg='rgba(255,255,255,0.3)'  borderRadius='lg' boxShadow='lg' >
                <Stack spacing='10' p='5%'>
                    <Box w='80%' pl='10%' pt='10px'>
                        <img src='welfareT1.png' alt='充实假期' />
                    </Box>
                    <Text  fontSize='xl' w='90%'  mt='6%' pl='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' style={{textIndent:"2em"}} >
                           <p> 参与我们寒暑假的线上开发，也能享受50+公益时和其他福利，学习开发两不误。</p>
                           <p><br/><br/><br/></p>
                    </Text>
                </Stack>
            </Box>
            <Box  w='30%' h='full' mt='-400px' bg='rgba(255,255,255,0.3)'  borderRadius='lg' boxShadow='lg' >
                <Stack spacing='10' p='5%'>
                    <Box w='80%' pl='10%' pt='10px'>
                        <img src='welfareT2.png' alt='充实假期' />
                    </Box>
                    <Text  fontSize='xl' w='90%'  mt='6%' pl='5%' fontFamily='-moz-initial' lineHeight='taller' textAlign='justify' style={{textIndent:"2em"}} >
                    <p>要想开发效率高，先得把环境搞好。实验楼专属实验室+私人座位+空调+零食+饮水机+WIFI ！</p>
                    <p><br/><br/><br/></p>
                    </Text>
                </Stack>
            </Box>
            <Box  w='30%' h='full' mt='-400px' bg='rgba(255,255,255,0.3)'  borderRadius='lg' boxShadow='lg' >
                <Stack spacing='10' p='5%'>
                    <Box w='80%' pl='10%' pt='10px'>
                        <img src='welfareT3.png' alt='充实假期' />
                    </Box>
                    <Text  fontSize='xl' w='90%'  mt='6%' pl='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' style={{textIndent:"2em"}} >
                        扎实项目经历，获得面试官青睐
                        全新线上“技术分享会”，足不出户学技术
                        超强队友一起学习、工作、交流、合作团队凝聚力MAX
                        认识热情的师兄师姐，喜提大厂内推
                    </Text>
                </Stack>
            </Box>
        </HStack>
        <Link to='/welfare'>
        </Link>
        
    </div>
    )
}