import { AppBar, Icon, Toolbar, Typography ,Stack,Box, Button, Container} from '@mui/material'
import React from 'react'
import MainIcon from '../core/MainIcon'

function Navbar({backColor}) {

  return (
    <AppBar position='static'  sx={{background:backColor,boxShadow:"none",color:"black"}}>
        <Container maxWidth="xl">
        <Toolbar sx={{bg:"#fff"}}> 
            <MainIcon/>
            <span style={{flexGrow:1}} />
            <Button>Login</Button>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar