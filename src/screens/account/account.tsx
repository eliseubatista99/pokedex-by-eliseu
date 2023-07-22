import { AppLayout, PokedexBottomContent } from "@components";
import { useAccountHelper } from "./account.hook";
import { Blocks } from "./blocks";

export const Account = () => {
  const { onClickEmail, onClickApple, onClickGoogle } = useAccountHelper();

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <Blocks.NameAndPhoto />
      <Blocks.AccountInfo />
      <Blocks.Logout />
    </AppLayout>
  );
};
