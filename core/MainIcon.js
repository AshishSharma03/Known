import React from 'react'
import { AppBar, Icon, Toolbar, Typography ,Stack,Box, Button} from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
function MainIcon() {
  return (
    <>
     <Stack alignItems={"center"} flexDirection={"row"} gap={0.2} >
                <Icon>
                    <TipsAndUpdatesIcon/>
                </Icon>
                <Typography sx={{fontWeight:"800",borderBottom:"2px solid black",maxWidth:"30px"}}>{"Known "}</Typography>
            </Stack> 
    </>
  )
}

export default MainIcon