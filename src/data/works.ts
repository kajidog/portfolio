export interface work {
  title: string; // アプリ名
  img: string; // サイトイメージ
  url: string; // サイトURL
  gitUrl: string; // gitHubのURL
  description?: string; // 内容説明
  simpleDescription?: string;
  appealPoint?: string; // アピールポイント
  developmentEnvironment: string[]; // 開発環境
  developmentLanguage: string[]; // 開発言語
  languageDescription?: { language: string; description: string }[];
}

// 作品情報
const workData: work[] = [
  {
    title: "ごちナビ",
    url: "https://whtite-bd4f.web.app/",
    gitUrl: "https://github.com/KajiwaraKensei/gurunaviTask",
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/gotivabi.png?alt=media&token=5c4d49c9-4411-480b-8234-ce21fbabf204",
    description: "",
    simpleDescription: ` 位置情報を取得し周辺の飲食店の情報を表示します。`,
    developmentEnvironment: ["firebase", "React.js", "mac", "vsCode"],
    developmentLanguage: ["React.js", "html", "css", "javascript"]
  },
  {
    title: "Makers",
    url:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    gitUrl:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/makers1.png?alt=media&token=65be2fc0-7e68-4f44-adb8-9c6ee02f1fd4",
    description: "",
    simpleDescription: ` 文章をテンプレート化し、質問に答えるだけで文章が作成できます。`,
    developmentEnvironment: ["firebase", "React.js", "mac", "vsCode"],
    developmentLanguage: ["React.js", "html", "css"]
  },
  {
    title: "ポートフォリオテンプレート",
    url: "https://portfolio-kaji.firebaseapp.com",
    gitUrl: "https://github.com/KajiwaraKensei/portfolio",
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/portfolio_sample.png?alt=media&token=91536710-319c-4990-ba28-54016747b1f6",
    description: "",
    simpleDescription: ` 変数をいじるだけで自分のポートフォリオサイトが作れます。このサイトはそのテンプレートで作成しました。\n また変数はまとめて定義しているため、メンテナンスも容易です。`,
    developmentEnvironment: ["firebase", "mac", "vsCode"],
    developmentLanguage: ["React.js", "TypeScript", "HTML", "StyledComponent"]
  }
];

export default workData;
