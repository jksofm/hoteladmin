import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Dashboard",
  title: "Hotel Administration",
  description: "A front-end web-app dashboard for Hotel Administration. ",
  images: [
    {
      url: "https://drive.google.com/file/d/18DIjQjXnbMHaBDwI5m3J8I3oClzv1Fd4/view?usp=drive_link",
    },
  ],
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: defaultOpenGraph.images,
  };
};
