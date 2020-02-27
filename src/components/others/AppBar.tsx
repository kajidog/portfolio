import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { actionCreator, RootState } from "~/store";
import { WindowType } from "~/store/window"
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactlessIcon from '@material-ui/icons/Contactless';
import { Typography } from "@material-ui/core"
// ______________________________________________________
// 型定義

type Props = {
  className?: string;
  callback: () => void;
}

const selector = (state: RootState) => ({
  type: state.window.type
})
const homeList: { name: string, icon: JSX.Element, path: string }[] = [
  { name: "home", icon: <HomeIcon />, path: "/" },
  { name: "works", icon: <WorkIcon />, path: "/works" },
  { name: "profile", icon: <AccountBoxIcon />, path: "/profile" },
  { name: "contact", icon: <ContactlessIcon />, path: "/contact" },
]
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { type } = useSelector(selector);
  const { callback } = props;

  const dispatch = useDispatch();
  return (
    <div className={props.className}>
      {homeList.map(item => (
        <Link onClick={callback} to={item.path} key={"app_bar_" + item.name}>
          <div className="app_bar_button">
            <div className="app_bar_icon">{item.icon}</div>
            <div className="app_bar_name"><Typography variant="body2">{item.name}</Typography></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

// ______________________________________________________
// スタイル

interface StyledComponent {
  type: WindowType;
}
const StyledComponent = styled(Component) <StyledComponent>`
  display: flex;
  width: 100%;
  color: #fff;
  background-color: #012;
  ${props => {
    switch (props.type) {
      case "pc":
        return `
          width: 7em;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
          height: 100%;
          & > * > div{
            ${button}
            & > .app_bar_icon{
              left: -30%;
            }
            & > .app_bar_name{
              opacity: 1;
              left: 15%;
            }
          }
        `
      case "tablet":
        return `
          width: 4em;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
          height: 100%;
          & > * > div{
            ${button}
          }
        `
      case "phone":
        return `
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          padding: .3em;

          ${phonButton}
        `
    }
  }}
`;
const button = `
  position: relative;
  height: 3em;
  text-align: center;
  line-height: 3.4em;
  margin: 1em 0;
  & .MuiTypography-body2{
    line-height: 3em;
  }
  & > .app_bar_icon, & > .app_bar_name{
    transition:0.2s all ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;  
  }
  & > .app_bar_icon{
    pointer-events: none;

    left: 0;
    right: 0;
  }
  & > .app_bar_name{
    left: 100%;
    opacity: 0;
    pointer-events: none;
  }
  &:hover{
    cursor: pointer;
    background-color: #445;
    border-left: 7.5px solid #a32;
    border-radius: .25em 0 0 .25em;
    & > .app_bar_icon{
      left: -120%;
      pointer-events: none;
    }
    & > .app_bar_name{
      opacity: 1;
      left: 0;
      width: 95%;
    } 
  }
`
const phonButton = `
  text-align: center;
`
export default StyledComponent