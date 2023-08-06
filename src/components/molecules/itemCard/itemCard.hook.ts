import { ItemHelper, TextHelper } from "@helpers";
import React from "react";
import { ItemCardProps } from "./itemCard";

export const useItemCardHelper = ({ item }: ItemCardProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleOnCardHovered = () => {
    setIsHovered(true);
  };

  const handleOnCardUnhovered = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    onHover: handleOnCardHovered,
    onUnhover: handleOnCardUnhovered,
    itemData: {
      itemId: `#${ItemHelper.getItemId(item.id)}`,
      itemName: TextHelper.getPascalCase(item.name),
      itemSprite: item.sprite,
      itemCategory: item.category,
      itemColor: ItemHelper.getItemColor(item.category),
    },
  };
};