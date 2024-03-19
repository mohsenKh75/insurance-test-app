import Image from "next/image";
import { MainLayout } from "./MainLayout";
import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";

export default function Home() {
  return (
    <MainLayout header={<div>ثبت نام</div>}>
      <div className="flex flex-col items-center">
        <PageTitle className="py-5" title="ثبت نام" />
        <div className="flex flex-col gap-5 w-full">
          <Input type="text" placeholder="نام" />
          <Input type="text" placeholder="نام خانوادگی" />
          <Input type="text" placeholder="شماره موبایل" />
          <Input type="text" placeholder="رمز عبور" />
        </div>
      </div>
    </MainLayout>
  );
}
