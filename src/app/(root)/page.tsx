import LetterCreatorForm from "@/components/LetterCreatorForm";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center flex-auto w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 self-center">
      <LetterCreatorForm />
    </section>
  );
}
