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
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/S__7241734.jpg?alt=media&token=f6cc6201-1910-4405-af26-3ca626de3948",
    title: "WORKS",
    subtitle: "",
    breadScraps: ["home", "works"]
  },
  contact: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/S__7241733.jpg?alt=media&token=2262d2bc-c103-4bb3-a071-fa9f7d5d95a8",
    title: "CONTACT",
    subtitle: "",
    breadScraps: ["home", "contact"]
  },
  top: {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/01f.jpg?alt=media&token=e0f679ed-01be-4bcc-881d-45348a4cf82e",
    title: `${profile.name}'s portfolio`,
    subtitle: "",
    breadScraps: ["home"]
  }
};

export default headers;
