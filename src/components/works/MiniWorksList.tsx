import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import works from "~/data/works"
import { MiniWorksItem } from "."
import Slider, { Settings } from "react-slick";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// ______________________________________________________
// 型定義

type Props = {
  className?: string;
}

const selector = (state: RootState) => ({

})

const settings: Settings = {
  infinite: true,
  slidesToShow: 2,
  autoplay: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: false
}
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
    <div className={props.className}>
      <h2>Works</h2>
      <Slider {...settings}>
        {works.map(work => (
          <div key={"works_list_id_" + work.title} >
            <MiniWorksItem work={work} />
        </div>
        ))}
      </Slider>
      <div className="mini_works_list">
        <Link to="/works" onClick={clickDetail}><span >一覧<i className="fas fa-arrow-right" /></span></Link>
      </div>
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
text-align: center;
  & > div{
    padding: 1em 2em;
  }
  & > .works_page_title{
      color: #fff;
      background-color: #ff9a44;
    & > h2{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }    
  }
  .mini_works_list{
    text-align: right;
    color: #0196ff;
    &  span{

      &:hover{
      cursor: pointer;
    }}
  }

`

export default StyledComponent