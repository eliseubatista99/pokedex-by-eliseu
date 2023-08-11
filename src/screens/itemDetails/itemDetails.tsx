import { AppLayout, PokedexBottomContent } from "@components";
import { useItemDetailsHelper } from "./itemDetails.hook";

export const ItemDetails = () => {
  const { item } = useItemDetailsHelper();

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <div style={{ width: "100%", flexDirection: "column", gap: "16px" }}>
        {item?.name}
      </div>
    </AppLayout>
  );
};
