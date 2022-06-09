import { Box, Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'

const Register = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  // console.log('Form values', form.values)
  return (
    <Box sx={{ minWidth: 300 }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          variant="filled"
          label="Full Name"
          placeholder="your name"
          {...form.getInputProps('name')}
          mb="md"
          sx={{ color: 'blue' }}
        />

        <TextInput
          required
          variant="filled"
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
          mb="md"
          sx={{ color: 'blue' }}
        />

        <TextInput
          required
          variant="filled"
          label="Password"
          type="password"
          placeholder="ssshh"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="md">
          <Button type="submit" fullWidth>
            Sign Up
          </Button>
        </Group>
      </form>
    </Box>
  )
}

export default Register
