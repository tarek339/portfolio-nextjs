import purgecss from "@fullhuman/postcss-purgecss";

export const plugins = [
  purgecss({
    content: ["./**/*.html"],
  }),
];
