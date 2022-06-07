import React, { useState } from 'react'
import {
  AppShell,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Container,
} from '@mantine/core'
import Navbar from '../components/molecules/Navbar'
import FooterContent from '../components/molecules/FooterContent'

const Shell = ({ children }) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      sx={{
        main: {
          padding: 0,
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      p={0}
      navbarOffsetBreakpoint="sm"
      // fixed
      header={
        <Header height={80} p="xs" sx={{ display: 'flex', alignItems: 'center' }}>
          <Navbar />
        </Header>
      }
      footer={
        <Footer height={200} p="md">
          <FooterContent />
        </Footer>
      }
    >
      {children}
    </AppShell>
  )
}

export default Shell
