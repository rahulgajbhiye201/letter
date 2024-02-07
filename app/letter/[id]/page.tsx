import LetterCard from "@/components/LetterCard";
import { currentUser } from "@clerk/nextjs";
import { fetchLetterData, fetchResponseData } from "@/lib/db/db-helper";

export default async function Letter({ params }: { params: { id: string } }) {
  const user = await currentUser();

  let userExist: boolean;

  user !== null ? (userExist = true) : (userExist = false);

  const letterID = params.id;

  const letterData = await fetchLetterData(letterID);
  const responseData = await fetchResponseData(letterID);

  return (
    <LetterCard
      userExist={userExist}
      letterData={letterData}
      responseData={responseData}
    />
  );
}
