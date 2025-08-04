import liverpoolbg from "../assets/liverpoolbg.jpg";
import newsImage1 from "../assets/news/1.jpg";
import newsImage2 from "../assets/news/2.jpg";

const newsData = [
  {
    id: "1",
    title: "NEWS DETAILS",
    bannerImage: liverpoolbg,
    image: newsImage1,
    subheading: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ],
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend, lectus sed porttitor aliquet, metus nunc ullamcorper ex, et euismod enim eros eget enim.",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere. Mauris lacus ex, congue quis augue at, bibendum porta elit. Etiam porttitor rutrum nisi, in posuere orci finibus vel. Sed augue augue, suscipit quis porta id, fringilla ac eros. Aliquam mauris nulla, congue quis leo a, aliquam porta lectus. Proin sed placerat est, vel tempor ex.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere. Mauris lacus ex, congue quis augue at, bibendum porta elit. Etiam porttitor rutrum nisi, in posuere orci finibus vel. Sed augue augue, suscipit quis porta id, fringilla ac eros. Aliquam mauris nulla, congue quis leo a, aliquam porta lectus. Proin sed placerat est, vel tempor ex.",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere. Mauris lacus ex, congue quis augue at, bibendum porta elit. Etiam porttitor rutrum nisi, in posuere orci finibus vel. Sed augue augue, suscipit quis porta id, fringilla ac eros.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat sem. Phasellus ac sem dolor. In sit amet auctor velit, vel placerat turpis. Vivamus sagittis nunc sit amet placerat posuere. Mauris lacus ex, congue quis augue at, bibendum porta elit. Etiam porttitor rutrum nisi, in posuere orci finibus vel. Sed augue augue, suscipit quis porta id, fringilla ac eros.",
    ]
  },
  {
    id: "2",
    title: "ANOTHER NEWS",
    bannerImage: liverpoolbg,
    image: newsImage2,
    subheading: "Dolor Sit Amet",
    description: "Another description here.",
    points: ["Point A", "Point B"],
    summary: "Some summary text...",
    paragraphs: ["First para...", "Second para..."]
  }
];

export default newsData;
