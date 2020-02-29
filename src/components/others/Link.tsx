import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// ______________________________________________________
// 型定義

type Props = {
  className?: string;
  to: string
}

const selector = (state: RootState) => ({

})
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { } = useSelector(selector);
  const { } = props;

  const dispatch = useDispatch();
  const clickDetail = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scroll.scrollToTop({
      duration: 500
    });
  }
  return (
    <div className={props.className}><Link to={props.to} onClick={clickDetail}>{props.children}</Link></div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
`

export default StyledComponent