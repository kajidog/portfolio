import { paths } from "./path";
import profile from "./profile";

interface header {
  imgUrl: string; // ヘッダーの背景画像
  title: string; // タイトル
  subtitle?: string; // サブタイトル
  breadScraps: string[]; // パンくずリスト
}

type headersType = { [K in paths]: header };

const headers: headersType = {
  profile: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/S__7241735.jpg?alt=media&token=882634b4-f0ab-4485-b738-619dae221eaa",
    title: "PROFILE",
    subtitle: "",
    breadScraps: ["home", "profile"]
  },
  works: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/works.jpg?alt=media&token=ba51ea14-09cd-4c25-943d-6ec0339d1b47",
    title: "WORKS",
    subtitle: "",
    breadScraps: ["home", "works"]
  },
  contact: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/contact.jpg?alt=media&token=251c267c-cfdd-476b-b675-dbf8020fc7b9",
    title: "CONTACT",
    subtitle: "",
    breadScraps: ["home", "contact"]
  },
  top: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/top.jpg?alt=media&token=e24d60f7-5f00-4c00-b5dd-a3d6393b0465",
    title: `${profile.name}'s portfolio`,
    subtitle: "",
    breadScraps: ["home"]
  }
};

export default headers;
