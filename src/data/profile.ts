export type profile = {
  name: string; // 名前
  age: number; // 年齢
  img: string; // 画像
  from: string; // 出身
  skills: string[]; // スキル
  word?: string; // 一言
  hobby?: string; // 趣味
  contacts: {
    email: string;
    tel: string;
    twitter?: string;
    facebook?: string;
    github?: string;
  };
};

const profileData: profile = {
  name: "梶原 健成",
  age: 21,
  img:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/01f.jpg?alt=media&token=e0f679ed-01be-4bcc-881d-45348a4cf82e",
  from: "神戸電子専門学校 ITスペシャリスト学科",
  skills: [
    "React.js",
    "Next.js",
    "Express",
    "Python",
    "JavaScript",
    "Node.js",
    "C言語",
    "Java",
    "VB.NET"
  ],
  word: "参考書を買うのが好きです。",
  contacts: {
    email: "kd1270632@st.kobedenshi.ac.jp",
    tel: "090-2807-0449",
    facebook: "090-2807-0449",
    twitter: "5mpjtj",
    github: "KajiwaraKensei"
  }
};

export default profileData;
