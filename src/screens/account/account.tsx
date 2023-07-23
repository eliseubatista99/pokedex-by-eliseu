import { AppLayout, PokedexBottomContent } from "@components";
import { Blocks } from "./blocks";

export const Account = () => {
  // const { onPointerDownEmail, onPointerDownApple, onPointerDownGoogle } = useAccountHelper();

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <Blocks.NameAndPhoto />
      <Blocks.AccountInfo />
      <Blocks.Logout />
    </AppLayout>
  );
};
