import React from 'react'
import { Box, Container, Grid, Image, Text, Textarea } from '@mantine/core'
import StarsReview from '../../atoms/StarsReview'

import nopicture from '../../../assets/images/nopicture.jpg'

const ReviewSection = ({ loading }) => {
  return (
    <Container size="xl" my="md">
      <Grid grow gutter="xs">
        <Grid.Col span={1}>
          <Image width={80} radius="md" src={nopicture} m={0}></Image>
        </Grid.Col>
        <Grid.Col span={11}>
          <Box>
            <Text size="lg" weight={700} pb="xs">
              Alfath
            </Text>
            <StarsReview />
          </Box>
        </Grid.Col>
        <Grid.Col span={11} offset={1}>
          <Textarea placeholder="Leave a review" size="md" />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ReviewSection
