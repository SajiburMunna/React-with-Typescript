import { Inter } from '@next/font/google'
import { useState } from 'react'

import Card from '@/components/Card'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState({
    title: 'Good things come not so easliy'
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, title: event.target.value })
  }
  return (
    <div className='flex flex-col space-y-6 justify-center items-center h-screen'>
      <Card
        title='Good things come not so easliy'
        description='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ratione tempora totam nemo alias
      reprehenderit. Perferendis sit dolor, ad corporis labore expedita dolores exercitationem beatae inventore. Ipsam
      ducimus aliquid ab?'
      />
      <Form state={state} onChange={handleChange} />
    </div>
  )
}
