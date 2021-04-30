import { makeStyles } from "@material-ui/core/styles";

export const useRecentArticlesStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  mainTitle: {
    fontWeight: "bold",
  },
  divider: {
    border: "2px solid #8145A7",
  },
}));
