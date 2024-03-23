"use client";
import { MainLayout } from "./MainLayout";
import Image from "next/image";
import HeaderLogo from "~/main/logo.svg";
import CarLogo from "~/main/insurance.svg";
import { PageTitle, SquareButton } from "@/components/shared";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const isLoggedIn = searchParam.has("logged_in");
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, []);

  return (
    <MainLayout header={<Image alt="headerLogo" src={HeaderLogo} />}>
      <div className="flex flex-col items-center h-full">
        <PageTitle className="py-5" title="سامانه مقایسه و خرید آنلاین بیمه" />
        <div className="flex flex-col h-full w-full">
          <p className="text-xl">انتخاب بیمه</p>
          <div className="flex justify-center gap-4 items-center h-1/2 pt-4">
            <SquareButton
              topIcon={CarLogo}
              onClick={() => router.push("/select-insurance")}
            />
            <SquareButton
              topIcon={CarLogo}
              onClick={() => console.log("clicked")}
              disabled
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
