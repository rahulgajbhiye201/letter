"use server";

import { db } from "@/lib/db/db";
import { revalidatePath } from "next/cache";
import mySchema from "@/schema/schema";
import { redirect } from "next/navigation";
import { FetchUserID } from "@/lib/db/db-helper";

export async function LetterCreator(prevState: any, formData: FormData) {
  const fetchData = await FetchUserID();
  const [userEmail, currentLoggedUser] = fetchData;

  const letterData = mySchema.parse({
    name: formData.get("name"),
    letter: formData.get("letter"),
    background: formData.get("background"),
  });

  if (currentLoggedUser.length === 1) {
    await db.letter.updateMany({
      where: {
        letter_id: currentLoggedUser[0].id!,
      },
      data: {
        valentines_name: letterData.name,
        valentines_letter: letterData.letter,
        background_id: letterData.background,
      },
    });
  } else {
    await db.user.create({
      data: {
        email: userEmail!,
        letters: {
          create: {
            valentines_name: letterData.name,
            valentines_letter: letterData.letter,
            background_id: letterData.background,
          },
        },
      },
    });
  }

  const USER = await db.user.findMany({
    where: {
      email: userEmail!,
    },
  });
  const URL = `${USER[0].id}`;

  revalidatePath("/");
  redirect(`/letter/${URL}`);
}
