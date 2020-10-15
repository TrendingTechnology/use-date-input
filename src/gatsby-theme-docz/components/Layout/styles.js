import { media } from "~theme/breakpoints";

export const main = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
};

export const wrapper = {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  py: 0,
  flex: 1,
  display: "grid",
  gridTemplateColumns: "250px minmax(0, 1fr)",
  minHeight: "100vh",
  [media.tablet]: {
    display: "block"
  }
};

export const fullPageWrapper = {
  ...wrapper,
  display: "block",
  gridTemplateColumns: undefined
};
