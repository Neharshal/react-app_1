
import { Inter } from 'next/font/google'
import LandinPage from '@/components/landingPage'
import LayoutPage from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return <LandinPage />;
  
}

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>
}
