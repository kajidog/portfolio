import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";

// ______________________________________________________
// 型定義

type Props = {
  className?: string;
}

const selector = (state: RootState) => ({

})
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { } = useSelector(selector);
  const { } = props;

  const dispatch = useDispatch();

  return (
    <div className={props.className}> </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
`

export default StyledComponent