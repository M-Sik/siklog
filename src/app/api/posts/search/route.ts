import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// get 메서드에 파라미터가 없어 자동 캐싱되므로 ssr로 만들기 위함
export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI as string;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get('keyword');
  const pageNum = searchParams.get('pageNum') as string;
  const itemSize = 10;
  const skipSize = (parseInt(pageNum) - 1) * itemSize;

  let client: MongoClient | undefined;
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const posts = await collection
      .find({ title: { $regex: keyword, $options: 'i' } })
      .sort({ _id: -1 })
      .skip(skipSize)
      .limit(itemSize)
      .toArray();
    const totalCount = await collection.countDocuments();
    const totalPage = Math.ceil(totalCount / itemSize);

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(
      { posts, totalPage, curPage: parseInt(pageNum) },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      },
    );
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
      console.log('------- DB 커텍트 종료 -------');
    }
  }
}
