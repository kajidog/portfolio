import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import Profile from "~/components/profile/MiniProfile"
import Contact from "~/components/contact/MiniContact"
import Works from "~/components/works/MiniWorks"
// ______________________________________________________
// 型定義

type Props = {
  className?: string;
}

const selector = (state: RootState) => ({})
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const reduxState = useSelector(selector);
  const { } = reduxState;
  const { } = props;

  const dispatch = useDispatch();

  return (
    <div className={props.className}>
      <Profile />
      <Works />
      <Contact />
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  color: #fff;
  .top_titles{
    margin: auto;
    width: 100%;
    height: 4em;
    max-width: 10em;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    padding: 0;
    position: relative;
    & > h2{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    } 
}
`

export default StyledComponent