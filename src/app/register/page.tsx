import React from "react";
import { MainLayout } from "../MainLayout";
import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";

export default function Register() {
  return (
    <MainLayout>
      <PageTitle className="py-5" title="ثبت نام" />
      <div className="flex w-full flex-col gap-5">
        <Input type="text" placeholder="نام" />
        <Input type="text" placeholder="نام خانوادگی" />
        <Input type="text" placeholder="شماره موبایل" />
        <Input type="text" placeholder="رمز عبور" />
      </div>
    </MainLayout>
  );
}
