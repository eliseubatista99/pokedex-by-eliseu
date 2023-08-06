import { CardChip, CustomImage, Typography } from "@components";
import { ItemHelper, TextHelper } from "@helpers";
import { ItemShort } from "@types";
import { CSSProperties } from "react";
import { useItemCardHelper } from "./itemCard.hook";

export interface ItemCardProps {
  item: ItemShort;
  onClick: (item: ItemShort) => void;
  containerProps?: CSSProperties;
}

export const ItemCard = (props: ItemCardProps) => {
  const { containerProps, onClick } = props;
  const { isHovered, onHover, onUnhover, itemData } = useItemCardHelper(props);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: `${itemData.itemColor}33`,
        borderRadius: "15px",
        cursor: "pointer",
        boxShadow: isHovered ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",

        ...containerProps,
      }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onUnhover()}
      onClick={() => onClick(props.item)}
    >
      <div
        style={{
          flexDirection: "column",
          flex: 1,
          padding: "12px 16px",
        }}
      >
        <Typography styles={{ fontSize: "11px", fontWeight: 600 }}>
          {itemData.itemId}
        </Typography>
        <Typography styles={{ fontSize: "15.75px", fontWeight: 600 }}>
          {itemData.itemName}
        </Typography>

        <div
          style={{
            flexDirection: "row",
            gap: "6px",
            width: "100%",
            marginTop: "auto",
          }}
        >
          <CardChip
            text={TextHelper.getPascalCase(
              ItemHelper.parseItemNames(itemData.itemCategory)
            )}
            styles={{
              background: `${ItemHelper.getItemColor(itemData.itemCategory)}`,
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "38%",
          background: itemData.itemColor,
          borderRadius: "15px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "102px",
        }}
      >
        {/* <CustomImage
          src={PokemonHelper.getPokemonTypeIcon(pokemonData.pokemonMainType)}
          alt={"Pokemon Type Icon"}
          imageStyles={{ objectFit: "contain" }}
          containerStyles={{
            width: "74%",
            height: "92%",
            position: "absolute",
            zIndex: 0,
            opacity: 0.4,
            filter: "grayscale(100%) brightness(200%)",
          }}
        /> */}
        {itemData.itemSprite && (
          <CustomImage
            src={itemData.itemSprite}
            alt={"Item Sprite"}
            imageStyles={{ objectFit: "contain" }}
            containerStyles={{
              width: "100%",
              height: "92%",
              zIndex: 1,
            }}
          />
        )}
      </div>
    </div>
  );
};
