import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { work } from "~/data/works"
import Breadcrumbs from "~/components/others/Breadcrumbs"
import { Typography } from "@material-ui/core"
import { WindowType } from "~/store/window"
import works from "~/data/works"

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
  const { title, simpleDescription } = work;
  const dispatch = useDispatch();

  return (
    <div className={props.className}>
      <div className="header_texts">
        <Breadcrumbs breadScraps={["home", "works", title]} />
        <div>
          <div className="textRevealContainer">
            <div className="textReveal rotateY">
              <div>
                <div>
                  {title}
                </div>
              </div>
              <Typography variant="body1" className="header_texts_sub_title">{simpleDescription}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ______________________________________________________
// スタイル

interface StyledComponent {
  type: WindowType;
}
const StyledComponent = styled(Component) <StyledComponent>`
transition:0.2s all ease-out;
background-image: url("${props => props.work.img}");
background-size:cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
color: #fff;
box-shadow:0px 0px 13px 6px rgba(0,0,0,0.4)inset;
&::before{
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
}

& .header_texts{
  transition:0.2s all ease-out;
  position: absolute;
  padding: .5em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;


  & .header_texts_title{

  }

  & .header_texts_sub_title{
    
  }

  .textRevealContainer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.8em; /*adjust according to your need*/
    text-align: center; /*in case you write multiline text*/
    font-weight: bold;
    text-shadow: 5px 3px 7px #0c0c0c;
  }
  
  .textReveal {
    overflow: hidden;
    animation: textRevealAnim 2s ease forwards;
  }
  
  .textReveal > div {
    padding: 8px 16px;
    transform: translateX(100%);
    border-left: 2px solid red;
    overflow: hidden;
    animation: textRevealAnim 2s ease forwards,
      borderOpacityAnim 2s ease forwards;
  }
  
  .textReveal > div > div {
    transform: translateX(-100%);
    animation: textRevealAnim 2s ease forwards;
  }
  
  @keyframes textRevealAnim {
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes borderOpacityAnim {
    50% {
      border-left: 2px solid red;
    }
    100% {
      border-left: 2px solid transparent;
    }
  }
  
  .textReveal.x50 {
    transform: translateX(-50%);
  }
  
  .textReveal.x100 {
    transform: translateX(-100%);
  }
  
  .textReveal.zoom > div {
    transform: translateX(100%) scale(0.5, 0.5);
  }
  
  .textReveal.rotateY {
    perspective: 100px; /*adjust according to your need*/
  }
  
  .textReveal.rotateY > div {
    transform: translateX(100%) rotateY(20deg);
  }
  
  .textReveal.color > div > div {
    background: linear-gradient(
      to right,
      red,
      red 45%,
      orange 45%,
      orange 55%,
      red 55%,
      red
    );
    -webkit-text-fill-color: transparent;
    background-size: 300%;
    animation: textRevealAnim 2s ease forwards,
      bgShiftAnim 3s ease forwards;
  }
  
  @keyframes bgShiftAnim {
    to {
      background-position: 100%;
    }
  }
  

}

${props => {
    switch (props.type) {
      case "pc":
        return `
        width: calc(100% - 7em);
        height: 100%;
        & .header_texts{
          ${pc_header_texts}
        }

      `;
      case "tablet":
        return `
        width: calc(100% - 4em);
        height: 100%;
        .textRevealContainer > div {
          font-size: .9em;
        }
        .header_texts{
          ${pc_header_texts}
        }
      `;
      case "phone":
        return `
        width: 100%; 
        height: 50vh ;
        .textRevealContainer > div {
          font-size: 0.8em;
        }
        & .header_texts{
          ${phone_header_texts}
        }
      `;
    }
  }}


`;

const phone_header_texts = `
display: flex;
align-items: center;
justify-content: center;
&  .header_texts_title{
  text-shadow: -1px -2px 3px #808080;
}

& .header_texts_sub_title{
}
`;

const pc_header_texts = `

&  .header_texts_title{
  position: absolute;
  bottom: 1em;
  left: 1em;
  text-shadow: -1px -2px 3px #808080;
}

& .header_texts_sub_title{
}
`;

export default StyledComponent