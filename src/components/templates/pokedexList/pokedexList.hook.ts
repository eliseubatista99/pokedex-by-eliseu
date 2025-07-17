import React from "react";
import { type PokedexListTemplateProps } from "./pokedexList";
import { useScroll } from "./pokedexListScroll.hook";

export const usePokedexListTemplateHelper = (
  props: PokedexListTemplateProps
) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const searchInputValue = React.useRef<string>("");
  const screenInitialized = React.useRef<boolean>(false);
  const updatingItems = React.useRef<boolean>(false);

  const cachedFilter = React.useRef<string | null>(null);
  const cachedOrder = React.useRef<string | null>(null);

  const handleSearch = React.useCallback(() => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  }, []);

  const updateItems = React.useCallback(
    async (value?: string) => {
      if (updatingItems.current) {
        return;
      }

      updatingItems.current = true;
      await props.updateItems(value || "");

      updatingItems.current = false;
    },
    [props]
  );

  const handleOnSubmitForm = React.useCallback(
    async (event: any) => {
      // Preventing the page from reloading
      event?.preventDefault();

      const formValue = event.currentTarget.elements[0].value as string;

      searchInputValue.current = formValue;

      updateItems(formValue);

      scrollRef.current?.scrollTo({
        top: 0,
        behavior: "auto",
      });
    },
    [updateItems]
  );

  useScroll({
    scrollElem: scrollRef,
    listElem: listRef,
    onTouchBottom: () => {
      if (
        !searchInputValue.current &&
        !updatingItems.current &&
        !props.options?.filter?.value
      ) {
        props.increaseLimit(20);

        updateItems();
      }
    },
  });

  React.useEffect(() => {
    if (
      props.options?.filter?.value !== cachedFilter.current ||
      props.options?.order?.value !== cachedOrder.current
    ) {
      cachedFilter.current = props.options?.filter?.value || null;
      cachedOrder.current = props.options?.order?.value || null;

      updateItems(searchInputValue.current);
    }
  }, [props.options?.filter, props.options?.order, updateItems]);

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
    },
    searchInput: {
      formRef,
      onSubmitForm: handleOnSubmitForm,
      onChange: handleSearch,
    },
  };
};
