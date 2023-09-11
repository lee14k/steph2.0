import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hpage from '../Components/Hpage'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hpage/>
   </div>
  )
}
