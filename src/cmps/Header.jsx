import { useState } from 'react'
import styled from 'styled-components'

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const isOpen = () => {
    if (isMenuOpen === false) {
      setMenuOpen(true)
      console.log('if isMenuOpen', isMenuOpen)
    } else {
      setMenuOpen(false)
      console.log('else isMenuOpen', isMenuOpen)
    }
  }

  return (
    <Wrap>
      <a href="/">
        <HeaderLogo src="https://res.cloudinary.com/dalkffrhf/image/upload/v1668432851/Fiverr-Sprint-4/imgs/tesla-clone/logo_yhl1si.svg" />
      </a>
      <MiddleHeader>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </MiddleHeader>
      <Nav>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={isOpen}>
          Menu
        </a>
      </Nav>
      <Menu show={isMenuOpen}>
        <li>
          <a href="#" onClick={isOpen}>
            <img src="https://res.cloudinary.com/dalkffrhf/image/upload/v1668521752/Fiverr-Sprint-4/imgs/tesla-clone/close_godnjt.svg" />
          </a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
      </Menu>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-family: GothamBold;
  z-index: 10;
`

const HeaderLogo = styled.img`
  height: 24px;
  width: 120px;
  opacity: 0.8;
`

const MiddleHeader = styled.nav`
  display: none;
  @media (min-width: 800px) {
    display: flex;
  }
`

const Nav = styled.nav`
  a {
    background-color: #5959591b;
    border-radius: 4px;
  }
  a:not(:last-child) {
    display: none;
  }

  @media (min-width: 800px) {
    a {
      background: none;
    }
    a:not(:last-child) {
      display: flex;
    }
  }
`

const Menu = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  width: 300px;
  padding: 1rem;
  list-style: none;
  z-index: 20;

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.3s ease-in-out;

  li {
    a {
      display: flex;
      padding: 8px 16px;
      margin: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #4545451b;
        border-radius: 4px;
      }
      img {
        width: 24px;
      }
    }
  }

  li:first-child {
    align-self: flex-end;
    a {
      padding: 8px;
    }
  }
`
