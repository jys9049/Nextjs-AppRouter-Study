'use client';

import React from 'react';

import kakao from '/assets/kakao_login_large.png';
import Image from 'next/image';

const LoginPage = () => {
  const handleLogin = () => {
    window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/oauth/kakao&response_type=code
    `);
  };

  return (
    <button
      style={{ width: 'fit-content', border: 0, height: 40 }}
      onClick={handleLogin}
    >
      <Image src={kakao} alt='kakaoLogin' width={85} height={40} />
    </button>
  );
};

export default LoginPage;
