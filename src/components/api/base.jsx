import {
  useRouterModal,
  useRouterPanel,
  useRouterPopout,
} from "@kokateam/router-vkminiapps";

import {
  Button,
  Card,
  Checkbox,
  Chip,
  CustomSelect,
  CustomSelectOption,
  Div,
  FormItem,
  Group,
  Header,
  Input,
  MiniInfoCell,
  Placeholder,
  ScreenSpinner,
  Textarea,
  Title,
} from "@vkontakte/vkui";
import toast from "react-hot-toast";
import { infoMethod } from "../../infoMethod";
import bridge from "@vkontakte/vk-bridge";
import "renderjson";
import { useEffect, useState } from "react";
import { Icon20HelpOutline } from "@vkontakte/icons";
import { ChipsSelect } from "@vkontakte/vkui/tokenized";

const ApiPanel = () => {
  const [, toPopout] = useRouterPopout();

  const [section, setSection] = useState(null);
  const [infoMethods, setInfoMethods] = useState([]);
  const [infMethod, setInfMethod] = useState(null);
  const [use_method, setUseMethod] = useState(false);
  const [disabledButtonMethod, setDisabledButtonMethod] = useState(false);
  const [textButtonMethod, setTextButtonMethod] = useState(true);
  const [AccessToken, setAccessToken] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [param, setParam] = useState(["", "", "", "", "", "", "", ""]);

  useEffect(() => {
    setParam(["", "", "", "", "", "", "", ""]);
  }, []);

  const groups = [
    {
      value: "0",
      label: "friends",
    },
    {
      value: "1",
      label: "photos",
    },
    {
      value: "2",
      label: "video",
    },
    {
      value: "3",
      label: "stories",
    },
    {
      value: "4",
      label: "pages",
    },
    {
      value: "5",
      label: "status",
    },
    {
      value: "6",
      label: "notes",
    },
    {
      value: "7",
      label: "wall",
    },
    {
      value: "8",
      label: "docs",
    },
    {
      value: "9",
      label: "groups",
    },
    {
      value: "10",
      label: "stats",
    },
    {
      value: "11",
      label: "market",
    },
  ];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function onChangeInputs(e, index) {
    const { value } = e.currentTarget;

    let arr = param;
    arr[index] = value;
    setParam(arr);
    sleep(1);

    setUseMethod(false);
    setTextButtonMethod(true);
    setDisabledButtonMethod(false);
  }

  async function onChange(e, index) {
    const { name, value } = e.currentTarget;
    if (name === "accessToken") {
      setAccessToken(value);
      return;
    }
    if (value !== "") {
      if (name === "section") {
        setSection(value);
        setInfMethod(null);
      } else {
        setInfMethod(value);
      }
    } else {
      if (name === "section") {
        setSection(null);
        setInfMethod(null);
      } else {
        setInfMethod(null);
      }
    }

    setUseMethod(false);
    setTextButtonMethod(true);
    setDisabledButtonMethod(false);
    setParam(["", "", "", "", "", "", "", ""]);

    try {
      if (name === "section") {
        await sleep(1); //setState не обновляется моментально => костыль

        let arrInfoMethods = [];
        // eslint-disable-next-line
        infoMethod[value].methods.map((el, index) => {
          arrInfoMethods.push({ value: index, label: el.title });
        });

        await setInfoMethods([]);
        await setInfoMethods(arrInfoMethods);
      } /*else if (name === 'infMethod') {
                let rights = await infoMethod[this.state.section].methods[value].access_rights
                await this.setState({selectedGroups: rights})
                console.log(this.state.selectedGroups)

                let arr = this.state.param
                arr[index] = value
                this.setState({ param: arr })
            }*/ else {
        let arr = param;
        arr[index] = value;
        setParam(arr);
      }
    } catch (err) {
      console.log(err);
      setSection(null);
      setInfMethod(null);
      setUseMethod(false);
    }
  }

  async function copy() {
    await bridge.send("VKWebAppCopyText", {
      text: JSON.stringify(window.responseAPI),
    });
  }

  async function getToken() {
    toPopout(<ScreenSpinner />);
    try {
      try {
        let scopes = [];
        selectedGroups.map((el) => {
          scopes.push(el.label);
        });
        let response = await bridge.send("VKWebAppGetAuthToken", {
          app_id: 7976662,
          scope: scopes.join(),
        });
        if (response.scope !== scopes.join()) {
          // eslint-disable-next-line
          throw "lets go to catch!";
        }
        setDisabledButtonMethod(false);
        setUseMethod(false);
        setTextButtonMethod(true);
        setAccessToken(response.access_token);
      } catch (err) {
        console.log(err);
        toast.error("Ошибочка... Не удалось получить токен");
        setAccessToken("");
      }
    } catch (err) {
      console.log(err);
    }

    toPopout(null);
  }

  function actionCheckbox(index) {
    setUseMethod(false);
    setTextButtonMethod(true);
    setDisabledButtonMethod(false);

    let arr = param;
    if (arr[index] === "" || arr[index] === 0) {
      arr[index] = 1;
    } else {
      arr[index] = 0;
    }

    setParam(arr);
  }

  async function executeMethod() {
    toPopout(<ScreenSpinner />);

    setUseMethod(true);
    renderjson.set_show_to_level(30);
    try {
      let params1 = {};
      // eslint-disable-next-line
      param.map((el, index) => {
        // eslint-disable-next-line
        if (
          infoMethod[section].methods[infMethod].params.length === index ||
          el === ""
        )
          return;
        params1[
          `${infoMethod[section].methods[infMethod].params[index].name}`
        ] = el;
      });

      params1["v"] = 5.131;
      params1["access_token"] = AccessToken;
      console.log(params1);

      let response = await bridge.send("VKWebAppCallAPIMethod", {
        method: infoMethod[section].methods[infMethod].title,
        params: params1,
      });

      window.responseAPI = response;
      //this.props.openModal('viewResponse')
      document.getElementById("response").appendChild(renderjson(response));
    } catch (err) {
      window.responseAPI = err;
      //this.props.openModal('viewResponse')
      document.getElementById("response").appendChild(renderjson(err));
    }

    toPopout();
  }

  const groupsChipsProps = {
    value: selectedGroups,
    onChange: (e) => {
      setSelectedGroups(e);
    },
    options: groups,
    placeholder: "Не выбраны",
    searchable: true,
  };

  return (
    <>
      <FormItem top="Выберите раздел">
        <CustomSelect
          name="section"
          placeholder="Не выбран"
          options={infoMethod.map((el, index) => ({
            label: el.title,
            value: index,
          }))}
          renderOption={({ option, ...restProps }) => (
            <CustomSelectOption {...restProps} />
          )}
          onChange={(e) => {
            onChange(e);
          }}
          searchable={true}
        />
      </FormItem>

      {section !== null && (
        <FormItem top="Выберите метод">
          <CustomSelect
            name="infMethod"
            placeholder="Не выбран"
            options={infoMethods.map((el) => ({
              label: el.label,
              value: el.value,
            }))}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption {...restProps} />
            )}
            onChange={(e) => onChange(e)}
            searchable={true}
          />
        </FormItem>
      )}

      {infMethod !== null && (
        <>
          <MiniInfoCell
            before={<Icon20HelpOutline />}
            textWrap="full"
            style={{ whiteSpace: "pre-line" }}
          >
            {infoMethod[section].methods[infMethod].description}
          </MiniInfoCell>

          {infoMethod[section].methods[infMethod].params.length === 0 ? (
            <Placeholder className="fixPaddingPlaceholder">
              У данного события отсутствуют параметры.
            </Placeholder> // eslint-disable-next-line
          ) : (
            infoMethod[section].methods[infMethod].params.map((el, index) => {
              if (el.type === "string" || el.type === "string[]") {
                return (
                  <FormItem
                    style={{ whiteSpace: "pre-line" }}
                    top={`${el.name} (${el.type})`}
                    bottom={
                      <>
                        {el.description} <br /> Параметр{" "}
                        {el.is_required ? "обязательный." : "необязательный"}
                      </>
                    }
                  >
                    <Textarea
                      name={el.name}
                      onChange={(e) => {
                        onChangeInputs(e, index);
                      }}
                      placeholder="Введите параметр..."
                      maxLength={100}
                    />
                  </FormItem>
                );
              } else if (el.type === "text") {
                return (
                  <FormItem
                    style={{ whiteSpace: "pre-line" }}
                    top={`${el.name} (${el.type})`}
                    bottom={
                      <>
                        {el.description} <br /> Параметр{" "}
                        {el.is_required ? "обязательный." : "необязательный"}
                      </>
                    }
                  >
                    <Textarea
                      name={el.name}
                      maxLength={100}
                      onChange={(e) => {
                        onChangeInputs(e, index);
                      }}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "positive") {
                return (
                  <FormItem
                    style={{ whiteSpace: "pre-line" }}
                    top={`${el.name} (${el.type})`}
                    bottom={
                      <>
                        {el.description} <br /> Параметр{" "}
                        {el.is_required ? "обязательный." : "необязательный"}
                      </>
                    }
                  >
                    <Textarea
                      name={el.name}
                      maxLength={100}
                      onChange={(e) => {
                        onChangeInputs(e, index);
                      }}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "integer") {
                return (
                  <FormItem
                    style={{ whiteSpace: "pre-line" }}
                    top={`${el.name} (${el.type})`}
                    bottom={
                      <>
                        {el.description} <br /> Параметр{" "}
                        {el.is_required ? "обязательный." : "необязательный"}
                      </>
                    }
                  >
                    <Input
                      name={el.name}
                      type="number"
                      maxLength={100}
                      inputMode="decimal"
                      onChange={(e) => {
                        onChangeInputs(e, index);
                      }}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "checkbox") {
                return (
                  <FormItem
                    style={{ whiteSpace: "pre-line" }}
                    top={`${el.name} (${el.type})`}
                    bottom={
                      <>
                        {el.description} <br /> Параметр{" "}
                        {el.is_required ? "обязательный." : "необязательный"}
                      </>
                    }
                  >
                    <Checkbox
                      name={el.name}
                      onChange={() => actionCheckbox(index)}
                      placeholder="Введите параметр..."
                    >
                      1
                    </Checkbox>
                  </FormItem>
                );
              }
            })
          )}

          <Header mode="primary">Получить токен</Header>
          <FormItem
            top="Выберите права для токена"
            bottom={
              infoMethod[section].methods[infMethod].access_rights.length !==
              0 ? (
                <>
                  Нужные права для вызова метода:{" "}
                  {infoMethod[section].methods[infMethod].access_rights}.
                </>
              ) : (
                <>Для этого метода не нужны никакие права доступа.</>
              )
            }
          >
            <ChipsSelect
              name="accessRights"
              {...groupsChipsProps}
              showSelected
              closeAfterSelect={false}
              renderChip={({ value, label, option: { icon }, ...rest }) => (
                <Chip value={value} {...rest}>
                  {label}
                </Chip>
              )}
            />
          </FormItem>
          <FormItem>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => getToken()}
            >
              Получить токен
            </Button>
          </FormItem>

          <FormItem top="access_token (string)">
            <Input
              type="text"
              name="accessToken"
              placeholder="Введите токен..."
              value={AccessToken}
              maxLength={100}
              onChange={(e) => onChange(e)}
            />
          </FormItem>

          <Div>
            <Button
              size="l"
              stretched
              mode="secondary"
              onClick={() => {
                executeMethod();
                setTextButtonMethod(false);
                setDisabledButtonMethod(true);
              }}
              disabled={disabledButtonMethod}
            >
              {textButtonMethod ? "Выполнить" : "Выполнено!"}
            </Button>
          </Div>
        </>
      )}

      {use_method && (
        <Group header={<Header mode="secondary">Результат</Header>}>
          <Card>
            <Div>
              <div className="scroll" id="response" />
            </Div>
          </Card>

          <Div>
            <Button size="l" stretched mode="secondary" onClick={() => copy()}>
              Скопировать
            </Button>
          </Div>
        </Group>
      )}
    </>
  );
};

export default ApiPanel;
