import { AppLayout, PokedexBottomContent } from "@components";
import { useAccountHelper } from "./account.hook";
import { Blocks } from "./blocks";

export const Account = () => {
  const { currentUser } = useAccountHelper();
  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      {!currentUser && <Blocks.Guest />}
      {currentUser && (
        <>
          <Blocks.NameAndPhoto />
          <Blocks.AccountInfo />
          <Blocks.Logout />
        </>
      )}
    </AppLayout>
  );
};
