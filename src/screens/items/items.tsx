import { ItemCard, PokedexListTemplate } from "@components";
import { EItemCategory, EOrder } from "@constants";
import { DrawerCategoryFilter, OrderDrawer } from "@drawers";
import { ItemHelper } from "@helpers";
import { useItemsHelper } from "./items.hook";

export const Items = () => {
  const {
    itemsToDisplay,
    onItemClicked,
    updateItems,
    onIncreaseLimit,
    categoryFilter,
    order,
  } = useItemsHelper();

  const itemsJSX = itemsToDisplay.map((item) => (
    <ItemCard
      key={item.id}
      item={item}
      onClick={(item) => onItemClicked(item)}
    />
  ));

  return (
    <>
      <PokedexListTemplate
        items={itemsJSX}
        updateItems={updateItems}
        increaseLimit={onIncreaseLimit}
        input={{ placeholder: "Search item" }}
        options={{
          filter: {
            value: ItemHelper.parseItemNames(
              categoryFilter.selectedCategoryFilter
            ),
            noValueText: "All Categories",
            onClick: categoryFilter.openDrawer,
            styles: {
              background: ItemHelper.getItemColor(
                categoryFilter.selectedCategoryFilter
              ),
            },
          },
          order: {
            value: order.selectedOrder,
            noValueText: "Lesser Number",
            onClick: order.openDrawer,
          },
        }}
      />
      <DrawerCategoryFilter
        isVisible={categoryFilter.isVisible}
        onCloseDrawer={(data) =>
          categoryFilter.closeDrawer(data as EItemCategory)
        }
      />
      <OrderDrawer
        isVisible={order.isVisible}
        onCloseDrawer={(data) => order.closeDrawer(data as EOrder)}
      />
    </>
  );
};
