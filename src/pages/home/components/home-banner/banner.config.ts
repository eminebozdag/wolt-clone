interface BannerItem {
  color: string;
  image: string;
}

const BANNERS: BannerItem[] = [
  {
    color: "bg-c-light-yellow",
    image: "0_Sunday",
  },

  {
    color: "bg-c-green",
    image: "1_Monday",
  },
  {
    color: "bg-c-purple",
    image: "2_Tuesday",
  },
  {
    color: "bg-c-pink",
    image: "3_Wednesday",
  },
  {
    color: "bg-c-lavender",
    image: "4_Thursday",
  },
  {
    color: "bg-c-yellow",
    image: "5_Friday",
  },
  {
    color: "bg-c-lime",
    image: "6_Saturday",
  },
];

const getBannerOfToday = (): BannerItem => {
  const dayIndex = new Date().getDay();
  return BANNERS[dayIndex];
};

export { getBannerOfToday };
