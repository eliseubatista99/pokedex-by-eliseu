import {
  Bullet,
  DetailChipProps,
  PokedexDetailsTemplate,
  Typography,
} from "@components";
import { useItemDetailsHelper } from "./itemDetails.hook";

export const ItemDetails = () => {
  const { item, itemColor, itemId, itemName } = useItemDetailsHelper();

  const attributes = (item?.attributes || []).map(
    (attribute): DetailChipProps => ({
      content: attribute,
    })
  );

  const effects = (item?.effects || []).map((effect, index) => (
    <Bullet
      leftContent={
        <Typography styles={{ fontWeight: 700 }}>{`${index}.`}</Typography>
      }
      text={effect.short || ""}
      description={effect.full}
    />
  ));

  return (
    <PokedexDetailsTemplate
      illustration={{
        backgroundColor: itemColor,
        image: item?.sprite || "",
      }}
      title={itemName}
      id={itemId}
      chips={[
        {
          text: item?.category || "",
          styles: { background: `${itemColor}` },
        },
      ]}
      flavor={item?.flavor || ""}
      detailsChips={attributes}
      freeContent={
        <div style={{ width: "100%", flexDirection: "column" }}>
          <Typography
            styles={{ marginTop: "40px", fontSize: "18px", fontWeight: 700 }}
          >
            {"Effects"}
          </Typography>
          <div
            style={{
              width: "100%",
              gap: "16px",
              flexDirection: "column",
              marginTop: "16px",
            }}
          >
            {effects}
          </div>
        </div>
      }
    />
  );
};
