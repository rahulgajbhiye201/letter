import { currentUser } from "@clerk/nextjs";

import LetterCard from "@/components/LetterCard";
import Share from "@/components/UI/Share";
import { fetchLetterData, fetchResponseData } from "@/lib/db/db-helper";

export default async function Letter({ params }: { params: { id: string } }) {
  const user = await currentUser();
  let userExist: boolean;
  user !== null ? (userExist = true) : (userExist = false);

  const letterID = params.id;

  const letterData = await fetchLetterData(letterID);
  const responseData = await fetchResponseData(letterID);

  function dataChecker(data: any) {
    if (data !== undefined) {
      return JSON.parse(data);
    } else return;
  }

  const letterDataJson = dataChecker(letterData);
  const responseDataJson = dataChecker(responseData);

  const { letter_id, valentines_letter, valentines_name, background_id } =
    letterDataJson || {};

  const { valentines_response } = responseDataJson || {};

  return userExist ? (
    <>
      <div className="flex flex-col flex-auto justify-center my-8 outline outline-8 rounded-lg outline-sky-200 w-10/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <LetterCard
          className="w-full"
          letter_id={letter_id}
          valentines_letter={valentines_letter}
          valentines_name={valentines_name}
          background_id={background_id}
          valentines_response={valentines_response}
        />
      </div>
      <Share />
    </>
  ) : (
    <LetterCard
      className="w-10/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
      letter_id={letter_id}
      valentines_letter={valentines_letter}
      valentines_name={valentines_name}
      background_id={background_id}
      valentines_response={valentines_response}
    />
  );
}
