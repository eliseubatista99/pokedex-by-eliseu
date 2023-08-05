import React from "react";
import { PokedexListTemplateProps } from "./pokedexList";
import { useScroll } from "./pokedexListScroll.hook";

export const usePokedexListTemplateHelper = (
  props: PokedexListTemplateProps
) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const searchInputValue = React.useRef<string>("");
  const screenInitialized = React.useRef<boolean>(false);
  const limit = React.useRef<number>(20);
  const [itemsToDisplay, setItemsToDisplay] = React.useState<any[]>([]);

  const handleSearch = React.useCallback(() => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  }, []);

  const updateItems = React.useCallback(
    async (value?: string) => {
      const newItems = await props.updateItems(value || "", limit.current);

      if (!value && limit.current < newItems.length) {
        limit.current = newItems.length;
      }
      setItemsToDisplay(newItems || []);
    },
    [limit, props]
  );

  const handleOnSubmitForm = React.useCallback(
    async (event: any) => {
      // Preventing the page from reloading
      event?.preventDefault();

      const formValue = event.currentTarget.elements[0].value as string;

      searchInputValue.current = formValue;

      updateItems(formValue);
    },
    [updateItems]
  );

  useScroll({
    scrollElem: scrollRef,
    listElem: listRef,
    onTouchBottom: () => {
      if (!searchInputValue.current) {
        limit.current += 20;
        updateItems();
      }
    },
  });

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      updateItems();
    }
  }, [props, updateItems]);

  return {
    list: {
      scrollRef,
      listRef,
      items: itemsToDisplay,
    },
    searchInput: {
      formRef,
      onSubmitForm: handleOnSubmitForm,
      onChange: handleSearch,
    },
  };
};
