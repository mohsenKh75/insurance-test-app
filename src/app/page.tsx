import Image from "next/image";
import { MainLayout } from "./MainLayout";
import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";

export default function Home() {
  return (
    <MainLayout header={<div>صفحه اصلی</div>}>
      <div className="flex flex-col items-center">
        <PageTitle className="py-5" title="صفحه اصلی" />
      </div>
    </MainLayout>
  );
}
