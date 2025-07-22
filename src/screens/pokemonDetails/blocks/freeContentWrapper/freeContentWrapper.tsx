import { Typography } from "@eliseubatista99/react-scaffold-core";

export interface FreeContentWrapperProps {
  title: string;
  children?: React.ReactNode;
  renderCondition?: boolean;
}

export const FreeContentWrapper = ({
  title,
  children,
  renderCondition,
}: FreeContentWrapperProps) => {
  return (
    <>
      {renderCondition && (
        <>
          <Typography
            styles={{
              fontSize: "18px",
              fontWeight: 700,
              margin: "24px auto 0 0",
            }}
          >
            {title}
          </Typography>
          {children}
        </>
      )}
    </>
  );
};
