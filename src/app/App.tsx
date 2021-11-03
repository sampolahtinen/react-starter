import React from 'react';
import { Flex, Box, ThemeProvider, Image } from 'theme-ui';
import { useSpring, animated } from 'react-spring';
import logo from '../assets/images/logo.svg';
import { theme } from '../styles/theme';

const App = () => {
  const spinAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    loop: true,
    config: {
      duration: 10000
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Flex
          sx={{
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <animated.div style={spinAnimation}>
            <Image src={logo} alt="logo" width="500px" />
          </animated.div>
          <Box p={4} sx={{ textAlign: 'center' }}>
            <h1 title="welcome">Welcome to React Starter!</h1>
            <h2>Have fun coding!</h2>
          </Box>
        </Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
