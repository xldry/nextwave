import * as S from './styles'

const Footer = () => {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aldry-vinicius-9276561b8/'
    },
    {
      id: 2,
      label: 'Github',
      url: 'https://github.com/xldry/'
    },
    {
      id: 3,
      label: 'last.fm',
      url: 'https://www.last.fm/user/jumiknight'
    },
    {
      id: 4,
      label: 'rateyourmusic',
      url: 'https://www.rateyourmusic.com/~jumi'
    },
  ];
  return (
    <>
      <S.FooterContainer>
        <div>
          <span>NextWave</span>
          <p>NEXTWAVE é meu blog pessoal. Aqui eu falo principalmente dos meus hobbies que envolvem música, games e outras coisas. Você pode me achar nas redes sociais abaixo:</p>
          <ul>
          {links.map(link => (
            <li key={link.id}>
              <a target="_blank" href={link.url}>{link.label}</a>
            </li>
          ))}
          </ul>
          <small>
            © 2023 NextWave
            <br />
            Todos os direitos reservados.
          </small>
        </div>
      </S.FooterContainer>
    </>
  )
}

export default Footer
