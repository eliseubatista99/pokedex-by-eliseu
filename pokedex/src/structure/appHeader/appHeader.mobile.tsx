import { CustomImage } from "@components";
import { AppHeaderProps } from ".";

export const AppHeaderMobile = ({
  withBack,
  onClickBack,
  title,
}: AppHeaderProps) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      {withBack && <CustomImage src={""} alt={"Back arrow"} />}
    </div>
  );
};
