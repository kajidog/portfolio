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
  };
};

const profileData: profile = {
  name: "梶原 健成",
  age: 20,
  img:
    "https://firebasestorage.googleapis.com/v0/b/whtite-bd4f.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%200002-01-15%20%E5%8D%88%E5%BE%8C1.07.04.png?alt=media&token=74759bba-5843-41d2-a53a-74cf1858d3d8",
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
    twitter: "5mpjtj"
  }
};

export default profileData;
