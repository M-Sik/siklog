import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest } from 'next';

const uri = process.env.MONGODB_URI as string;

export async function GET(req: NextRequest) {
  const adminId = req.nextUrl.searchParams.get('id');
  const adminPw = req.nextUrl.searchParams.get('pw');

  let client: MongoClient | undefined;
  try {
    client = new MongoClient(uri);
    await client.connect();
    // console.log('------- DB 커텍트 시작 -------');
    const db = client.db(process.env.MONGODB_NAME);
    const collection = db.collection('users');
    const adminData = await collection.findOne({ name: adminId });
    const result = adminData?.password === adminPw ? true : false;

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
