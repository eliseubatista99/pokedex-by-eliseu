import {
  AppLayout,
  CardChip,
  CardChipProps,
  DetailChip,
  DetailChipProps,
  PokedexBottomContent,
  Typography,
} from "@components";
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
  detailsChips: DetailChipProps[];
  freeContent?: React.ReactNode;
}

export const PokedexDetailsTemplate = (props: PokedexDetailsTemplateProps) => {
  const { illustration, title, id, chips, flavor, detailsChips } = props;

  console.log("ZAU", chips);

  const chipsJSX = chips.map((chip) => (
    <CardChip text={chip.text} image={chip.image} styles={chip.styles} />
  ));

  const detailsChipsJSX = detailsChips.map((chip) => (
    <DetailChip
      title={chip.title}
      content={chip.content}
      icon={chip.icon}
      styles={chip.styles}
    />
  ));

  return (
    <AppLayout
      header={{ type: "details", theme: "dark", background: "#00000000" }}
      bottomContent={<PokedexBottomContent />}
    >
      <Blocks.Background
        backgroundColor={illustration.backgroundColor}
        backgroundImage={illustration.backgroundImage}
        image={illustration.image}
      />
      <Typography
        styles={{
          fontSize: "24px",
          fontWeight: 500,
          textAlign: "left",
          margin: "0 auto 0 0",
        }}
      >
        {title}
      </Typography>
      <Typography
        styles={{
          fontSize: "12px",
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
          marginTop: "24px",
          flexDirection: "row",
          gap: "6px",
          justifyContent: "flex-start",
        }}
      >
        {chipsJSX}
      </div>
      <Typography
        styles={{
          fontSize: "10.5px",
          fontWeight: 500,
          textAlign: "left",
          margin: "0 auto 0 0",
          marginTop: "24px",
        }}
      >
        {flavor}
      </Typography>
      <div
        style={{
          width: "100%",
          marginTop: "24px",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        {detailsChipsJSX}
      </div>
    </AppLayout>
  );
};
