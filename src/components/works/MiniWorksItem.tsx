import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { Typography, Button } from "@material-ui/core"
import { work } from "~/data/works"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Link from "~/components/others/Link"
// ______________________________________________________
// 型定義

type Props = {
  className?: string;
  work: work;
}

const selector = (state: RootState) => ({

})
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { } = useSelector(selector);
  const { work } = props;
  const { title, simpleDescription, img, gitUrl, url } = work;
  const dispatch = useDispatch();

  return (
    <div className={props.className}>
      <Link to={"/works/" + title}>
        <div className="works_item_left">
          <img src={img} alt="" />
          <div className="works_mini_item_hover"><p>{title}</p></div>
        </div>
      </Link>
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  padding: 0 .3em;
  position: relative;
  display:flex;
  flex-direction: column;
  text-align: center;
  .works_item_left{
    position: relative;
    & img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    & .works_mini_item_hover{
      transition:0.2s all ease-out;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      opacity: 0;
      white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
      & *{
        margin: 0;
      }
      &:hover{
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  
`

export default StyledComponent