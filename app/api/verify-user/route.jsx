import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const { user } = await req.json();

  try {
    //check if user already exist
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
    if (userInfo?.length === 0) {
      //if user does not exist
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ Users });

      return NextResponse.json({ result: saveResult[0].Users });
    }
    return NextResponse.json({ result: userInfo });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
