import React from "react";
// import { Link } from 'react-router-dom';
import { Tabs, TabList,  Tab } from '@chakra-ui/react'

// import Introduction from './Introduction'


export default function Navigation (){
    return (
      <div>
        <Tabs isFitted variant='soft-rounded'position='relative' fontFamily='revert' bg='rgb(30, 144 255)'>
            <TabList  >
               <Tab fontSize='2xl' _selected={{ color: 'white', bg: 'rgb(188 ,210, 238)' }} ><a href="#introduction">关于我们</a></Tab>
               <Tab fontSize='2xl' _selected={{ color: 'white', bg: 'rgb(188 ,210, 238)' }} ><a href="#recent">近期工作</a></Tab>
               <Tab fontSize='2xl'  _selected={{ color: 'white', bg: 'rgb(188 ,210, 238)' }} ><a href="#welfare">团队福利</a></Tab>
               <Tab fontSize='2xl'  _selected={{ color: 'white', bg: 'rgb(188 ,210, 238)' }}><a href="#requirement">招新要求</a></Tab>
               <Tab fontSize='2xl'  _selected={{ color: 'white', bg: 'rgb(188 ,210, 238)' }} ><a href="#bottom">加入我们</a></Tab>
            </TabList>
         </Tabs>    
      </div>
    )
}
