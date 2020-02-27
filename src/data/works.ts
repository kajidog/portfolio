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
const workData: work[] = [
  {
    title: "ごちナビ",
    url:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    gitUrl:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    img:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "",
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
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "",
    developmentEnvironment: ["firebase", "React.js", "mac", "vsCode"],
    developmentLanguage: ["React.js", "html", "css"]
  },
  {
    title: "ポートフォリオサイト",
    url: "https://portfolio-kaji.firebaseapp.com",
    gitUrl:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    img:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "",
    simpleDescription: `このポートフォリオサイトです。作品情報や自己紹介などのデータは変数でまとめて定義しているため、メンテナンスが容易です。\nまたデータを変数で定義し、表示しているということで、他の人に配布して使用することもできます。`,
    developmentEnvironment: ["firebase", "mac", "vsCode"],
    developmentLanguage: ["React.js", "TypeScript", "HTML", "StyledComponent"]
  }
];

export default workData;
