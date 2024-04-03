'use client';
import { MainLayout } from './MainLayout';
import Image from 'next/image';
import HeaderLogo from '~/main/logo.svg';
import CarLogo from '~/main/insurance.svg';
import { PageTitle, SquareButton } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '@/store/user/userSlice';
import { UserSelector } from '@/store/types';

export default function Home() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state: UserSelector) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated]);

  return (
    <MainLayout
      header={
        <div className='flex justify-between'>
          <Image onClick={() => dispatch(logout())} alt='headerLogo' src={HeaderLogo} />
          <p className='text-sm text-slate-400'>
            سلام {user?.firstName} {user?.lastName}
          </p>
        </div>
      }
    >
      <div className='flex flex-col items-center h-full'>
        <PageTitle className='py-5' title='سامانه مقایسه و خرید آنلاین بیمه' />
        <div className='flex flex-col h-full w-full'>
          <p className='text-xl'>انتخاب بیمه</p>
          <div className='flex justify-center gap-4 items-center h-1/2 pt-4'>
            <SquareButton topIcon={CarLogo} onClick={() => router.push('/select-insurance')} title='شخص ثالث' />
            <SquareButton topIcon={CarLogo} onClick={() => console.log('clicked')} disabled title='بدنه' />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
