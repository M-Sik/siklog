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
    const result = await collection.findOne({ _id: new ObjectId(`${context.params.id}`) });

    // console.log('faeffa2131231231 => ', result);
    return NextResponse.json(result);
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
