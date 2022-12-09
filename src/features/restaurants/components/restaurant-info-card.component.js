import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { SvgXml } from "react-native-svg";
import { spacing } from "../../../infrastructure/theme/spacing";
import Spacer from "../../../component/Spacer";
import TextBlock from "../../../component/TextBlock";
import {
  OpenIndicator,
  RestaurantCard,
  CardCover,
  Section,
  Rating,
  Content,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    photos = [
      "https://modernrestaurantmanagement.com/assets/media/2021/03/Getty_629200476-1200x655.jpg",
    ],
    address = "100 random road",
    isOpenNow = true,
    rating = 3.2,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <CardCover source={{ uri: photos[0] }} />
        <Content>
          <TextBlock level="heading">{name}</TextBlock>
          <TextBlock level="caption">{address}</TextBlock>
          <Spacer size={spacing.xs} />
          <Section>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml xml={star} width={20} height={20} key={index} />
              ))}
            </Rating>
            <OpenIndicator>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </OpenIndicator>
          </Section>
        </Content>
      </RestaurantCard>
    </>
  );
};
