import bannerImage1 from "../assets/banner1.jpg";
import challengeImg1 from "../assets/challenge1.jpg";
import solutionImg1 from "../assets/solution1.jpg";

const casestudiesData = [
  {
    id: "1",
    title: "LOREM IPSUM",
    bannerImage: bannerImage1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit quam nec sapien laoreet egestas. Vestibulum eget mi lorem. Pellentesque eget sapien vel dui elementum scelerisque.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in diam quam. Maecenas eget est tempus, vehicula quam eget, pellentesque nisi. Aliquam finibus dui in orci mattis porttitor. Morbi venenatis efficitur justo, id tempus erat maximus quis. Nullam sodales elementum ante, vel viverra nisi accumsan nec. Donec volutpat lacinia ipsum id bibendum. Nam ac tempus arcu. Phasellus elementum efficitur ex, quis lacinia nibh lacinia in. Nunc ultrices est lobortis, commodo elit at, convallis purus. In molestie auctor rutrum.",
    challenges: {
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: challengeImg1,
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit nulla id hendrerit porttitor. Maecenas sed vehicula justo id fermentum laoreet id lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   solutions: {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image: solutionImg1,
  points: [
    {
      title: "Lorem Ipsum is simply dummy text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet augue tristique,"
    }
  ],
},

    outcome: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Fusce sed justo nisi. In id lacinia orci hendrerit.",
      "Lorem ipsum dolor sit amet, amet consectetur.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Fusce sed justo nisi. In id lacinia orci hendrerit.",
      "Lorem ipsum dolor sit amet, amet consectetur.",
      "Fusce sed justo nisi. In id lacinia orci hendrerit.",
      "Lorem ipsum dolor sit amet, amet consectetur.",
    ],
    exploreMore: [
      {
        id: "2",
        name: "Lorem Ipsum Title here",
        image: solutionImg1,
      },
      {
        id: "3",
        name: "Lorem Ipsum Title here",
        image: solutionImg1,
      },
      {
        id: "4",
        name: "Lorem Ipsum Title here",
        image: solutionImg1,
      },
    ],
  },
];

export default casestudiesData;
