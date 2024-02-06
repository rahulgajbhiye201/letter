"use client";

import Share from "@/components/UI/Share";
import Card from "./Card";

type letterCardProps = {
  userExist: boolean;
  letterData: string;
  responseData: string;
};

const LetterCard: React.FC<letterCardProps> = ({
  userExist,
  letterData,
  responseData,
}) => {
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
    <section className="flex flex-col flex-auto items-center justify-center">
      <div className="flex flex-col flex-auto justify-center my-8 outline outline-8 rounded-lg outline-sky-200 w-10/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <Card
          className="w-full"
          letter_id={letter_id}
          valentines_letter={valentines_letter}
          valentines_name={valentines_name}
          background_id={background_id}
          valentines_response={valentines_response}
        />
      </div>
      <Share />
    </section>
  ) : (
    <Card
      className="w-10/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
      letter_id={letter_id}
      valentines_letter={valentines_letter}
      valentines_name={valentines_name}
      background_id={background_id}
      valentines_response={valentines_response}
    />
  );
};

export default LetterCard;
