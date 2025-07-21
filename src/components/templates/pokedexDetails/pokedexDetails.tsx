import {
  AppLayout,
  CardChip,
  type CardChipProps,
  DetailChip,
  type DetailChipProps,
  PokedexBottomContent,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { Blocks } from "./blocks";

export interface PokedexDetailsTemplateProps {
  illustration: {
    backgroundColor?: string;
    backgroundImage?: string;
    image?: string;
  };
  title: string;
  id: string;
  chips: CardChipProps[];
  flavor: string;
  favorite?: {
    isFavorite?: boolean;
    onClickFavorite?: () => void;
  };
  detailsChips: DetailChipProps[];
  freeContent?: React.ReactNode;
}

export const PokedexDetailsTemplate = (props: PokedexDetailsTemplateProps) => {
  const {
    illustration,
    title,
    id,
    chips,
    flavor,
    detailsChips,
    freeContent,
    favorite,
  } = props;

  const chipsJSX = chips.map((chip) => (
    <CardChip
      key={chip.text}
      text={chip.text}
      image={chip.image}
      styles={{ zoom: 1.2, ...chip.styles }}
    />
  ));

  const detailsChipsJSX = detailsChips.map((chip) => (
    <DetailChip
      key={chip.title}
      title={chip.title}
      content={chip.content}
      icon={chip.icon}
      styles={chip.styles}
    />
  ));

  return (
    <AppLayout
      header={{
        type: "details",
        theme: "dark",
        background: "#00000000",
        favorite,
      }}
      bottomContent={<PokedexBottomContent />}
    >
      <Blocks.Background
        backgroundColor={illustration.backgroundColor}
        backgroundImage={illustration.backgroundImage}
        image={illustration.image}
      />
      <Typography
        styles={{
          fontSize: "32px",
          fontWeight: 500,
          textAlign: "left",
          margin: "0 auto 0 0",
        }}
      >
        {title}
      </Typography>
      <Typography
        styles={{
          fontSize: "16px",
          fontWeight: 500,
          textAlign: "left",
          margin: "0 auto 0 0",
        }}
      >
        {`Nº ${id}`}
      </Typography>
      <div
        style={{
          width: "100%",
          marginTop: "32px",
          flexDirection: "row",
          gap: "8px",
          justifyContent: "flex-start",
        }}
      >
        {chipsJSX}
      </div>
      <Typography
        styles={{
          fontSize: "14px",
          fontWeight: 500,
          textAlign: "left",
          margin: "0 auto 0 0",
          marginTop: "32px",
        }}
      >
        {flavor}
      </Typography>
      <div
        style={{
          display: "grid",
          width: "100%",
          marginTop: "32px",
          flexDirection: "row",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {detailsChipsJSX}
      </div>
      {freeContent}
    </AppLayout>
  );
};
