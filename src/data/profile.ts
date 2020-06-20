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
  name: "村田 悠貴",
  age: 21,
  img:
    "https://karin-lifelog.com/wp-content/uploads/2019/07/20190116004304.jpg",
  from: "神戸電子専門学校 ITスペシャリスト学科",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "C",
    "C++"
  ],
  word: "",
  contacts: {
    email: "kd1270632@st.kobedenshi.ac.jp",
    tel: "090-2807-0449",
  }
};

export default profileData;
