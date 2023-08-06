import { Chip, Typography } from "@components";
import { DRAWER_PADDING, EItemCategory, EPokemonsTypes } from "@constants";
import { ItemHelper } from "@helpers";
import { BaseDrawer, BaseDrawerProps } from "../_baseDrawer";
import { useCategoryFilterDrawerHelper } from "./categoryFilter.hook";

export const DrawerCategoryFilter = (props: BaseDrawerProps) => {
  const { onCategorySelected } = useCategoryFilterDrawerHelper(props);

  const categories = [
    {
      name: ItemHelper.parseItemNames(EItemCategory.AllCategories),
      value: EItemCategory.AllCategories,
    },
    {
      name: ItemHelper.parseItemNames(EItemCategory.StandardBall),
      value: EItemCategory.StandardBall,
    },
  ];

  const chips = categories.map((category) => (
    <Chip
      key={category.name || "All Categories"}
      text={category.name || "All Categories"}
      styles={{ background: ItemHelper.getItemColor(category.value) }}
      onClick={() => onCategorySelected(category.value)}
    />
  ));

  return (
    <BaseDrawer
      {...props}
      styles={{
        justifyContent: "flex-start",
        padding: `${DRAWER_PADDING}px 0`,
        ...props.styles,
      }}
    >
      <Typography
        styles={{
          color: "#4d4d4d",
          fontSize: "14px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "12px",
          minHeight: "24px",
        }}
      >
        {"Select the category"}
      </Typography>
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          padding: `0 ${DRAWER_PADDING}px`,
          gap: "12px",
          marginTop: "32px",
          overflow: "auto",
          justifyContent: "flex-start",
        }}
      >
        {chips}
      </div>
    </BaseDrawer>
  );
};
