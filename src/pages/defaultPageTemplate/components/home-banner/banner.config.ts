interface BannerItem {
  color: string;
  image: string;
}

const BANNERS: BannerItem[] = [
  {
    color: "light-yellow",
    image: "0_Sunday",
  },

  {
    color: "green",
    image: "1_Monday",
  },
  {
    color: "purple",
    image: "2_Tuesday",
  },
  {
    color: "pink",
    image: "3_Wednesday",
  },
  {
    color: "lavender",
    image: "4_Thursday",
  },
  {
    color: "yellow",
    image: "5_Friday",
  },
  {
    color: "lime",
    image: "6_Saturday",
  },
];

const getBannerOfToday = (): BannerItem => {
  const dayIndex = new Date().getDay();
  return BANNERS[dayIndex];
};

export { getBannerOfToday };
