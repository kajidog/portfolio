import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { Typography, Button } from "@material-ui/core"
import { work } from "~/data/works"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Link from '~/components/others/Link';

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
      <div className="works_item_left">
        <img src={img} alt="" />
      </div>
      <div className="works_item_right">
        <h2>{title}</h2>
        <div>
          {simpleDescription && <p>{simpleDescription}</p>}
          <div className="works_item_site">
            {url && <a href={url} rel="noopener noreferrer" target="_blank">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className="sns-button sns-demo"
                startIcon={<i className="far fa-file-code" />}
              >
                Demo
          </Button>
            </a>}
            {gitUrl && <a href={gitUrl} rel="noopener noreferrer" target="_blank">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className="sns-button sns-github"
                startIcon={<i className="fab fa-github" />}
              >
                GitHub
          </Button>
            </a>}
          </div>

        </div>
      </div>
      <div className="works_item_more_info"><Link to={"/works/" + title}><ArrowForwardOutlinedIcon fontSize="small" /></Link></div>
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  background-color: #fff;
  position: relative;
  display:flex;
  flex-wrap: wrap;
  .works_item_left{
    width: 40%;
    min-width: 15em;

    flex: 1;
    & img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .works_item_right{
    padding: .5em 1em;
    padding-top: 1em;
    width: 60%;
    min-width: 15em;
    flex: 1;
    & > div{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    & h2{
      text-align:center;
    }
    & p{
      font-size: .85em;
    }
  }
  .works_item_more_info{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 2.5em;
    right: -.5em;
    top: -1em;
    background-color:#ff5a5a;
    color: #fff;
  }
  & .sns-github{
    color: #0b2534;
    border: 1px solid #0b2534c7;
    &:hover{
      border-color: 1px solid rgba(0, 102, 255, 0.05);
    }
  }
  & .sns-demo{
    color: #ff5a5a;
    border: 1px solid #ff35357a;
    &:hover{
      border-color: 1px solid rgba(0, 102, 255, 0.05);
    }
  }
  & .sns-button{
    margin: .5rem;
    text-transform: none;
  }
.works_item_site{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
  
`

export default StyledComponent