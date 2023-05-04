import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

import * as S from '../styles/pages/about.js'

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle} - Sobre</title>
      </Head>
      <S.AboutContainer>
        <S.AboutPicture>
          <Image
            src="/images/profile.jpeg"
            width={250}
            height={250}
          />
        </S.AboutPicture>
        <S.AboutDescription>
          <p>
            Olá! Obrigado pela visita.
            <br />
            <br />
            Meu nome é Aldry, tenho 25 anos e sou de Santos, São Paulo. Criei esse blog primariamente pra fins de estudo em desenvolvimento web, mas também vou escrever algumas coisas aqui e ali sobre alguns temas que eu gosto; principalmente música, games e tecnologia no geral.
            <br />
            <br />
            Falando um pouco mais sobre o blog, ele foi escrito em <a href="https://nextjs.org">Next.js</a>, um framework baseado em React utilizado pra criar aplicações utilizando SSR (Server Side Rendering), otimizado pra mecanismos de busca e extremamente rápido.
            <br />
            <br />
            A primeira versão do blog foi feito com <a href="https://frontity.org">Frontity</a>, um framework pra React que utilizava o WordPress, mas decidi abandoná-lo por conta de algumas particularidades, além de Next.js estar em mais demanda no mercado de front-end.
            <br />
            <br />
            Você pode me encontrar nas redes sociais listadas no meu rodapé ou mandar um email para <a href="mailto:aldryv@gmail.com">aldryv@gmail.com</a>
          </p>
        </S.AboutDescription>
      </S.AboutContainer>
    </Layout>
  );
}