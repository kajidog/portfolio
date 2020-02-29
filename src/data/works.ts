export interface work {
  title: string; // アプリ名
  img: string; // サイトイメージ
  url: string; // サイトURL
  gitUrl: string; // gitHubのURL
  description?: string; // 内容説明
  simpleDescription?: string; //簡易説明
  appealPoints?: string[]; // アピールポイント
  developmentEnvironments: string[]; // 開発環境
  developmentLanguages: { name: string; reasons: string[] }[]; // 開発言語
  languageDescription?: { language: string; description: string }[];
  functions?: string[]; // 機能
  differentiations?: string[]; // 差別化
  images?: { url: string; description: string }[];
}

// 作品情報
export default <work[]>[
  {
    title: "ごちナビ",
    url: "https://whtite-bd4f.web.app/",
    gitUrl: "https://github.com/KajiwaraKensei/gurunaviTask",
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/gotivabi.png?alt=media&token=5c4d49c9-4411-480b-8234-ce21fbabf204",
    description: "",
    simpleDescription: ` 位置情報を取得し周辺の飲食店の情報を表示します。`,
    developmentEnvironments: ["firebase", "React.js", "mac", "vsCode"],
    developmentLanguages: []
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
    developmentEnvironments: ["firebase", "React.js", "mac", "vsCode"],
    developmentLanguages: []
  },
  {
    title: "ポートフォリオテンプレート",
    url: "https://portfolio-kaji.firebaseapp.com",
    functions: [
      "レスポンシブ対応",
      "ポートフォリオサイトの作成",
      "PWAによりホーム画面に追加しキャッシュの使用やオフラインでも表示可能"
    ],
    gitUrl: "https://github.com/KajiwaraKensei/portfolio",
    differentiations: ["React.jsを使用しサイトの管理が容易", ""],
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/portfolio_sample.png?alt=media&token=91536710-319c-4990-ba28-54016747b1f6",
    description:
      "このアプリケーションはサイトを簡単に作れるようにする目的で作りました。\nプロフィールや作品情報などの変更されやすいデータは変数でまとめて定義しており、修正や追加などのメンテナンスが容易です。",
    simpleDescription: ` 変数をいじるだけで自分のポートフォリオサイトが作れます。\nこのサイトはそのテンプレートで作成しました。`,
    developmentEnvironments: ["firebase", "mac", "vsCode"],
    developmentLanguages: [
      {
        name: "React.js",
        reasons: ["コンポーネント指向で書くので構成が複雑になりにくい", "SPA"]
      },
      {
        name: "TypeScript",
        reasons: [
          "変数に型情報を持たせられるので実行前に思わぬミスを発見できる",
          "ファイルパスを短縮できる"
        ]
      },
      {
        name: "StyledComponent",
        reasons: [
          "CSSの中にJSをかけるのでレスポンシブや属性によってスタイルを変えることが容易"
        ]
      },
      { name: "HTML/CSS", reasons: ["Webということで"] }
    ],
    images: [
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/portfolio_sample.png?alt=media&token=91536710-319c-4990-ba28-54016747b1f6",
        description: "トップページ"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/portfolio_sample.png?alt=media&token=91536710-319c-4990-ba28-54016747b1f6",
        description: "データの定義ファイル"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/portfolio_sample.png?alt=media&token=91536710-319c-4990-ba28-54016747b1f6",
        description: "レスポンシブ対応"
      }
    ]
  }
];
