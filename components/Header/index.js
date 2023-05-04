import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import * as S from './styles'

const MainHeader = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <Head>
      <title>NextWave</title>
      <meta
        name="description"
        content="Music and every day life struggles"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cinzel+Decorative&family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
      <S.Header>
        <S.HeaderContent>
          <Link className="logo" href="/">
            <h1>NextWave</h1>
          </Link>
          <S.Menu>
            <Link href="/" className={activeTab === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Blog</Link>
          </S.Menu>
        </S.HeaderContent>
      </S.Header>
    </>
  )
}

export default MainHeader
