import { Image, Stack } from '@chakra-ui/react';

const Footer = () => {
  const sponser = [
    {
      id: '1',
      url: 'https://img.freepik.com/premium-vector/sponsor-gold-vector-emblem-sponsor-label-stamp_545399-2786.jpg',
    },
    {
      id: '2',
      url: 'https://image.shutterstock.com/image-photo/image-260nw-1459529933.jpg',
    },
    {
      id: '3',
      url: 'https://sponser.com/cdn/shop/files/Sponser_Logo_RGB_Official-Online-Shop_2000x.png?v=1684231380',
    },
    {
      id: '4',
      url: 'https://thumbs.dreamstime.com/b/sponsor-badge-red-white-background-58987248.jpg',
    },
  ];

  const renderSponserImage = () =>
    sponser.map((item) => (
      <Image width='80px' key={item.id} objectFit='cover' src={item.url} />
    ));

    
  return (
    <Stack
      mt={4}
      gap={20}
      direction='row'
      alignItems='center'
      justifyContent='center'
    >
      {renderSponserImage()}
    </Stack>
  );
};

export default Footer;
