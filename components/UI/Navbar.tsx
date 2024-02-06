"use client";

import Link from "next/link";
import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { FetchUserID } from "@/lib/db/db-helper";
import { useUrl } from "@/context/UrlContext";

export default function NavLoader() {
  const { url, updateUrl } = useUrl();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await FetchUserID();
        const URL = result[1][0].id;
        updateUrl(URL);
      } catch (error) {
        console.log("Error fetching data:");
      }
    };
    fetchDataFromApi();
  }, []);

  return (
    <header className="p-4 flex lg:justify-center">
      <div className="bg-rose-50 flex items-center w-full justify-between rounded-lg shadow-md shadow-rose-200/30 px-4 py-2 lg:w-6/12">
        <ul className="flex gap-4">
          <Link href={"/"}>Letter Creator</Link>
          <Link href={`/letter/${url}`}>My Letter</Link>
        </ul>
        <div className="size-8">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
