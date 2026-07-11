export type Niche = "tech" | "science" | "history" | "logistics";

export type Channel = {
  name: string;
  initials: string;
  topic: string;
  niche: Niche;
  accent: string;
  blurb: string;
  url: string;
};

export const YT_CHANNELS: Channel[] = [
  {
    name: "Linus Tech Tips",
    initials: "LTT",
    topic: "tech",
    niche: "tech",
    accent: "#B5482F",
    blurb: "The channel that got me into how computers actually work under the hood.",
    url: "https://www.youtube.com/@LinusTechTips",
  },
  {
    name: "Veritasium",
    initials: "Ve",
    topic: "science",
    niche: "science",
    accent: "#3B6E8F",
    blurb: "Makes you feel smart, then quietly proves you were wrong about something you were sure of.",
    url: "https://www.youtube.com/@veritasium",
  },
  {
    name: "OverSimplified",
    initials: "OS",
    topic: "history",
    niche: "history",
    accent: "#B0863A",
    blurb: "History told like a genuinely funny friend is retelling it — and it actually sticks.",
    url: "https://www.youtube.com/@OverSimplified",
  },
  {
    name: "Wendover Productions",
    initials: "WP",
    topic: "how things work",
    niche: "logistics",
    accent: "#3E7361",
    blurb: "For every \"wait, how does that actually work\" question about planes, shipping, and infrastructure.",
    url: "https://www.youtube.com/@Wendoverproductions",
  },
];
