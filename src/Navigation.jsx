import { PanelHeader, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { Epic, View, useRouterPopout } from "@kokateam/router-vkminiapps";

import { PageConstructor } from "/src/components/__global";
import { DesktopNavigation, MobileNavigation } from "./components/__navigation";

import Home from "./components/api/base";
import Profile from "./components/bridge/base";
import MainStack from "./components/__modals/MainStack";
import Settings from "./components/settings/base";
import ApiPanel from "./components/api/base";
import BridgePanel from "./components/bridge/base";

const Navigation = ({ isDesktop }) => {
  const { popout } = useRouterPopout();

  return (
    <SplitLayout
      header={<PanelHeader separator={false} />}
      className={"jcc"}
      modal={<MainStack />}
      popout={popout}
    >
      {isDesktop ? <DesktopNavigation /> : null}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? "650px" : "100%"}
        maxWidth={isDesktop ? "650px" : "100%"}
      >
        <Epic tabbar={!isDesktop ? <MobileNavigation /> : null}>
          <View id="api">
            <PageConstructor id={"api-panel"} name={"VK API"}>
              <ApiPanel />
            </PageConstructor>
          </View>

          <View id="bridge">
            <PageConstructor id={"bridge-panel"} name={"VK Bridge"}>
              <BridgePanel />
            </PageConstructor>
          </View>

          <View id="settings">
            <PageConstructor id={"settings-panel"} name={"Настройки"}>
              <Settings />
            </PageConstructor>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default Navigation;
