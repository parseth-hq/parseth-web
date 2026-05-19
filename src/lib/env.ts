export const isLocalDev =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_ENABLE_UI_TEST === "true";
