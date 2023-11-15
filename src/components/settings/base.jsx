import { useEffect, useState } from "react";
import {
  Avatar,
  Div,
  Footer,
  Group,
  Header,
  Link,
  PanelHeader,
  SimpleCell,
} from "@vkontakte/vkui";
import {
  Icon16LikeOutline,
  Icon20BugOutline,
  Icon28ArrowUpCircleOutline,
  Icon28BookOutline,
  Icon28FavoriteOutline,
  Icon28KeyOutline,
  Icon28MessagesOutline,
  Icon28ShareOutline,
  Icon28SmartphoneOutline,
} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

const Settings = () => {
  const [platform, setPlatform] = useState("android");

  useEffect(() => {
    let parsedUrl = new URL(window.location.href);
    if (parsedUrl.searchParams.get("vk_platform") === "desktop_web") {
      setPlatform("vkcom");
    }
  }, []);

  return (
    <>
      <Group header={<Header mode="secondary">Прочее</Header>}>
        <SimpleCell
          className="btn_settings"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28FavoriteOutline fill="#2B8FFE" />
            </Avatar>
          }
          onClick={() => bridge.send("VKWebAppAddToFavorites")}
        >
          Добавить в избранное
        </SimpleCell>

        {platform === "android" && (
          <SimpleCell
            className="btn_settings"
            before={
              <Avatar shadow={false} size={43}>
                <Icon28SmartphoneOutline fill="#2B8FFE" />
              </Avatar>
            }
            onClick={() => bridge.send("VKWebAppAddToHomeScreen")}
          >
            Добавить на главный экран
          </SimpleCell>
        )}

        <SimpleCell
          className="btn_settings"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28MessagesOutline fill="#2B8FFE" />
            </Avatar>
          }
          href="https://vk.me/kokateam"
          target="_blank"
        >
          Поддержка
        </SimpleCell>

        <SimpleCell
          className="btn_settings"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28ShareOutline fill="#2B8FFE" />
            </Avatar>
          }
          onClick={() =>
            bridge.send("VKWebAppShowWallPostBox", {
              message: "Тестирую методы VK API и VK Bridge в этом приложении👇",
              attachments: "https://vk.com/app7976662",
            })
          }
        >
          Поделиться приложением
        </SimpleCell>
      </Group>

      <Group header={<Header mode="secondary">Полезные ссылки</Header>}>
        <SimpleCell
          className="btn_settings"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28ArrowUpCircleOutline fill="#2B8FFE" />
            </Avatar>
          }
          href="https://dev.vk.com/reference"
          target="_blank"
        >
          Документация VK API
        </SimpleCell>
        <SimpleCell
          className="btn_settings"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28BookOutline fill="#2B8FFE" />
            </Avatar>
          }
          href="https://dev.vk.com/bridge/getting-started"
          target="_blank"
        >
          Документация VK Bridge
        </SimpleCell>
        <SimpleCell
          className="btn_settings pb10"
          before={
            <Avatar shadow={false} size={43}>
              <Icon28KeyOutline fill="#2B8FFE" />
            </Avatar>
          }
          href="https://dev.vk.com/api/access-token/getting-started"
          target="_blank"
        >
          Про ключи доступа
        </SimpleCell>
      </Group>

      <Footer>
        <Div className="podpis">
          От{" "}
          <Link href="https://vk.com/id566935204" target="_blank">
            @kuz_s
          </Link>{" "}
          и{" "}
          <Link href="https://vk.com/id510624674" target="_blank">
            @olejii
          </Link>
        </Div>
        <Div className="podpis">
          Сделано с <Icon16LikeOutline width={16} height={16} /> и{" "}
          <Icon20BugOutline width={16} height={16} />
        </Div>
      </Footer>
    </>
  );
};

export default Settings;
