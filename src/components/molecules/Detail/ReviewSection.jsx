import React from 'react'
import { Box, Grid, Image, Text, Textarea } from '@mantine/core'
import { StarsReview } from '../../atoms'

// import nopicture from '../../../assets/images/nopicture.jpg'
import amnesty from '../../../assets/images/amnesty-squared.jpg'

const ReviewSection = ({ loading }) => {
  return (
    <>
      <Grid grow gutter="xs" my="sm">
        <Grid.Col span={1}>
          <Image width={80} radius="md" src={amnesty} m={0}></Image>
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
    </>
  )
}

export default ReviewSection
