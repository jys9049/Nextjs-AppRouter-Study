'use client';

import axiosInterceptorInstance from '@/utils/axios/axios';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await axiosInterceptorInstance.post('/test', {
        name: 'strin2g',
        email: 'test',
      });
    })();
  }, []);

  return <main></main>;
}
