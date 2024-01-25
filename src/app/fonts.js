import {
  Inter,
  Kaushan_Script,
  Montserrat,
  Poppins,
  Noto_Serif,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const kaushan_script = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Kaushan-Script",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  // weight: "",
  variable: "--font-montserrat",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--Noto_Serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
