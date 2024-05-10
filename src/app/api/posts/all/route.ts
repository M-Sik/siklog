import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// get 메서드에 파라미터가 없어 자동 캐싱되므로 ssr로 만들기 위함
// export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI as string;

export async function GET(req: NextRequest) {
  let client: MongoClient | undefined;
  try {
    // if (!client) {
    //   client = new MongoClient(uri);
    //   await client.connect();
    // }
    client = new MongoClient(uri);
    await client.connect();
    console.log('-------커넥트 연결----------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const result = await collection.find().sort({ _id: -1 }).toArray();

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(result, {
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
      console.log('-------커넥트 종료----------');
    }
  }
}
