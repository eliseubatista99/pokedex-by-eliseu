import {
  AppLayout,
  Chip,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
} from "@components";
import { APP_PADDING_LEFT, APP_PADDING_RIGHT } from "@constants";
import { CSSProperties } from "react";
import { usePokedexListTemplateHelper } from "./pokedexList.hook";

interface PokedexListOption {
  value?: string;
  noValueText?: string;
  onClick?: () => void;
  styles?: CSSProperties;
}

export interface PokedexListTemplateProps {
  items: JSX.Element[];
  updateItems: (value?: string) => Promise<void>;
  increaseLimit: (count: number) => void;
  input?: {
    placeholder: string;
  };
  options?: {
    filter?: PokedexListOption;
    order?: PokedexListOption;
  };
}

export const PokedexListTemplate = (props: PokedexListTemplateProps) => {
  const { items, input, options } = props;
  const { list, searchInput } = usePokedexListTemplateHelper(props);

  return (
    <>
      <AppLayout
        styles={{ height: "100%" }}
        screen={{
          styles: { height: "100%", overflow: "hidden", paddingBottom: 0 },
        }}
        bottomContent={<PokedexBottomContent />}
      >
        {input && (
          <form
            style={{
              width: "100%",
              display: "flex",
              height: "75px",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1.5px solid var(--escala-de-cinza-50, #F2F2F2)",
            }}
            ref={searchInput.formRef}
            onSubmit={searchInput.onSubmitForm}
          >
            <CustomInputField
              name="input-search"
              placeHolder={input.placeholder}
              rightIcon={
                <Iconography.Search
                  width={"20px"}
                  height={"20px"}
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
              gridTemplateColumns: "repeat(2, calc(50% - 8px))",
              gridGap: "16px",
              padding: "10px 0 16px 0",
            }}
          >
            {options.filter?.onClick && (
              <Chip
                text={
                  options.filter?.value || options.filter?.noValueText || ""
                }
                rightIcon={
                  <Iconography.NavLeft
                    stroke="#ffffff"
                    width="18px"
                    containerProps={{ transform: "rotateZ(-90deg)" }}
                  />
                }
                onClick={options.filter?.onClick}
                styles={{ ...options.filter.styles }}
              />
            )}

            {options.order?.onClick && (
              <Chip
                text={options.order?.value || options.order?.noValueText || ""}
                rightIcon={
                  <Iconography.NavLeft
                    stroke="#ffffff"
                    width="24px"
                    containerProps={{ transform: "rotateZ(-90deg)" }}
                  />
                }
                onClick={options.order?.onClick}
                styles={{ ...options.order.styles }}
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
          <div ref={list.listRef} style={{ width: "100%", gap: "16px" }}>
            {items}
          </div>
        </div>
      </AppLayout>
    </>
  );
};
