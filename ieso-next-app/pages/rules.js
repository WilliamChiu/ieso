import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Rules() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
    </div>
  )
}