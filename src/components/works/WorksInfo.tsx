import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { work } from "~/data/works"
import BackButton from "~/components/others/BackHomeButton"
import Link from "~/components/others/Link"
import { Typography, Button } from "@material-ui/core"
import Slider, { Settings } from "react-slick";

// ______________________________________________________
// 型定義

type Props = {
  className?: string;
  work: work;
}

const selector = (state: RootState) => ({

})

const settings: Settings = {
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: false
}

// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { } = useSelector(selector);
  const { work } = props;
  const { url, gitUrl, title, description, developmentEnvironments, developmentLanguages, functions, differentiations, images } = work
  const dispatch = useDispatch();

  const connectString = (array: string[], connectionCharacter: string) => {
    let connectString = "";
    array.forEach((item, i) => i !== 0 ? connectString += connectionCharacter + item : connectString += item);
    return connectString;
  }

  const mapDevelopmentLanguages = developmentLanguages.map(developmentLanguage => (
    <div key={"developmentLanguage_" + developmentLanguage.name}>
      <Typography variant="h6">{developmentLanguage.name}</Typography>
      <ul>
        {developmentLanguage.reasons.map(reason => (
          <li key={"reason_" + reason}>{reason}</li>
        ))}
      </ul>

    </div>
  ))
  const mapImages = images && <Slider {...settings}>
    {images.map(image => (
      <div key={"work_info_img_" + image.url} className="work_info_images">
        <img src={image.url} alt="" />
        <p>{image.description}</p>
      </div>
    ))}
  </Slider>

  return (
    <div className={props.className}>
      <div className="works_info_content">
        {mapImages}
        <div className="works_item_site">
          {url && <a href={url} rel="noopener noreferrer" target="_blank">
            <Button
              variant="outlined"
              color="primary"
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
              className="sns-button sns-github"
              startIcon={<i className="fab fa-github" />}
            >
              GitHub
          </Button>
          </a>}
        </div>

        <div>
          <h2>内容</h2>
          <p>{description}</p>
        </div>

        {functions && <div>
          <h2>機能</h2>
          <ul>
            {functions.map(func => (
              <li key={"info_" + func}>{func}</li>
            ))}
          </ul>
        </div>}

        {differentiations && <div>
          <h2>差別化</h2>
          <ul>
            {differentiations.map(differentiation => (
              <li key={"info_differentiation_" + differentiation}>{differentiation}</li>
            ))}
          </ul>
        </div>}


        <div>
          <h2>使用言語など</h2>
          {mapDevelopmentLanguages}
        </div>


        <div>
          <h2>開発環境</h2>
          <h2>{connectString(developmentEnvironments, " / ")}</h2>
        </div>
      </div>
      <div className="back_works_button"><Link to="/works"><i className="fas fa-arrow-left" /> 作品一覧</Link></div>
      <BackButton />
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  color: #fff;
  .work_info_images{
    position: relative;
    text-align: center;
    & img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  h2{
    margin: 1em 0 0;
    text-align: center;
  }
  .back_works_button{
    padding: .7em;
    color: #0196ff;
  }
  .works_info_content{
    padding: 40px;
    &  ul{
      margin: .5em 0 1.5em;
      padding: 0 0 0 2em;
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
    color: #2a7fff;
    border: 1px solid #1f83ffc7;
    &:hover{
      background-color: rgba(108, 130, 255, 0.17);
      border: 1px solid #798dff;
    }
  }
  & .sns-demo{
    color: #ff6363;
    border: 1px solid #ff5f5fb0;
    &:hover{
      background-color: rgba(108, 130, 255, 0.17);
      border: 1px solid #ff5f6fb0;
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