import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function POST(req: NextRequest) {
  const { title, subtitle, createdAt, pw, category, markdown } = await req.json();

  if (
    title === '' ||
    subtitle === '' ||
    createdAt === '' ||
    pw === '' ||
    category === '' ||
    markdown === ''
  )
    return new Response('Bad Request', { status: 400 });

  try {
    await client.connect();
    console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const result = await collection.insertOne({
      title,
      subtitle,
      createdAt,
      pw,
      category,
      markdown,
    });

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  } finally {
    await client.close();
    console.log('------- DB 커텍트 종료 -------');
  }
}
