import { Chip, Typography } from "@components";
import { DRAWER_PADDING, PokemonsOrder } from "@constants";
import { BaseDrawer, BaseDrawerProps } from "../_baseDrawer";
import { useOrderDrawerHelper } from "./order.hook";

export const OrderDrawer = (props: BaseDrawerProps) => {
  const { onOrderSelected } = useOrderDrawerHelper(props);

  const orders = [
    { name: PokemonsOrder.LesserNumber, value: PokemonsOrder.LesserNumber },
    { name: PokemonsOrder.BiggerNumber, value: PokemonsOrder.BiggerNumber },
    { name: PokemonsOrder.A_Z, value: PokemonsOrder.A_Z },
    { name: PokemonsOrder.Z_A, value: PokemonsOrder.Z_A },
  ];

  const chips = orders.map((order) => (
    <Chip
      key={order.name}
      text={order.name}
      onClick={() => onOrderSelected(order.value)}
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
        {"Select the order"}
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
