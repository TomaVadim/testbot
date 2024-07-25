import { Section, Cell, List, Tabbar, Input, IconContainer } from '@telegram-apps/telegram-ui';
import { useState, type FC } from 'react';

import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';


import './IndexPage.css';
import { InitDataPage } from '../InitDataPage/InitDataPage';
import { SnackbarPage } from '../SnackbarPage/SnackbarPage';

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Init Data',
    content: <InitDataPage />
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Chat',
    content: (
      <List
        style={{
          background: 'var(--tgui--secondary_bg_color)',
        }}
      >
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Main Settings"
        >
          <Cell before={<IconContainer><Icon28Chat /></IconContainer>}>
            Chat Settings
          </Cell>
          <Cell before={<IconContainer><Icon28Devices /></IconContainer>}>
            Data and Storage
          </Cell>
          <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
            Devices
          </Cell>
        </Section>
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Personal Information"
        >
          <Input
            header="First name"
            placeholder="21 y.o. designer from San Francisco"
          />
          <Input
            header="Last name"
            placeholder="21 y.o. designer from San Francisco"
          />
        </Section>
      </List>
    ),
  },
  {
    id: 2,
    Icon: Icon28Stats,
    text: 'Stats',
    content: <SnackbarPage/>,
  },
];


export const IndexPage: FC = () => {

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      {tabs[currentTab]?.content}

      <Tabbar>
        {tabs.map(({
          id,
          text,
          Icon
        }) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
            <Icon />
          </Tabbar.Item>)}
      </Tabbar>
    </>
  );
};



