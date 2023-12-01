import React from 'react'
import { Navbar } from '../Componet/Navbar'
import { Box, Text,Image } from '@chakra-ui/react'
import banner from "../Asset/Banner.png";

export const Dashboard = () => {
  return (
    <Box>
  <Navbar/>
<Text color={'purple.700'} >  
            Create a New Project
</Text>
<Image src={banner} />

    </Box>
  )
}
