import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import Profile from "~/components/profile/MiniProfile"
import Contact from "~/components/contact"
import Works from "~/components/works"
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
`

export default StyledComponent