export interface work {
  title: string; // アプリ名
  img: string; // サイトイメージ
  url: string; // サイトURL
  gitUrl: string; // gitHubのURL
  description?: string; // 内容説明
  simpleDescription?: string; //簡易説明
  functions?: string[]; // 機能
  differentiations?: string[]; // 差別化
  developmentEnvironments: string[]; // 開発環境
  developmentLanguages: { name: string; reasons: string[] }[]; // 開発言語
  images?: { url: string; description: string }[]; // 画像
}

// 作品情報
const works: work[] = [
  {
    title: "Makers",
    url: "https://ms-0201-sc.herokuapp.com",
    gitUrl: "https://github.com/KajiwaraKensei/Makers",
    img:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/makers1.png?alt=media&token=65be2fc0-7e68-4f44-adb8-9c6ee02f1fd4",
    description:
      "文章をテンプレート化し、質問に答えるだけで文章ができます。\n作った文章はボタンを押すだけでLINEやTwitterが起動し投稿することができます。",
    functions: [
      "レスポンシブ対応",
      "ログイン機能",
      "直接SNSが起動",
      "他人のテンプレートの検索"
    ],
    simpleDescription: ` 文章をテンプレート化し、質問に答えるだけで文章が作成できます。`,
    developmentEnvironments: ["mac", "VSCode"],
    developmentLanguages: [
      {
        name: "Next.js",
        reasons: [
          "フロントエンドに使用",
          "SSRができるということで",
          "前にReactを勉強していて興味があったため"
        ]
      },
      {
        name: "Express",
        reasons: ["バックエンドに使用", "簡単にAPIサーバーを作れるため"]
      },
      {
        name: "TypeScript",
        reasons: [
          "フロントエンドとバックエンド両方に使用",
          "変数を型で管理し、実行前になるべくエラーを出したかったため"
        ]
      },
      {
        name: "MondoDB",
        reasons: ["Expressのデファクトスタンダードということで"]
      },
      {
        name: "DockerCompose",
        reasons: [
          "開発環境の構築をしやすくするため",
          "コマンド一つでフロントエンド・バックエンド・データベース全てのサーバーを起動できるようにするため"
        ]
      }
    ]
  }
];

export default works;
