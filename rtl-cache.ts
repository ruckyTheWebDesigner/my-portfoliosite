import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache } from "@mantine/core";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export default rtlCache;
