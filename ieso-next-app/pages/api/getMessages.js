import { MongoClient } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;
const client = new MongoClient(uri);

export default async function getMessages(req, res) {
  const session = await getSession({ req })
  await client.connect()
  const database = client.db("posts")
  const mess = database.collection("messages")
  let messages;
  if (session && session?.user?.name) {
    messages = await mess.find({username: session.user.name}).toArray()
  }
  else {
    res.status(401)
    res.end()
    return
  }
  req.statusCode = 200
  res.json({messages})
}