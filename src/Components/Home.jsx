import { Box, Container, Heading, Image,Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.png'

const headingOptions = {
    pos :"absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%,-50%)",
    texttransform: "Uppercase",
    p:'4',
    size: "4xl",
    
}


const MyCarousel = () => (
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    showIndicators= {false}
    >
        <Box w={'full'} h={'100vh'}>
         <Image src={img1}/>
         <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch the future
         </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
         <Image src={img2}/>
         <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
            Future is gaming
         </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
         <Image src={img3}/>
         <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Gaming on console
         </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
         <Image src={img4}/>
         <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Nightlife
         </Heading>
        </Box>
        
    </Carousel>
 )
const Home = () => {
  return (
    <Box>
    <MyCarousel />
    <Container maxW={"container.xl"} minH={'100vh'} p={"16"}>
      <Heading 
      texttransform={"Uppercase"} 
      py={'2'}
      w={'fit-content'}
      borderBottom={'2px solid'}
      m={'auto'}>
        Services
      </Heading>
      <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction= {['column','row']}
      >
      <Image src={img5} h={["40", "400"]}filter={'hue-rotate(-130deg)'}/>
      <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore aliquam error, assumenda ea magnam enim numquam modi iure sunt, atque ducimus harum voluptates explicabo quisquam nisi. 
         Deserunt omnis recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error saepe voluptatibus doloremque ipsum non culpa sed. Maxime ipsam ab tempora, suscipit 
         id dolorum quo? Recusandae ad doloremque natus error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt deleniti quasi, itaque minus voluptatibus earum minima,
          magnam ex error eius quae provident modi ab praesentium iure eveniet aut a.
      </Text>
      </Stack>
      
    </Container>
    </Box>
  )

}

export default Home