import React, { useState, useReducer } from "react";
import { BuyModalFormReducer, initialState } from "./BuyModalReducer";
import {
  Modal,
  Button,
  Image,
  Header,
  Form,
  Checkbox,
  TextArea,
  FormProps,
  Icon
} from "semantic-ui-react";

interface Props {
  triggerModelBtn: React.ReactNode;
}

export default function BuyModal(props: Props) {
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useReducer(BuyModalFormReducer, initialState);

  const handleClose = () => {
    setVisible(false);
  };

  const handleFormSumbit = (
    event: React.FormEvent<HTMLFormElement>,
    data: FormProps
  ) => {
    event.preventDefault();
    for (const [key, value] of Object.entries(state)) {
      if (!value && key !== "success" && key !== "error" && key !== "meta") {
        const errorMsg = `Неправильно введен ${key}`;
        const error = Object.assign(state.error, { [key]: errorMsg });

        dispatch({ data: { error }, type: "change" });
      } else if (value && state.error[key]) {
        delete state.error[key];
      }
    }

    if (Object.values(state.error).length === 0) {
      setVisible(false);
      dispatch({ data: initialState, type: "clear" });
      //TODO: pop-up success
    }
  };

  const onFormItemChange = (type: string) => {
    return (e: any) => {
      dispatch({ data: { [type]: e.target.value }, type: "change" });
    };
  };

  const trigger = (
    <Button color="teal" onClick={() => setVisible(true)} floated="right">
      <Icon name="flag checkered" /> {props.triggerModelBtn}
    </Button>
  );

  return (
    <Modal
      closeOnEscape
      closeOnDimmerClick
      onClose={handleClose}
      open={visible}
      trigger={trigger}
      closeIcon
    >
      <Modal.Header>Завершение покупки</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={require("../../assets/images/main1.jpg")}
        />
        {/* <Icon name="close" > */}
        <Modal.Description>
          <Header>Заполните форму вашими данными</Header>
          <Form onSubmit={handleFormSumbit}>
            <Form.Field required>
              <input
                onChange={onFormItemChange("firstName")}
                placeholder="Имя"
              />
            </Form.Field>
            <Form.Field required>
              <input
                onChange={onFormItemChange("lastName")}
                placeholder="Фамилия"
              />
            </Form.Field>
            <Form.Field required>
              <input
                onChange={onFormItemChange("phoneNumber")}
                placeholder="Телефон"
              />
            </Form.Field>
            <Form.Field>
              <label>Дополнительная информация:</label>
              <TextArea onChange={onFormItemChange("meta")} />
            </Form.Field>
            <Form.Field required>
              <Checkbox label="Даю согласие на обработку персональных данных" />
            </Form.Field>
            <Button color="teal" type="submit">
              Заказать
            </Button>
            <Button onClick={handleClose} type="close">
              Отмена
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
