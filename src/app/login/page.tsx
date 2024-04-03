'use client';

import { MainLayout } from '../MainLayout';
import { postLoginData } from '@/apis';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, Input, Loading, PageTitle } from '@/components/shared';
import { useApi } from '@/hooks/useApi';

export default function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm();

  const router = useRouter();

  const { isPending, onRequest } = useApi({
    onSuccess: () => router.push('/register')
  });

  function submitHandler(data: any) {
    onRequest(() => postLoginData(data));
  }
  if (isPending) {
    return <Loading isFullScreen />;
  }
  return (
    <MainLayout>
      <PageTitle className='py-5' title='شماره تلفن را وارد کنید' />
      <div className='flex flex-col w-full gap-5'>
        <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit(submitHandler)}>
          <Input
            type='tel'
            id='phoneNumber'
            placeholder='شماره موبایل'
            error={errors?.phoneNumber?.message as string}
            register={register('phoneNumber', {
              required: true,
              validate: (value) => value && value.length === 11 && /^\d+$/.test(value),
              pattern: {
                value: /^\d+$/,
                message: 'فقط عدد وارد کنید!'
              }
            })}
          />

          <Button type='submit'>تایید</Button>
        </form>
      </div>
    </MainLayout>
  );
}
