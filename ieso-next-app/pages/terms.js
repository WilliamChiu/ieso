import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import terms from '../documents/terms'

const Container = styled.div`
  font-family: 'Spectral';
  font-weight: 300;
`

export default function Terms() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <Container>
          <div dangerouslySetInnerHTML={{__html: terms}}/>          
        </Container>
      </Content>
    </div>
  )
}