export default function manifest() {
  return {
    name: "RT — Product designer",
    short_name: "RT",
    display: "standalone",
    background_color: "#1f1f1f",
    theme_color: "#1f1f1f",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
