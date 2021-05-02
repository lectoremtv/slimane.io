import { MainTitleProps } from "../../types/shared/MainTitle.types";
import { Divider, Typography } from "@material-ui/core";
import { useMainTitleStyles } from "../../styles/shared/mainTitle.styles";

export default function MainTitle({
  className,
  children,
}: MainTitleProps): JSX.Element {
  const classes = useMainTitleStyles();
  return (
    <div className={className}>
      <Typography variant="h4" component="h1" className={classes.title}>
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
}