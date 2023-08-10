import { AppLayout, PokedexBottomContent, Typography } from "@components";
import { Blocks } from "./blocks";

export interface PokedexDetailsTemplateProps {
  illustration: {
    backgroundColor?: string;
    backgroundImage?: string;
    image?: string;
  };
  title: string;
  id: string;
}

export const PokedexDetailsTemplate = (props: PokedexDetailsTemplateProps) => {
  const { illustration, title, id } = props;

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
      <Typography styles={{ fontSize: "32px", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography styles={{ fontSize: "16px", fontWeight: 500 }}>
        {id}
      </Typography>
    </AppLayout>
  );
};
