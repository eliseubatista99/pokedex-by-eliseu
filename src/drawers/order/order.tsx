import { Chip } from "@components";
import { DRAWER_PADDING, Drawers, EOrder } from "@constants";
import {
  Drawer,
  Typography,
  type DrawerProps,
} from "@eliseubatista99/react-scaffold-core";
import { useOrderDrawerHelper } from "./order.hook";

export interface OrderDrawerProps extends Omit<DrawerProps, "id"> {
  onOrderSelected: (data: EOrder | undefined) => void;
}

export const OrderDrawer = (props: OrderDrawerProps) => {
  const { onOrderSelected } = useOrderDrawerHelper(props);

  const orders = [
    { name: EOrder.LesserNumber, value: EOrder.LesserNumber },
    { name: EOrder.BiggerNumber, value: EOrder.BiggerNumber },
    { name: EOrder.A_Z, value: EOrder.A_Z },
    { name: EOrder.Z_A, value: EOrder.Z_A },
  ];

  const chips = orders.map((order) => (
    <Chip
      key={order.name}
      text={order.name}
      onClick={() => onOrderSelected(order.value)}
    />
  ));

  return (
    <Drawer
      {...props}
      id={Drawers.order}
      onCloseDrawer={() => props.onOrderSelected(undefined)}
      // styles={{
      //   justifyContent: "flex-start",
      //   padding: `${DRAWER_PADDING}px 0`,
      //   ...props.styles,
      // }}
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
    </Drawer>
  );
};
