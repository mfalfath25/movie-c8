import React from 'react'
import { AppShell, Header, Footer, Box } from '@mantine/core'
import HeaderContent from '../components/molecules/HeaderContent'
import FooterContent from '../components/molecules/FooterContent'

const Shell = ({ children }) => {
  return (
    <AppShell
      sx={{
        // position: ' relative',
        // minHeight: '100vh',
        main: {
          padding: 0,
        },
      }}
      p={0}
      navbarOffsetBreakpoint="sm"
      // fixed
      header={
        <Header
          height={'auto'}
          p="xs"
          // sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HeaderContent />
        </Header>
      }
      footer={
        <Footer
          height={'auto'}
          p="xs"
          py="md"
          sx={{
            // position: 'absolute',
            // bottom: 0,
            // width: '100vw',
            background: 'black',
            color: 'white',
          }}
        >
          <FooterContent />
        </Footer>
      }
    >
      <Box
        sx={
          {
            // position: 'relative',
            // minHeight: '100%',
          }
        }
      >
        {children}
      </Box>
    </AppShell>
  )
}

export default Shell
