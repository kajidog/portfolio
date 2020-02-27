import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import profile from "~/data/profile"
import { Typography, Divider } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

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
  const clickDetail = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scroll.scrollToTop({
      duration: 500
    });
  }
  const profileInfo = (
    <div className="profile_info">
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2" >名前</Typography>
      <p className={CARD_CONTENT_CLASS_NAME} >{profile.name}</p>
      <Divider />
      <Typography className={CARD_HEADING_CLASS_NAME} variant="body2">出身</Typography>
      <p className={CARD_CONTENT_CLASS_NAME}  >{profile.from}</p>
      <Divider />
      <Link onClick={clickDetail} to="/profile">詳しく<i className="far fa-hand-point-right" /></Link>
    </div>
  )
  return (
    <div className={props.className}>
      <h2>プロフィール</h2>

      <div className="profile_card">
        <div className="left_content">
          <div>
            <img src={profile.img} alt={profile.name} />
          </div>
        </div>
        <div className="right_content">
          {profileInfo}
        </div>
      </div>

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
    display: flex;
    .left_content, .right_content{
      width: 50%;
    }
    .left_content{
      margin: auto;
      padding: 1em;
    }
    .left_content div{
      position: relative;
      height: auto;
      margin: auto;
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
    .right_content{
        align-self: center;
        padding: 0;
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
      margin: 0;
      font-size: .9em;
    }
    & .MuiDivider-root{
      margin: .75rem 0;
      background-color: rgba(255, 255, 255, 0.39);
    }
  }
  @media only screen and (max-width: 400px){
    .profile_card{
      display: block;
      .left_content, .right_content{
        width: 100%;
      }
      .left_content{
        padding: 2rem;
      }
    } 
  }
`

export default StyledComponent