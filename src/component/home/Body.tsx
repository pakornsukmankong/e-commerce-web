import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import { Colors } from '../colors';

const Body = () => {
  return (
    <Stack justifyContent='center' alignItems='center' gap={10} pt={10}>
      <Text fontSize='56px' fontWeight='700' color={Colors.gray9}>
        Better clothing for the planet
      </Text>
      <Text width='50%' align='center' fontSize='20px' color={Colors.gray6}>
        Create screens directly in Method or add your images from Sketch or
        Figma. You can even sync designs from your cloud storage!
      </Text>
      <Button
        py='24px'
        width='200px'
        bgColor='white'
        border='2px'
        borderColor={Colors.gray6}
      >
        Shop All
      </Button>
      <Box>
        <Image
          width='1114px'
          height='521px'
          objectFit='cover'
          src='https://cdn.apartmenttherapy.info/image/upload/v1561242428/stock/shutterstock_373602469.jpg'
          alt='Hero'
        />
      </Box>
    </Stack>
  );
};

export default Body;
