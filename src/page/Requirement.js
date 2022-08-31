import React from "react";
import { Link } from 'react-router-dom';
import { Text,HStack,Box,Tabs, TabList,Tab,TabPanels,TabPanel,Divider,Center, Heading ,Highlight} from "@chakra-ui/react";
export default function Requirement(){
    return (
    <div w='100%' style={{minWidth:'940px'}}>
        <Box  w='30%' ml='40%' mt='-25%' mb='150'>
            <img src='plane.png' alt='requirement heading'/>
        </Box>
        <div id="requirement" w='100%' h='100%' style={{backgroundImage: "url(requireBg.png)" ,backgroundRepeat:"no-repeat",WebkitBackgroundSize:"100%" }}>
            <HStack w='100%' h='900px' mt='-10%'  spacing='10'>
                <Box  w='10%' ml='5%' >
                    <img src='requirement.png' alt='requirement heading'/>
                </Box>
                <Box w='80%' mr='15%' >
                    <Tabs  isFitted h='full' size='lg' bg='rgb(255,255,255,0.3)'  borderRadius='2xl' boxShadow='lg'>
                        <TabList>
                            <Tab>产品</Tab>
                            <Tab>设计</Tab>
                            <Tab>前端</Tab>
                            <Tab>后端</Tab>
                        </TabList>

                        <TabPanels >
                            <TabPanel>
                                <HStack h='700px' pt='-5%'>    
                                    <Text  fontSize='l' w='40%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>岗位描述</Heading>
                                        <ol>
                                            <li>负责 Matrix 团队已有产品的调研、分析和优化。</li>
                                            <li>负责 Matrix 团队新产品或新模块的规划，挖掘用户需求，产出需求池、功能结构图、流程图、低保真原型图、PRD 和验收文档。</li>
                                            <li>负责产品方案的制订及跟踪，协调设计、前端、后端、运营等部门，推动产品的研发与运营，及时调整策略，确保产品按时按质上线。</li>
                                        </ol>
                                    </Text>

                                    <Center height='550px' size='10px'>
                                        <Divider orientation='vertical' style={{color:'blue'}}/>
                                    </Center>
                                    
                                    <Text  fontSize='l' w='60%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>招新要求</Heading>
                                        <ol>
                                            <li>仅限20、21级同学。</li>
                                            <li>了解互联网产品经理的职责和定位，对 Matrix 的主要产品、功能和定位有了解和自己的看法。</li>
                                            <li>具备敏捷的洞察和逻辑思维能力，有把思考变为现实以满足用户需求的勇气和能力。</li>
                                            <li>工作严谨负责、有效率，注重用户体验。</li>
                                            <li>有优秀的信息检索、学习能力，能够通过快速学习获取相关知识。</li>
                                            <li>积极融入团队，及时跟进推进工作，快速与团队成员建立起良好的沟通，保证工作的完成。</li>
                                        </ol>                    
                                        <Heading fontSize='3xl' textAlign='left' pt='7' pb='7' color='blue.500'>
                                            <Highlight
                                            query='加分项'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'blue.500'}} >
                                            加分项
                                            </Highlight>   
                                        </Heading>
                                        <ol>
                                            <li>有社团组织经验，写过活动策划书。</li>
                                            <li>了解并使用 Axure、MockPlus、Sketch 其中一个原型制作工具。</li>
                                            <li>能提供原型图设计作品。</li>
                                            <li>能提供任一产品的倒推 PRD。</li>
                                            <li>对敏捷方法有一定的认识。 </li>
                                        </ol>
                                    </Text>
                                </HStack>
                            </TabPanel>
                            
                            <TabPanel>
                                <HStack h='700px' pt='-5%'>    
                                    <Text  fontSize='l' w='40%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>岗位描述</Heading>
                                        <ol>
                                            <li>负责 Matrix 全线产品的 UX/UI 设计，从设计策略到设计产出执行的全流程工作</li>
                                            <li>和产品经理一起构思创意，提供具备优质产品体验的整体解决方案</li>
                                            <li>参与设计流程、规范的制定工作，实现产品视觉呈现在用户体验上的突破</li>
                                            <li>时刻关注并分析流行产品设计趋势，研究目标用户的需求痛点、体验诉求与审美倾向，进行现有产品的优化</li>
                                        </ol>
                                    </Text>

                                    <Center height='500px' size='10px'>
                                        <Divider orientation='vertical' style={{color:'blue'}}/>
                                    </Center>
                                    
                                    <Text  fontSize='l' w='60%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>招新要求</Heading>
                                        <ol>
                                            <li>了解界面设计、交互体验设计的基本流程和方法论</li>
                                            <li>对交互原型与视觉设计软件有一定的基础，如 Axure、Adobe XD、Sketch、Photoshop、Illustrator 等</li>
                                            <li>对互联网产品的设计有强烈兴趣和独到见解，自我驱动力强</li>
                                            <li>具备一定的产品思维和较好的用户同理心，重视细节</li>
                                            <li>兼具逻辑思维和审美能力，善于学习，富有创造力和激情，有责任心，沟通协作能力强，密切与团队各职位配合</li>
                                        </ol>                    
                                        <Heading fontSize='3xl' textAlign='left' pt='10' pb='7' color='blue.500'>
                                            <Highlight
                                            query='加分项'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'blue.500'}} >
                                            加分项
                                            </Highlight>   
                                        </Heading>
                                        <ol>
                                            <li>对基本的 web 标准、HTML、CSS 等有一定的了解</li>
                                            <li>了解当前主流设计思想和 Web 端设计规范</li>
                                            <li>有平面设计、UX/UI 设计相关经验，能提供设计作品</li>
                                            <li>有产品高保真原型作品者优先</li>
                                        </ol>
                                    </Text>
                                </HStack>
                            </TabPanel>
                            
                            <TabPanel>
                                <HStack h='700px'  pt='-5%'>    
                                    <Text  fontSize='l' w='40%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>岗位描述</Heading>
                                        <ol>
                                            <li>主要负责课程系统和反馈系统的网页前端的开发维护工作。</li>
                                            <li>配合产品与设计实现新需求或者改善网页的用户体验。</li>
                                            <li>同后端共同将新需求或者修改落地。</li>
                                            <li>在工作过程中严格遵守相关规范，与其他同学和睦相处，共同为 Matrix 奋斗。</li>
                                        </ol>
                                    </Text>

                                    <Center height='550px' size='10px'>
                                        <Divider orientation='vertical' style={{color:'blue'}}/>
                                    </Center>
                                    
                                    <Text  fontSize='l' w='60%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>招新要求</Heading>
                                        <ol>
                                            <li>对 Web 开发有热情、能坚持。</li>
                                            <li>会使用 Git 进行团队协作。</li>
                                            <li>有良好的学习能力与相对充裕的时间，能在较短的周期内学习并掌握陌生的技术。</li>
                                        </ol>                    
                                        <Heading fontSize='3xl' textAlign='left' pb='7' pt='10' color='blue.500'>
                                            <Highlight
                                            query='加分项'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(164,203,236,0.5)' ,color:'blue.500'}} >
                                            加分项
                                            </Highlight>   
                                        </Heading>
                                        <ol>
                                            <li>理解并且能够熟练掌握 HTML、CSS、JavaScript / TypeScript，有 Web 开发经验。</li>
                                            <li>接触过 React、Vue、Angular等一种或以上 MVVM / JSX 类前端框架，了解 SPA 单页应用开发。</li>
                                            <li>了解 HTTP 协议和前后端分离。</li>
                                            <li>了解前端模块化，了解 Webpack 等前端构建工具的配置与使用。</li>
                                            <li>有做过自己的含前端的 Web 项目。</li>
                                        </ol>
                                    </Text>
                                </HStack>
                            </TabPanel>
                            
                            <TabPanel>
                                <HStack h='700px'   pt='-5%'>    
                                    <Text  fontSize='l' w='40%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>岗位描述</Heading>
                                        后端承担了Matrix课程和考试系统的用户数据储存和处理。后端包含两个重要的部分：服务端和后台。                  
                                        <Heading fontSize='xl' textAlign='left' pb='7'pt='10' color='blue.500'>
                                            <Highlight
                                            query='服务端'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgb(220 ,220, 220,0.5)' ,color:'blue.500'}} >
                                            服务端
                                            </Highlight>   
                                        </Heading>
                                        服务端主要负责设计规范的接口来与前端进行数据交互，同时保障系统功能正常
                                        <Heading fontSize='xl' textAlign='left' pb='7' pt='10' color='blue.500'>
                                            <Highlight
                                            query='后台'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgb(220 ,220, 220,0.5)' ,color:'blue.500'}} >
                                            后台
                                            </Highlight>   
                                        </Heading>
                                        负责接收同学们提交的程序，编译运行，与标准答案比对，最后返回程序的评测报告，详尽的呈现程序的运行情况。
                                    </Text>

                                    <Center height='550px' size='10px'>
                                        <Divider orientation='vertical' style={{color:'blue'}}/>
                                    </Center>
                                    
                                    <Text  fontSize='l' w='60%'h='700px'  p='5%' fontFamily='-moz-initial' textAlign='justify' lineHeight='taller' >
                                        <Heading fontSize='3xl' textAlign='left' pb='10' color='blue.500'>招新要求</Heading>
                                        <Heading fontSize='xl' textAlign='center' p='7' color='blue.500'>
                                            <Highlight
                                            query='服务端'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgb(164,203,236,0.5)' ,color:'blue.500'}} >
                                            服务端
                                            </Highlight>   
                                        </Heading>
                                        <ol>
                                            <li>了解 Web 开发中后端相关的基本概念 e.g. HTTP，数据库</li>
                                            <li>熟悉 Nodejs, Golang, Python 等至少一种服务端开发语言</li>
                                            <li>熟悉 Git 的操作</li>
                                            <li>开发过 Web 后端项目【加分项】</li>
                                            <li>熟悉 Docker 的基本概念和使用【加分项】</li>
                                        </ol>
                                        <Heading fontSize='xl' textAlign='center' p='7' color='blue.500'>
                                            <Highlight
                                            query='后台'
                                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgb(164,203,236,0.5)' ,color:'blue.500'}} >
                                            后台
                                            </Highlight>   
                                        </Heading>
                                        <ol>
                                            <li>熟悉C++、Python等编程语言</li>
                                            <li>熟悉常用算法和数据结构</li>
                                            <li>具有操作系统的基础知识，熟悉Linux的使用，了解Unix环境编程</li>
                                            <li>具有数据库的基础知识，了解MySQL的使用</li>
                                            <li>具有计算机网络等其它基础知识，了解git的使用，具有开发经验者优先</li>
                                        </ol>
                                    </Text>
                                </HStack>
                            </TabPanel>
                    
                        </TabPanels>
                    </Tabs>
                </Box>

            </HStack>
        </div>
    <Link to='/requirement'>
    </Link>
    
    </div>
    )
}