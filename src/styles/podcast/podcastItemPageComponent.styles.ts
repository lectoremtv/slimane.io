import { makeStyles } from "@material-ui/core/styles";

export const usePodcastItemPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageTitle: {
    filter: "blur(6px) brightness(80%)",
  },
  bodyContainer: {
    margin: "40px 0px",
    width: 1280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
      paddingLeft: 0,
    },
  },
  videoContainer: {
    margin: "35px 0px 45px 0px",
    width: "50%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  podcastEmbed: {
    margin: "35px 0px 45px 0px",
    width: "100%",
  },
  description: {
    fontSize: 24,
    lineHeight: 1.8,
    textAlign: "justify",
  },
  arabicText: {
    direction: "rtl",
  },
}));