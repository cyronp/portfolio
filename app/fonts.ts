import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMonoNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMonoNerdFont-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});