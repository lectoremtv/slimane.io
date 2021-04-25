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
    border: "2px solid #23848C",
  },
  seeAllButton: {
    marginTop: "auto",
    fontSize: 18,
    cursor: "pointer",
    "@media (max-width: 1280px)": {
      marginTop: 40,
    },
  },
}));