import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import works from "~/data/works"
import { WorksItem } from "."
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
    <div className={props.className}>
      <h2 className="works_page_title">作品一覧</h2>

      {works.map(work => (
        <div key={"works_list_id_" + work.title} >
          <WorksItem work={work} />
        </div>
      ))}
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
  & > h2{
    margin-top: 2em;
    text-align: center;
    color: #fff;
  }
  & > div{
    padding: 1em 2em;
  }
`

export default StyledComponent