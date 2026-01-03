"use server";

import { auth } from "@clerk/nextjs/server"; // Change this
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
  const { userId } = await auth(); // Use auth() instead

  if (!userId) throw new Error("User not authenticated");

  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
  );

  const token = streamClient.generateUserToken({ user_id: userId });

  return token;
};