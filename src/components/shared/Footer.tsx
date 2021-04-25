import { useFooterStyles } from "../../styles/shared/footer.styles";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer(): JSX.Element {
  const classes = useFooterStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <div className={classes.contentContainer}>
        &#169; Slimane Akalië, 2021-{currentYear}. Open sourced on
        <a
          href={"https://github.com/slimaneakalie"}
          target={"_blank"}
          className={classes.githubLink}
        >
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}