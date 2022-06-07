import { MantineProvider } from '@mantine/core'
import './App.css'
import Routing from './router/Routing'
import Shell from './layouts'

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Plus Jakarta Sans, sans serif',
        headings: { fontFamily: 'Plus Jakarta Sans, sans serif' },
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <Shell>
        <Routing />
      </Shell>
    </MantineProvider>
  )
}

export default App
