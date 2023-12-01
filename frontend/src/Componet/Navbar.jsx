
import { Box, Image , Text } from '@chakra-ui/react'
import logo from "../Asset/zuralogo.png";
import setting from "../Asset/setting.png";
import notification from "../Asset/notification.png";

export const Navbar = () => {
  return (
    <div>
    <Box display={"flex"} justifyContent={"space-between"} alignItems="left" padding="10px 20px">
    <Box display={"flex"} padding={"10px 10px"}>
      <Box width={"50px"} h={"50px"}>
        <Image src={logo}         _hover={{ transform: 'scale(1.1)' }}
></Image>
      </Box>
      <Box>
        <Text
            fontSize="28px"
          color="#ffffff"
          fontFamily="sans-serif"
          fontWeight={700}
          lineHeight="40px"
          _hover={{ transform: 'scale(1.1)' }}

        >
          LAMA.
        </Text>
      </Box>
    </Box>

    <Box display={"flex"} p={"10px"} marginRight={"40px"}>
      <Image
        src={setting}
        width={"38px"}
        h={"38px"}
        marginTop={"60px"}
        _hover={{ transform: 'scale(1.1)' }}

      ></Image>

      <Image
        src={notification}
        w={"48px"}
        h={"48px"}
        marginTop={"55px"}
        _hover={{ transform: 'scale(1.1)' }}

      ></Image>
    </Box>
  </Box>
</div>
  )
}
