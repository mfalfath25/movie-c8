import { Anchor, Box, Container, Divider, Grid, Group, Image, Text } from '@mantine/core'
import Logo from '../atoms/Logo'

// assets
import cta1 from '../../assets/images/cta-playstore.png'
import cta2 from '../../assets/images/cta-appstore.png'
import socials1 from '../../assets/images/socials-fb.png'
import socials2 from '../../assets/images/socials-pint.png'
import socials3 from '../../assets/images/socials-ig.png'

const FooterContent = () => {
  return (
    <>
      <Container size="xl">
        <Grid grow gutter="md">
          <Grid.Col span={5}>
            <Logo disabled />
            <Text size="md" pt="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorum delectus impedit
              tempore in dolor minus distinctio saepe perferendis ducimus, officiis facere quisquam
              neque excepturi dolorem libero ea consectetur sapiente maxime explicabo quos
              voluptates numquam soluta! Aperiam perspiciatis numquam, quis est sapiente cumque
              eius.
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Anchor href="#" variant="text">
                Tentang Kami
              </Anchor>
              <Anchor href="#" variant="text">
                Blog
              </Anchor>
              <Anchor href="#" variant="text">
                Layanan
              </Anchor>
              <Anchor href="#" variant="text">
                Karir
              </Anchor>
              <Anchor href="#" variant="text">
                Pusat Media
              </Anchor>
            </Box>
          </Grid.Col>
          <Grid.Col span={5}>
            <Grid grow>
              <Grid.Col span={12}>
                <Text size="md" weight={700}>
                  Download
                </Text>
                <Group pt="xs" spacing="xs">
                  <Image src={cta1} width={160} />
                  <Image src={cta2} width={160} />
                </Group>
              </Grid.Col>
              <Grid.Col span={12}>
                <Text size="md" weight={700}>
                  Social Media
                </Text>
                <Group pt="xs" spacing="xs">
                  <Image src={socials1} width={50} />
                  <Image src={socials2} width={50} />
                  <Image src={socials3} width={50} />
                </Group>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={4} pt={0}>
            <Divider my="sm" />
            <Text size="md" sx={{ display: 'flex', justifyContent: 'center' }}>
              Copyright © 2002-2022 TTV. All Rights Reserved
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default FooterContent
