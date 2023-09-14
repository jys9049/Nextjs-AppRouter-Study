'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const AuthPage = () => {
  const params = useSearchParams().get('code');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data }: AxiosResponse = await axios.get(
        `/api/kakao?code=${params}`,
      );

      if (data) {
        const { accessToken, refreshToken } = data;
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);
        router.push('/');
      }
    })();
  }, []);

  return <></>;
};

export default AuthPage;
