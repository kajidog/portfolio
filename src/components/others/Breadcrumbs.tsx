import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// ______________________________________________________
// 型定義

type Props = {
  className?: string;
  breadScraps: string[]
}

const selector = (state: RootState) => ({})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { } = useSelector(selector);
  const { breadScraps } = props;

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={props.className}>
      <Breadcrumbs aria-label="breadcrumb" style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: ".9em" }} separator={<NavigateNextIcon fontSize="small" />}>
        {breadScraps.map(breadScrap => (
          <Link key={"breadScraps_" + breadScrap} to="/" onClick={handleClick} className={classes.link}>
            {breadScrap}
          </Link>
        ))}


      </Breadcrumbs>
    </div>
  );
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  color: #fff;
  position: absolute;
  top: .5em;
  left: .75em;
  

`

export default StyledComponent