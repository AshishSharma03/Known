import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";

function ReviewCard({
  id,
  author,
  title,
  desc,
  image,
  category = "technolgoy",
}) {
  return (
    <Card
      
      sx={{
        margin: "10px",
    
        boxShadow: "none",
        "&:hover": { boxShadow: "0px 0px 100px 10px rgba(0,0,0,0.2)" },
      }}
    >
      <CardActionArea>
        <CardMedia component={"img"} image={image} height={"320"} />
        <Stack
          gap={1}
          sx={{
            position: "absolute",
            top: "0px",
            width: "100%",
            padding: "20px",
            background: "#fff",
          }}
        >
          <Stack direction={"row"}>
            <Typography
              sx={{
                fontWeight: "800",
                textTransform: "uppercase",
                color: "#FF017C",
              }}
            >
              {category}{" "}
            </Typography>
            <span style={{ flexGrow: 1 }} />
            <Typography sx={{ fontWeight: "800" ,color:"#7D7D7D"}}>20/10/2023</Typography>
          </Stack>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "800", color: "#000" }}
          >
            {title}
          </Typography>
        </Stack>

        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Box sx={{ padding: "10px", color: "#575757", fontWeight: "800" }}>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {desc}
            </Typography>
            <Typography sx={{color:"#9EB4FF",fontWeight:"800"}}>Tap to Read more</Typography>
          </Box>
          </CardContent>
          </CardActionArea>  
          <CardContent>
          <Box padding={"0px 10px"}>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <Avatar />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#889EFF",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {author}
              </Typography>
           
              <span style={{ flexGrow: 1 }} />
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Stack>
          </Box>
          </CardContent>
   
    </Card>
  );
}

export default ReviewCard;
