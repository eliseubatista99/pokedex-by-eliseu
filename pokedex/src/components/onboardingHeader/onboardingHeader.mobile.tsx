import { Typography } from "@components";
import { Iconography } from "@iconography";
import { OnboardingHeaderProps } from ".";

export const OnboardingHeaderMobile = ({
  title,
  onClickBack,
}: OnboardingHeaderProps) => {
  const ONBOARDING_HEADER_HORIZONTAL_MARGIN = "16px";

  return (
    <div
      style={{
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: `45px ${ONBOARDING_HEADER_HORIZONTAL_MARGIN} 0 ${ONBOARDING_HEADER_HORIZONTAL_MARGIN}`,
      }}
    >
      <Iconography.NavLeft
        containerProps={{
          position: "absolute",
          left: `${ONBOARDING_HEADER_HORIZONTAL_MARGIN}`,
        }}
        onClick={onClickBack}
      />
      <Typography size="body_18" weight="semi-bold">
        {title}
      </Typography>
    </div>
  );
};
