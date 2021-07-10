import {style} from "@vanilla-extract/css";

export const styles = {
  headerContainer: style({
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 12,
    height: 56,
  }),
  logo: style({
    width: 40,
    height: 40,
  }),
  title: style({
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    marginLeft: 8,
  })
}
