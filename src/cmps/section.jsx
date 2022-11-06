import styled from 'styled-components'

export function Section() {
    return (
        <Wrap>
            <TopText>
                <h1>Model 3</h1>
                <p>Order Online for Touchless Delivery</p>
            </TopText>

            <CallToActionBtns>
                <LeftBtn>Custom Order</LeftBtn>
                <RightBtn>Existing Inventory</RightBtn>
            </CallToActionBtns>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: no-repeat center url('https://res.cloudinary.com/dalkffrhf/image/upload/v1667749795/Fiverr-Sprint-4/imgs/tesla-clone/model-3_ckt3za.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TopText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const CallToActionBtns = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
    margin-bottom: 5vh;
`