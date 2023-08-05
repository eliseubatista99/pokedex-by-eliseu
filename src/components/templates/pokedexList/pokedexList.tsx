import {
  AppLayout,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
} from "@components";
import { usePokedexListTemplateHelper } from "./pokedexList.hook";

export interface PokedexListTemplateProps {
  mapListItems: (items: any[]) => JSX.Element[];
  updateItems: (value: string) => Promise<any[]>;
  input?: {
    placeholder: string;
  };
}

export const PokedexListTemplate = (props: PokedexListTemplateProps) => {
  const { mapListItems, input } = props;
  const { items, searchInput } = usePokedexListTemplateHelper(props);

  const listItems = mapListItems(items);

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      {input && (
        <form
          style={{ width: "100%" }}
          ref={searchInput.formRef}
          onSubmit={searchInput.onSubmitForm}
        >
          <CustomInputField
            name="input-search"
            placeHolder={input.placeholder}
            rightIcon={
              <Iconography.Search
                width={"15px"}
                height={"15px"}
                onClick={() => searchInput.onChange()}
              />
            }
            inputStyles={{ borderRadius: "30px" }}
            containerProps={{
              padding: "15px 0",
              margin: "0 auto",
              maxWidth: "none",
            }}
          />
        </form>
      )}

      <div style={{ width: "100%", flexDirection: "column", gap: "12px" }}>
        {listItems}
      </div>
    </AppLayout>
  );
};
