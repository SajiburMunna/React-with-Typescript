import Card from '@/components/Card'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Card
        title='Good things come not so easliy'
        description='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ratione tempora totam nemo alias
      reprehenderit. Perferendis sit dolor, ad corporis labore expedita dolores exercitationem beatae inventore. Ipsam
      ducimus aliquid ab?'
      />
    </>
  )
}
