import styled from 'styled-components'
import { Section } from '../cmps/section'

export function HomePage() {
  return (
    <Container>
      <Section
        title="Model 3"
        subheader="Order Online for Touchless Delivery"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1667749795/Fiverr-Sprint-4/imgs/tesla-clone/model-3_ckt3za.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        subheader="Order Online for Touchless Delivery"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1667749794/Fiverr-Sprint-4/imgs/tesla-clone/model-y_gsuyzi.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model S"
        subheader="Order Online for Touchless Delivery"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1667749793/Fiverr-Sprint-4/imgs/tesla-clone/model-s_sfkpmd.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        subheader="Order Online for Touchless Delivery"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1667749794/Fiverr-Sprint-4/imgs/tesla-clone/model-x_wvxzxd.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        subheader="Money-back guarantee"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1668430478/Fiverr-Sprint-4/imgs/tesla-clone/solar-panel_butyj4.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        title="Solar Roof"
        subheader="Produce Clean Energy From Roof"
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1668430483/Fiverr-Sprint-4/imgs/tesla-clone/solar-roof_zteuj0.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        title="Accessories"
        subheader=""
        imgUrl="https://res.cloudinary.com/dalkffrhf/image/upload/v1668430478/Fiverr-Sprint-4/imgs/tesla-clone/accessories_ooa0gz.jpg"
        leftBtn="Shop Now"
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`
