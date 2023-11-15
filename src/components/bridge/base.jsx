import { useEffect, useState } from "react";
import { method } from "../../infoMethodBridge";
import {
  Button,
  Card,
  Checkbox,
  CustomSelect,
  CustomSelectOption,
  Div,
  FormItem,
  Group,
  Header,
  Input,
  MiniInfoCell,
  Placeholder,
  Textarea,
} from "@vkontakte/vkui";
import { Icon20HelpOutline } from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";
import "renderjson";

const BridgePanel = () => {
  const [section, setSection] = useState(null);
  const [use_method, setUseMethod] = useState(false);
  const [disabledButtonMethod, setDisabledButtonMethod] = useState(false);
  const [textButtonMethod, setTextButtonMethod] = useState(true);
  const [param, setParam] = useState(["", "", "", "", "", "", "", ""]);

  useEffect(() => {
    setParam(["", "", "", "", "", "", "", ""]);
  }, []);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function onChange(e, index) {
    const { value } = e.currentTarget;
    if (value !== "") {
      setSection(value);
    } else {
      setSection(null);
    }

    setUseMethod(false);
    setTextButtonMethod(true);
    setDisabledButtonMethod(false);
    setParam(["", "", "", "", "", "", "", ""]);

    try {
      /*if (name === 'section') {
          await sleep(1) //setState не обновляется моментально => костыль

          let arrInfoMethods = []
          console.log(method[value])
          method[value].params.map((el, index) => {
              arrInfoMethods.push(<option value={index}>{el.name}</option>)
          })
          setInfoMethod(arrInfoMethods)
      }
      else {*/
      let arr = param;
      arr[index] = value;
      setParam(arr);
      //}
    } catch (err) {
      console.log(err);
      setSection(null);
      setUseMethod(false);
    }
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

  function actionCheckbox(index) {
    setUseMethod(false);
    setTextButtonMethod(true);
    setDisabledButtonMethod(false);

    let arr = param;

    if (arr[index] === "" || arr[index] === false) {
      arr[index] = true;
    } else {
      arr[index] = false;
    }

    setParam(arr);
  }

  async function executeMethod() {
    setUseMethod(true);
    renderjson.set_show_to_level(30);
    try {
      let params1 = {};
      // eslint-disable-next-line
      param.map((el, index) => {
        // eslint-disable-next-line
        if (method[section].params.length === index || el === "") return;
        if (method[section].params[index].type === "integer") {
          params1[`${method[section].params[index].param}`] = Number(el);
        } else {
          params1[`${method[section].params[index].param}`] = el;
        }
      });
      console.log(params1);
      let response = await bridge.send(method[section].name, params1);

      window.responseAPI = response;
      //this.props.openModal('viewResponse')
      document.getElementById("response").appendChild(renderjson(response));
    } catch (err) {
      window.responseAPI = err;
      //this.props.openModal('viewResponse')
      document.getElementById("response").appendChild(renderjson(err));
    }
  }

  return (
    <>
      <FormItem top="Выберите событие">
        <CustomSelect
          name="section"
          placeholder="Не выбран"
          options={method.map((el, index) => ({
            label: el.name,
            value: index,
          }))}
          renderOption={({ option, ...restProps }) => (
            <CustomSelectOption {...restProps} />
          )}
          onChange={(e) => onChange(e)}
          searchable={true}
          filterFn={(value, option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
          }
        />
      </FormItem>
      {section !== null && (
        <>
          <MiniInfoCell before={<Icon20HelpOutline />} textWrap="full">
            {method[section].description}
          </MiniInfoCell>

          {method[section].params.length === 0 ? (
            <Placeholder className="fixPaddingPlaceholder">
              У данного события отсутствуют параметры.
            </Placeholder> // eslint-disable-next-line
          ) : (
            method[section].params.map((el, index) => {
              if (el.type === "string" || el.type === "string[]") {
                return (
                  <FormItem
                    top={`${el.param} (${el.type})`}
                    bottom={el.description}
                  >
                    <Textarea
                      name={el.param}
                      onChange={(e) => onChangeInputs(e, index)}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "object") {
                return (
                  <FormItem
                    top={`${el.param} (${el.type})`}
                    bottom={el.description}
                  >
                    <Textarea
                      name={el.param}
                      onChange={(e) => onChangeInputs(e, index)}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "integer") {
                return (
                  <FormItem
                    top={`${el.param} (${el.type})`}
                    bottom={el.description}
                  >
                    <Input
                      name={el.param}
                      type="number"
                      onChange={(e) => onChangeInputs(e, index)}
                      placeholder="Введите параметр..."
                    />
                  </FormItem>
                );
              } else if (el.type === "boolean") {
                return (
                  <FormItem
                    top={`${el.param} (${el.type})`}
                    bottom={el.description}
                  >
                    <Checkbox
                      name={el.param}
                      value={param[index]}
                      onChange={(e) => actionCheckbox(index)}
                      placeholder="Введите параметр..."
                    >
                      true
                    </Checkbox>
                  </FormItem>
                );
              }
            })
          )}

          <Div>
            <Button
              size="l"
              stretched
              mode="secondary"
              disabled={disabledButtonMethod}
              onClick={() => {
                executeMethod();
                setTextButtonMethod(false);
                setDisabledButtonMethod(true);
              }}
            >
              {textButtonMethod ? "Вызвать" : "Вызвано!"}
            </Button>
          </Div>
        </>
      )}

      {use_method && (
        <>
          <Group header={<Header mode="secondary">Результат</Header>}>
            <Card>
              <Div>
                <div className="scroll" id="response" />
              </Div>
            </Card>
          </Group>
          <Div>
            <Button
              size="l"
              stretched
              mode="secondary"
              onClick={() =>
                bridge.send("VKWebAppCopyText", {
                  text: JSON.stringify(window.responseAPI),
                })
              }
            >
              Скопировать
            </Button>
          </Div>
        </>
      )}
    </>
  );
};

export default BridgePanel;
