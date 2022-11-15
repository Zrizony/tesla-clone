import styled from 'styled-components'

export function Header() {
  return (
    <Wrap>
      <a href="/">
        <HeaderLogo src="https://res.cloudinary.com/dalkffrhf/image/upload/v1668432851/Fiverr-Sprint-4/imgs/tesla-clone/logo_yhl1si.svg" />
      </a>
      <h1>Nav</h1>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`
const HeaderLogo = styled.img`
  height: 24px;
  width: 120px;
  opacity: 0.8;
`
