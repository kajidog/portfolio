import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, RootState } from "~/store";
import { Typography, List, ListItem, Avatar, ListItemAvatar, ListItemText, Divider } from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import profile from "~/data/profile"

// ______________________________________________________
// 型定義

type Props = {
  className?: string;
}

const selector = (state: RootState) => ({})
// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const reduxState = useSelector(selector);
  const { } = reduxState;
  const { } = props;

  const dispatch = useDispatch();

  return (
    <div className={props.className}>
      <div className="wor_page_title top_titles">
        <h2>Contact</h2>
      </div>
      <List>
        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="メール"
            secondary={profile.contacts.email}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="電話番号"
            secondary={profile.contacts.tel}
          />
        </ListItem>
        {profile.contacts.twitter && (
          <>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TwitterIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary="Twitter"
                secondary={
                  <a href={"https://twitter.com/" + profile.contacts.twitter} rel="noopener noreferrer" target="_blank">
                    {profile.contacts.twitter}
                  </a>
                }
              />

            </ListItem>
          </>
        )}
        {profile.contacts.github && (
          <>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GitHubIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="GitHub"
                secondary={
                  <a href={"https://github.com/" + profile.contacts.github} rel="noopener noreferrer" target="_blank">
                    {profile.contacts.github}
                  </a>
                }
              />
            </ListItem>
          </>
        )}
        {profile.contacts.facebook && (
          <>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FacebookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Facebook"
                secondary={profile.contacts.facebook}
              />
            </ListItem>
          </>
        )}
        <Divider />
      </List>
    </div>
  )
}

// ______________________________________________________
// スタイル

const StyledComponent = styled(Component)`
color: #fff;
padding:.2em;
& .top_titles{
  color: #fff;
  background-color: #b72f2f;
}

& >.MuiList-root{
    width: 90%;
    max-width: 42rem;
    margin: 0 auto;
  }
  .MuiTypography-colorTextSecondary{
    color: rgb(191, 191, 191);
  }
`

export default StyledComponent