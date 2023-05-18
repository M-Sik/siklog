import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

type Context = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  let client: MongoClient | undefined;
  try {
    client = new MongoClient(uri);
    await client.connect();
    // console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('posts');
    const prevPost = await collection
      .find({ _id: { $gt: new ObjectId(`${context.params.id}`) } })
      .sort({ _id: 1 })
      .limit(1)
      .toArray();

    const currentPost = await collection.findOne({ _id: new ObjectId(`${context.params.id}`) });

    const nextPost = await collection
      .find({ _id: { $lt: new ObjectId(`${context.params.id}`) } })
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    // console.log('게시글 상세정보 이전 게시글=> ', ...prevPost);
    // console.log('게시글 상세정보 현재 게시글=> ', currentPost);
    // console.log('게시글 상세화면 다음 게시글 정보 => ', { ...nextPost[0] });
    return NextResponse.json({
      prevPost: { ...prevPost[0] },
      currentPost: currentPost,
      nextPost: { ...nextPost[0] },
    });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
