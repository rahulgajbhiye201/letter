import Link from "next/link";

export default function Letter() {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="bg-rose-50 rounded-lg flex justify-center items-center flex-col w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 p-4">
        <div className="text-center">
          You have no letter created, please create one.
        </div>
        <Link href={"/"} className="bg-rose-300 rounded-lg p-2 m-4">
          Letter Creator
        </Link>
      </div>
    </section>
  );
}
