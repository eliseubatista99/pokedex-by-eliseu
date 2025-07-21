import { Chip } from "@components";
import { DRAWER_PADDING, Drawers, EItemCategory } from "@constants";
import {
  Drawer,
  Typography,
  type DrawerProps,
} from "@eliseubatista99/react-scaffold-core";
import { ItemHelper } from "@helpers";
import { useCategoryFilterDrawerHelper } from "./categoryFilter.hook";

export interface DrawerCategoryFilterProps extends Omit<DrawerProps, "id"> {
  onCategorySelected: (data: EItemCategory | undefined) => void;
}

export const DrawerCategoryFilter = (props: DrawerCategoryFilterProps) => {
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
    <Drawer
      {...props}
      id={Drawers.categoryFilter}
      onCloseDrawer={() => props.onCategorySelected(undefined)}
      // styles={{
      //   justifyContent: "flex-start",
      //   padding: `${DRAWER_PADDING}px 0`,
      //   ...props.styles,
      // }}
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
    </Drawer>
  );
};
