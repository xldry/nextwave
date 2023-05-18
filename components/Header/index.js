import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from '../Searchbar';

import * as S from './styles'

const MainHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsDrawerOpen(false);
      }
    }
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>NextWave</title>
        <meta
          name="description"
          content="Music and every day life struggles"
        />
      </Head>
      <S.Header>
        <S.HeaderContent>
          <Link className="logo" href="/">
            <span>NextWave</span>
          </Link>
          <S.Menu>
            <Searchbar onSearch={handleSearch} />
            <Link href="/">Blog</Link>
            <Link href="/sobre">Sobre</Link>
          </S.Menu>
          <S.MobileMenuContainer>
            <S.MobileMenuButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <Image
                src="/images/drawer.png"
                width={24}
                height={13}
              />
            </S.MobileMenuButton>
            <S.MobileMenu className={isDrawerOpen ? 'drawer-menu open' : 'drawer-menu'}>
              <Link href="/">Blog</Link>
              <Link href="/sobre">Sobre</Link>
            </S.MobileMenu>
          </S.MobileMenuContainer>
        </S.HeaderContent>
      </S.Header>
    </>
  )
}

export default MainHeader
