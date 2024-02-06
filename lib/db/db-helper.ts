"use server";

import { db } from "@/lib/db/db";
import { currentUser } from "@clerk/nextjs";

export async function FetchUserID() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0].emailAddress;

  const currentLoggedUser = await db.user.findMany({
    where: {
      email: userEmail,
    },
  });

  return [userEmail, currentLoggedUser];
}

export async function Response(letterId: string, data: string) {
  await db.response.create({
    data: {
      letter_id: letterId,
      valentines_response: data,
    },
  });
}

export const fetchLetterData = async (letterID: string) => {
  const data = await db.letter.findMany({
    where: { letter_id: letterID },
  });
  return JSON.stringify(data[0]);
};

export const fetchResponseData = async (letterID: string) => {
  const data = await db.response.findMany({
    where: { letter_id: letterID },
  });
  return JSON.stringify(data[0]);
};
