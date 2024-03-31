"use client";
import { MainLayout } from "../MainLayout";
import { useForm } from "react-hook-form";
import { farsiValidator, passwordValidator } from "@/utils";
import { useApi } from "@/hooks/useApi";
import { postRegisterData } from "@/apis/register";
import { useRouter } from "next/navigation";
import { Button, Input, Loading, PageTitle } from "@/components/shared";
import { useDispatch } from "react-redux";
import { login } from "@/store/user/userSlice";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const router = useRouter();

  const { onRequest, isPending } = useApi({
    onSuccess: () => router.push("/"),
  });

  function submitHandler(data: any) {
    onRequest(() => postRegisterData(data)).then((res) => {
      const userData = {
        firstName: res?.data?.data?.first_name,
        lastName: res?.data?.data?.first_name,
      };
      localStorage.setItem("user-info", JSON.stringify(userData));
      dispatch(login(userData));
    });
  }

  if (isPending) {
    return <Loading isFullScreen />;
  }
  return (
    <MainLayout>
      <PageTitle className="py-5" title="ثبت نام" />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex w-full flex-col items-center gap-5"
      >
        <Input
          id="firstName"
          error={errors.firstName?.message as string}
          register={register("firstName", {
            required: true,
            validate: farsiValidator,
          })}
          type="text"
          placeholder="نام"
        />
        <Input
          id="lastName"
          error={errors.lastName?.message as string}
          type="text"
          register={register("lastName", {
            required: true,
            validate: farsiValidator,
          })}
          placeholder="نام خانوادگی"
        />
        <Input
          id="password"
          error={errors.password?.message as string}
          register={register("password", {
            required: true,
            validate: passwordValidator,
          })}
          type="password"
          placeholder="رمز عبور"
        />
        <Button type="submit">ثبت نام</Button>
      </form>
    </MainLayout>
  );
}
