import type { NextPage } from 'next'
import { Header } from '../components'

const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <Header />
      <p>Hello Next.js</p>
    </div>
  )
}

export default Home
