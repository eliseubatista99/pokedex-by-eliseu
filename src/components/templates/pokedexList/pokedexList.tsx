import {
  AppLayout,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
} from "@components";
import { APP_PADDING_LEFT, APP_PADDING_RIGHT } from "@constants";
import { usePokedexListTemplateHelper } from "./pokedexList.hook";

export interface PokedexListTemplateProps {
  mapListItems: (items: any[]) => JSX.Element[];
  updateItems: (value: string, limit: number) => Promise<any[]>;
  input?: {
    placeholder: string;
  };
  filters?: React.ReactNode;
}

export const PokedexListTemplate = (props: PokedexListTemplateProps) => {
  const { mapListItems, input, filters } = props;
  const { list, searchInput } = usePokedexListTemplateHelper(props);

  const listItems = mapListItems(list.items);

  return (
    <AppLayout
      styles={{ height: "100%" }}
      screen={{ styles: { height: "100%", overflow: "hidden" } }}
      bottomContent={<PokedexBottomContent />}
    >
      {input && (
        <form
          style={{
            width: "100%",
            display: "flex",
            height: "56.25px",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid var(--escala-de-cinza-50, #F2F2F2)",
          }}
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
              margin: "0 auto",
              maxWidth: "none",
            }}
          />
        </form>
      )}

      {filters}

      <div
        ref={list.scrollRef}
        style={{
          width: `calc(100% + ${APP_PADDING_LEFT + APP_PADDING_RIGHT}px`,
          flexDirection: "column",
          height: "fit-content",
          flex: 1,
          overflow: "auto",
          padding: `0 ${APP_PADDING_RIGHT}px 0 ${APP_PADDING_LEFT}px`,
        }}
      >
        <div ref={list.listRef} style={{ width: "100%", gap: "12px" }}>
          {" "}
          {listItems}
        </div>
      </div>
    </AppLayout>
  );
};
