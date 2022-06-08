import React from 'react'
import { AppShell, Header, Footer } from '@mantine/core'
import HeaderContent from '../components/molecules/HeaderContent'
import FooterContent from '../components/molecules/FooterContent'

const Shell = ({ children }) => {
  return (
    <AppShell
      sx={{
        main: {
          padding: 0,
        },
      }}
      p={0}
      navbarOffsetBreakpoint="sm"
      // fixed
      header={
        <Header
          height={80}
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
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'black',
            color: 'white',
          }}
        >
          <FooterContent />
        </Footer>
      }
    >
      {children}
    </AppShell>
  )
}

export default Shell
