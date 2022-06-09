import React, { useEffect, useState } from 'react'
import { Image, SimpleGrid, Text } from '@mantine/core'
import nopicture from '../../../assets/images/nopicture.jpg'

const CharacterSection = ({ movie }) => {
  const [actors, setActors] = useState([])

  const getActors = async () => {
    movie?.Actors === undefined
      ? setActors([])
      : movie?.Actors === 'N/A'
      ? setActors([])
      : setActors(movie?.Actors.split(', '))
  }

  useEffect(() => {
    getActors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.Actors])

  return (
    <>
      <SimpleGrid cols={5} spacing="sm" my="md">
        {actors.length === 0 ? (
          <>
            <div>
              <Image radius="md" src={nopicture} />
              <Text pt="xs" weight={700} sx={{ display: 'flex', justifyContent: 'center' }}>
                N/A
              </Text>
            </div>
          </>
        ) : (
          <>
            {actors?.map((actor, index) => (
              <div key={index}>
                <Image radius="md" src={nopicture}></Image>
                <Text pt="xs" weight={700} sx={{ display: 'flex', justifyContent: 'center' }}>
                  {actor}
                </Text>
              </div>
            ))}
          </>
        )}
      </SimpleGrid>
    </>
  )
}

export default CharacterSection
