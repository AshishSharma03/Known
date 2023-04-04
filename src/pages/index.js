import {  Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Input, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import ReviewCard from '../../components/ReviewCard'
import MainIcon from '../../core/MainIcon'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Login from '../../components/Login'
const blogData=[
  {
    id: "18190381902",
    author :"Hailley Griffis",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/02/joshua-hoehne-Lh_sFxD8AkI-unsplash.jpg",
    role :"Head of Communications & Content @ Buffer",
    title:"An update on Twitter's API changes and Buffer",
    desc :"Twitter has made a number of changes to their API and access tiers over the last few weeks. However, these changes will not impact Buffer"
  },
  {
    id: "1sas0381902",
    author :"Tamilore Oladipo",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/03/encal-media-HN5_6FoOfn0-unsplash--1-.jpg",
    role :"Content Writer @ Buffer",
    title:"What is a UGC Creator and How to Become One in 2023 (ft. Advice from Experts)",
    desc :"If you’ve been wondering what it takes to be a UGC creator and how you can get started, this article is for you. Speaking to people on either side of this unique brand-creator relationship, this guide will answer your questions and put you on track to becoming a UGC creator"
  },
  {
    id: "1s0sa1902",
    author :"Tamilore Oladipo",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/03/encal-media-HN5_6FoOfn0-unsplash--1-.jpg",
    role :"Content Writer @ Buffer",
    title:"What is a UGC Creator and How to Become One in 2023 (ft. Advice from Experts)",
    desc :"If you’ve been wondering what it takes to be a UGC creator and how you can get started, this article is for you. Speaking to people on either side of this unique brand-creator relationship, this guide will answer your questions and put you on track to becoming a UGC creator"
  },
  {
    id: "18190381902",
    author :"Hailley Griffis",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/02/joshua-hoehne-Lh_sFxD8AkI-unsplash.jpg",
    role :"Head of Communications & Content @ Buffer",
    title:"An update on Twitter's API changes and Buffer",
    desc :"Twitter has made a number of changes to their API and access tiers over the last few weeks. However, these changes will not impact Buffer"
  },
  {
    id: "1sa0sa1902",
    author :"Tamilore Oladipo",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/03/encal-media-HN5_6FoOfn0-unsplash--1-.jpg",
    role :"Content Writer @ Buffer",
    title:"What is a UGC Creator and How to Become One in 2023 (ft. Advice from Experts)",
    desc :"If you’ve been wondering what it takes to be a UGC creator and how you can get started, this article is for you. Speaking to people on either side of this unique brand-creator relationship, this guide will answer your questions and put you on track to becoming a UGC creator"
  },
  {
    id: "1s0sasa1902",
    author :"Tamilore Oladipo",
    cover : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2023/03/encal-media-HN5_6FoOfn0-unsplash--1-.jpg",
    role :"Content Writer @ Buffer",
    title:"What is a UGC Creator and How to Become One in 2023 (ft. Advice from Experts)",
    desc :"If you’ve been wondering what it takes to be a UGC creator and how you can get started, this article is for you. Speaking to people on either side of this unique brand-creator relationship, this guide will answer your questions and put you on track to becoming a UGC creator"
  },
]



function Index() {
  const [backColor, setbackColor] = useState("#fff");
  

  return (<Login/>)
  // return (
  //  <Box sx={{minHeight:"100vh",background:backColor}}>
  //       <Navbar backColor={backColor} />

  //       <Container maxWidth="xl">
  //       <Typography sx={{fontSize:"40px",fontWeight:"800",marginLeft:"20px"}}>latest</Typography>
  //       <Grid container >
  //         {blogData.slice(0,1).map((a,i)=>{
            
  //           return (<>
  //           <Grid item md={7} xs={12}  >
  //           <ReviewCard key={i} author={a.author} title={a.title} desc={a.desc} image={a.cover}/>
  //           </Grid>
  //           </>)    
  //         })}
  //         {blogData.slice(2,3).map((a,i)=>{
  //           return (<>
  //           <Grid item md={5} xs={12}  >
  //           <ReviewCard key={i} author={a.author} title={a.title} desc={a.desc} image={a.cover}/>
  //           </Grid>
  //           </>)    
  //         })}

  //         </Grid>
  //         <Grid container >
          
  //         </Grid>
  //       <Grid container >
  //         {blogData.slice(2).map((a,i)=>{
            
  //           return (<>
  //           <Grid item md={6} xs={12}  >
  //           <ReviewCard key={i} author={a.author} title={a.title} desc={a.desc} image={a.cover}/>
  //           </Grid>
  //           </>)    
  //         })}
  //         </Grid>
    
  //       </Container>

  //  </Box>
  // )
}

export default Index