export type Channel = { name: string; initials: string; topic: string; blurb: string; url: string };

export const YT_CHANNELS: Channel[] = [
  {
    name: "Linus Tech Tips",
    initials: "LT",
    topic: "tech",
    blurb: "The channel that got me into how computers actually work under the hood.",
    url: "https://www.youtube.com/@LinusTechTips",
  },
  {
    name: "Veritasium",
    initials: "V",
    topic: "science",
    blurb: "Makes you feel smart, then quietly proves you were wrong about something you were sure of.",
    url: "https://www.youtube.com/@veritasium",
  },
  {
    name: "OverSimplified",
    initials: "OS",
    topic: "history",
    blurb: "History explained like a genuinely funny friend is retelling it — and it actually sticks.",
    url: "https://www.youtube.com/@OverSimplified",
  },
  {
    name: "Wendover Productions",
    initials: "WP",
    topic: "how things work",
    blurb: "For every \"wait, how does that actually work\" question about planes, shipping, and infrastructure.",
    url: "https://www.youtube.com/@Wendoverproductions",
  },
];
