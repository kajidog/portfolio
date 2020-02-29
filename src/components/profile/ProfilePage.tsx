import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import profile from "~/data/profile"
import { Typography, Divider } from "@material-ui/core"
import BackButton from "~/components/others/BackHomeButton"
// ______________________________________________________
// 型定義

type Props = {
  className?: string;
}

const selector = (state: RootState) => ({})
// ______________________________________________________
// コンポーネント

const VARIANT_CARD_INFO = "h6"
const CARD_HEADING_CLASS_NAME = "card_info_heading"
const CARD_CONTENT_CLASS_NAME = "card_info_content"

// スキル紹介ように文字連結
let connectLanguage: string = ""
profile.skills.forEach((skill, i) => connectLanguage += (i ? " / " : "") + skill)

const Component: React.FC<Props> = (props) => {
  const reduxState = useSelector(selector);
  const { } = reduxState;
  const { } = props;

  const dispatch = useDispatch();
  const profileInfo = (
    <div className="profile_info">
      <Divider />
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2" >名前</Typography>
      <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{profile.name}</Typography>
      <Divider />
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2" >年齢</Typography>
      <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{profile.age}歳</Typography>
      <Divider />
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2">出身</Typography>
      <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{profile.from}</Typography>
      <Divider />
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2">スキル</Typography>
      <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{connectLanguage}</Typography>
      {profile.hobby && <>
        <Divider />
        <Typography className={CARD_HEADING_CLASS_NAME} variant="body2">趣味</Typography>
        <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{profile.hobby}</Typography>
      </>}
      {profile.word && <>
        <Divider />
        <Typography className={CARD_HEADING_CLASS_NAME} variant="body2">一言</Typography>
        <Typography className={CARD_CONTENT_CLASS_NAME} variant={VARIANT_CARD_INFO} >{profile.word}</Typography>
      </>}
      <Divider />
    </div>
  )
  return (
    <div className={props.className}>
      <div className="profile_card">
        <div className="left_content">
          <img src={profile.img} alt={profile.name} />
        </div>
        <h2>プロフィール</h2>
        <div className="right_content">
          {profileInfo}
        </div>
      </div>
      <BackButton />
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
h2{
  text-align: center;
  margin-bottom: 0;
}
  color: #fff;
  width: 100%;
  padding: 1rem 0rem;
  .profile_card{
    margin: 1rem 0;
    .left_content, .right_content{
    }
    .left_content{
      position: relative;
      width: 60%;
      height: auto;
      margin: 1em auto;
      &:before {
        content: "";
        display: block;
        padding-top: 100%; /* 1:1 */
      }
      & > *{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  .profile_info{
    margin: auto;
    padding: 1rem;
    text-align: center;
    .${CARD_HEADING_CLASS_NAME}{
      padding-bottom: .5rem;
    }
    .${CARD_CONTENT_CLASS_NAME}{
      padding: 0 2rem;
    }
    & .MuiDivider-root{
      margin: .75rem 0;
      background-color: rgba(255, 255, 255, 0.39);
    }
  }

`

export default StyledComponent