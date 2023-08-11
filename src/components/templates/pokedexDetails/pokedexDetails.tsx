import {
  AppLayout,
  CardChip,
  CardChipProps,
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
  const { illustration, title, id, chips } = props;

  console.log("ZAU", chips);

  const chipsJSX = chips.map((chip) => (
    <CardChip text={chip.text} image={chip.image} styles={chip.styles} />
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
      <div style={{ marginTop: "24px", flexDirection: "row", gap: "8px" }}>
        {chipsJSX}
      </div>
    </AppLayout>
  );
};
