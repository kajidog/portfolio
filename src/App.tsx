import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { RootState, actionCreator } from "~/store"
import { WindowType } from "~/store/window"
import EventListener from 'react-event-listener';
import { Route, Switch, useParams } from 'react-router-dom';
import TopPage from "~/components/TopPage"
import Works from "~/components/works"
import Profile from "~/components/profile"
import Contact from "~/components/contact"
import NotFound from "~/components/NotFound";
import AppBar from "~/components/others/AppBar"
import Header from "~/components/others/Header";
import WorksHeader from "~/components/works/WorksHeader"
import styled from "styled-components"
import works from "~/data/works";
import WorksInfo from "~/components/works/WorksInfo"
interface StyledComponent {
  type: WindowType;
  clicked: boolean
}
const selector = (state: RootState) => ({
  type: state.window.type
})
function App() {
  const { type } = useSelector(selector);
  const dispatch = useDispatch();

  const initFetch = React.useCallback(() => {
    dispatch(actionCreator.window.setWindowWidth(window.innerWidth))
  }, [dispatch]);
  React.useEffect(() => {
    initFetch();
  }, [initFetch])
  const handleResize = () => {
    dispatch(actionCreator.window.setWindowWidth(window.innerWidth))
  };
  const [clicked, setClicked] = React.useState(false)
  const clickAction = async () => {
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 1)
  }

  return (
    <StyledComponent type={type} clicked={clicked} >
      <EventListener target="window" onResize={handleResize} />
      <div className="left-content">
        <AppBar type={type} callback={clickAction} />
        <Switch>
          <Route exact path="/profile" render={() => <Header {...{ type, path: "profile" }} />} />
          {works.map(work => (
            <Route exact path={"/works/" + work.title} render={() => <WorksHeader work={work} type={type} />} key={"app_header_" + work.title} />
          ))}
          <Route exact path="/works" render={() => <Header {...{ type, path: "works" }} />} />
          <Route exact path="/contact" render={() => <Header {...{ type, path: "contact" }} />} />
          <Route exact path="/" render={() => <Header {...{ type, path: "top" }} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className="right-content">
        <Switch>
          <Route exact path="/profile" component={Profile} />
          {works.map(work => (
            <Route exact path={"/works/" + work.title} render={() => <WorksInfo work={work} />} key={"app_content_" + work.title} />
          ))}
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={TopPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </StyledComponent>
  );
}

const StyledComponent = styled.div<StyledComponent>`
  *{
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .MuiButton-root{
    text-transform: none;
  }
  height: 100vh;
  width: 100%;
  .header_texts{
  ${props => props.clicked && `display: none;`}
  } 
  .right-content{
    padding-bottom: 3em;
  }

  ${props => {
    switch (props.type) {
      case "pc":
      case "tablet":
        return `
          display: flex;

          & > .left-content,  & > .right-content{
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
          }
          & > .left-content{
            display: flex;
            width: 45%;
          }
          & > .right-content{
            width: 55%;
          }
        `
      case "phone":
        return `
        
        `
    }
  }}

`;


export default App;
