import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { work } from "~/data/works"
import BackButton from "~/components/others/BackHomeButton"
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
  const { title, description, developmentEnvironments, developmentLanguages, functions } = work
  const dispatch = useDispatch();

  const connectString = (array: string[], connectionCharacter: string) => {
    let connectString = "";
    array.forEach((item, i) => i !== 0 ? connectString += connectionCharacter + item : connectString += item);
    return connectString;
  }

  const mapDevelopmentLanguages = developmentLanguages.map(developmentLanguage => (
    <div key={"developmentLanguage_" + developmentLanguage.name}>
      <h3>{developmentLanguage.name}</h3>

      <ul>
        {developmentLanguage.reasons.map(reason => (
          <li key={"reason_" + reason}>{reason}</li>
        ))}
      </ul>

    </div>
  ))


  return (
    <div className={props.className}>

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

      <div>
        <h2>使用言語・フレームワーク</h2>
        {mapDevelopmentLanguages}
      </div>


      <div>
        <h2>開発環境</h2>
        <p>{connectString(developmentEnvironments, " / ")}</p>
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
  *{
    margin: 0;
    padding: 0;
  }
  h2{
    margin: 0;
    text-align: center;
  }
  .back_works_button{
    padding: .2em;
    color: #0196ff;
  }
`

export default StyledComponent