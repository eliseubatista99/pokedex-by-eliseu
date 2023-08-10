import { AppLayout, PokedexBottomContent } from "@components";
import { Blocks } from "./blocks";

export interface PokedexDetailsTemplateProps {
  illustration: {
    backgroundColor?: string;
    backgroundImage?: string;
    image?: string;
  };
}

export const PokedexDetailsTemplate = (props: PokedexDetailsTemplateProps) => {
  const { illustration } = props;

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
    </AppLayout>
  );
};
