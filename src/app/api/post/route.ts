import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

export async function POST(req: NextRequest) {
  const { title, subtitle, createdAt, pw, category, markdown, keywords } = await req.json();

  if (title === '' || subtitle === '' || createdAt === '' || pw === '' || markdown === '')
    return new Response('Bad Request', { status: 400 });

  let client: MongoClient | undefined;

  try {
    client = new MongoClient(uri);
    await client.connect();
    // console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const result = await collection.insertOne({
      title,
      subtitle,
      createdAt,
      pw,
      category,
      markdown,
      keywords,
    });

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
