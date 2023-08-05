import {
  AppLayout,
  Chip,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
} from "@components";
import { APP_PADDING_LEFT, APP_PADDING_RIGHT } from "@constants";
import { usePokedexListTemplateHelper } from "./pokedexList.hook";

export interface PokedexListTemplateProps {
  items: JSX.Element[];
  updateItems: (value?: string) => Promise<void>;
  increaseLimit: (count: number) => void;
  input?: {
    placeholder: string;
  };
  options?: {
    filter?: string;
    noFilterText?: string;
    onClickFilter?: () => void;
    order?: string;
    noOrderText?: string;
    onClickOrder?: () => void;
  };
}

export const PokedexListTemplate = (props: PokedexListTemplateProps) => {
  const { items, input, options } = props;
  const { list, searchInput } = usePokedexListTemplateHelper(props);

  return (
    <>
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
        {options && (
          <div
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "repeat(2, calc(50% - 6px))",
              gridGap: "12px",
              padding: "8px 0 12px 0",
            }}
          >
            {options.onClickFilter && (
              <Chip
                text={options.filter || options.noFilterText || ""}
                rightIcon={
                  <Iconography.NavLeft
                    stroke="#ffffff"
                    width="18px"
                    containerProps={{ transform: "rotateZ(-90deg)" }}
                  />
                }
                onClick={options.onClickFilter}
              />
            )}

            {options.onClickOrder && (
              <Chip
                text={options.order || options.noOrderText || ""}
                rightIcon={
                  <Iconography.NavLeft
                    stroke="#ffffff"
                    width="18px"
                    containerProps={{ transform: "rotateZ(-90deg)" }}
                  />
                }
                onClick={options.onClickOrder}
              />
            )}
          </div>
        )}

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
            {items}
          </div>
        </div>
      </AppLayout>
    </>
  );
};