import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, PokedexBottomContent } from "@components";
import { useAccountHelper } from "./account.hook";

export const Account = () => {
  const { onClickEmail, onClickApple, onClickGoogle } = useAccountHelper();

  return <AppLayout bottomContent={<PokedexBottomContent />}>OLA</AppLayout>;
};
