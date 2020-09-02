import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Post from '../components/Post'
import PostButton from '../components/PostButton'

const getPosts = async (req, page) => {
  return await fetch((req ? process.env.NEXTAUTH_URL : "") + '/api/getPosts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({page})
  })
}

function Home({posts}) {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <PostButton/>
        {posts.map(post => <Post post={post}/>)}
      </Content>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await getPosts(ctx.req, 0)
  const json = await res.json()
  return json
}

export default Home