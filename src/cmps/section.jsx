import styled from 'styled-components'

export function Section({ title, subheader, imgUrl, leftBtn, rightBtn }) {
  return (
    <Wrap bgImg={imgUrl}>
      <TopText>
        <h1>{title}</h1>
        <p>{subheader}</p>
      </TopText>

      <CTA>
        <Btns>
          <LeftBtn>{leftBtn}</LeftBtn>
          {rightBtn && <RightBtn>{rightBtn}</RightBtn>}
        </Btns>

        <DownArrow src="https://res.cloudinary.com/dalkffrhf/image/upload/v1668425333/Fiverr-Sprint-4/imgs/tesla-clone/arrow-down_yomycv.svg" />
      </CTA>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat center ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: center;
`

const TopText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Btns = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5vh;
`

const LeftBtn = styled.button`
  color: white;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 264px;
  border-radius: 4px;
  opacity: 0.85;
  font-size: 16px;
  font-weight: 600;
`

const RightBtn = styled(LeftBtn)`
  background-color: white;
  color: rgba(23, 26, 32, 0.8);
`

const DownArrow = styled.img`
  width: 24px;
  height: 24px;
  margin: auto;
  overflow-x: hidden;
  animation: pointingDown infinite 1.5s;
`

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
