import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#71C7E5",
    },
    secondary: {
      main: "#F1CB30",
    },
  },
  typography: {
    fontFamily: ["grold_roundedsemilight"].join(","),
  },
});
