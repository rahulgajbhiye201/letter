import LetterCreatorForm from "@/components/LetterCreatorForm";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center flex-auto w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 self-center">
      <LetterCreatorForm />
    </section>
  );
}
