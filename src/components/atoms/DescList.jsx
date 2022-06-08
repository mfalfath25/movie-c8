import { Text } from '@mantine/core'
import React from 'react'

const DescList = ({ first, children }) => {
  return (
    <>
      <Text weight={700}>
        {first}:{' '}
        <Text weight={500} sx={{ display: 'inline' }}>
          {children}
        </Text>
      </Text>
    </>
  )
}

export default DescList
