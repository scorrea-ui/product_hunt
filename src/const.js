import Daniel from "./images/avatars/daniel.jpg";
import Elliot from "./images/avatars/elliot.jpg";
import Helen from "./images/avatars/helen.jpg";
import Molly from "./images/avatars/molly.png";
import aqua from "./images/products/image-aqua.png";
import rose from "./images/products/image-rose.png";
import yellow from "./images/products/image-yellow.png";
import steel from "./images/products/image-steel.png";

function generateVoteCount() {
  return Math.floor(Math.random() * 50 + 15);
}

export const products = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Daniel}`,
    productImageUrl: `${aqua}`
  },
  {
    id: 2,
    title: "Supermajority: The Fantasy Congress League",
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Helen}`,
    productImageUrl: `${rose}`
  },
  {
    id: 3,
    title: "Tinfoild: Tailored tinfoil hats",
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Molly}`,
    productImageUrl: `${steel}`
  },
  {
    id: 4,
    title: "Haught or Naught",
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Elliot}`,
    productImageUrl: `${yellow}`
  }
];
