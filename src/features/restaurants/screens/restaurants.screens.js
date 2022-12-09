import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { spacing } from "../../../infrastructure/theme/spacing";
import Spacer from "../../../component/Spacer";
import { FlatList } from "react-native";
import { SafeArea, SearchContainer, SearchBar } from "./restaurants.styles";

const ItemSeparator = () => <Spacer size={spacing.md} />;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBar placeholder="Search restaurants" />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: spacing.md }}
      ItemSeparatorComponent={ItemSeparator}
    />
  </SafeArea>
);
