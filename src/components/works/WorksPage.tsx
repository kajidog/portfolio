import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { Typography } from "@material-ui/core"
import { WorksList } from "."
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
      <WorksList />
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
color: #000;
  & .works_page_title{
  }

`

export default StyledComponent