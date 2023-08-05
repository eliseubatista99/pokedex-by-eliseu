import React from "react";
import { PokedexListTemplateProps } from "./pokedexList";

export const usePokedexListTemplateHelper = (
  props: PokedexListTemplateProps
) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const searchInputValue = React.useRef<string>("");
  const screenInitialized = React.useRef<boolean>(false);
  const [itemsToDisplay, setItemsToDisplay] = React.useState<any[]>([]);

  const handleSearch = React.useCallback(() => {
    console.log("ZAU SUB");

    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  }, []);

  const updateItems = React.useCallback(
    async (value?: string) => {
      const newItems = await props.updateItems(value || "");
      setItemsToDisplay(newItems || []);
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
    },
    [updateItems]
  );

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      updateItems();
    }
  }, [props, updateItems]);

  return {
    items: itemsToDisplay,
    searchInput: {
      formRef,
      onSubmitForm: handleOnSubmitForm,
      onChange: handleSearch,
    },
  };
};
