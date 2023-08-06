import { Chip, Typography } from "@components";
import { DRAWER_PADDING } from "@constants";
import { BaseDrawer, BaseDrawerProps } from "../_baseDrawer";
import { useOrderDrawerHelper } from "./order.hook";

export const OrderDrawer = (props: BaseDrawerProps) => {
  const { onOrderSelected } = useOrderDrawerHelper(props);

  const orders = [
    { name: "Lesser number", value: "Lesser Number" },
    { name: "Bigger Number", value: "Bigger Number" },
    { name: "A - Z", value: "A - Z" },
    { name: "Z - A", value: "Z - A" },
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
