import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// get 메서드에 파라미터가 없어 자동 캐싱되므로 ssr로 만들기 위함
export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET(req: NextRequest) {
  try {
    await client.connect();
    console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const result = await collection.find().toArray();

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  } finally {
    await client.close();
    console.log('------- DB 커텍트 종료 -------');
  }
}
