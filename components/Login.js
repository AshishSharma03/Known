import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import MainIcon from "../core/MainIcon";
function Login() {
    const [Email, setEmail ] = useState()
    const [Password, setPassword ] = useState()
    const [Visibility, setVisibility ] = useState(true)
    const [error , setError] = useState(false)

   const handleSubmit =( )=>{

    if(Email && Password){
      console.log([Email,Password])
    }
   } 

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <MainIcon />
      <Card sx={{ minWidth: "400px", boxShadow: "none"}}>
        <CardContent>
          <Stack gap={2} sx={{padding:"10px"}}>
            <input
              type="email"
              placeholder="example@email.com"
              style={{ fontSize: "15px", padding: "10px", border: "none" }}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <Stack direction={"row"}>
              <input
                type={(Visibility)?"password":"text"}
                placeholder="Password"
                style={{
                  fontSize: "15px",
                  padding: "10px",
                  border: "none",
                  width: "100%",
                }}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <IconButton onClick={()=>{setVisibility(!Visibility)}}>
                {(Visibility?
                <VisibilityOffIcon />
                :
                <VisibilityIcon />
                )}
              </IconButton>
            </Stack>
            <Button variant="contained" sx={{ boxShadow: "none"   ,background:"#000",'&:hover':{background:"black"}}}  onClick={handleSubmit}>
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
