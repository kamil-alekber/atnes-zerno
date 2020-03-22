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
  FormProps
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
  };

  const onFormChnage = (type: string) => {
    return (e: any) => {
      dispatch({ data: { [type]: e.target.value }, type: "change" });
    };
  };

  const trigger = (
    <Button onClick={() => setVisible(true)} primary floated="right">
      {props.triggerModelBtn}
    </Button>
  );

  return (
    <Modal open={visible} trigger={trigger}>
      <Modal.Header>Завершение покупки</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="https://picsum.photos/200/300" />
        <Modal.Description>
          <Header>Заполните форму вашими данными</Header>
          <Form onSubmit={handleFormSumbit}>
            <Form.Field required>
              <input onChange={onFormChnage("firstName")} placeholder="Имя" />
            </Form.Field>
            <Form.Field required>
              <input
                onChange={onFormChnage("lastName")}
                placeholder="Фамилия"
              />
            </Form.Field>
            <Form.Field required>
              <input
                onChange={onFormChnage("phoneNumber")}
                placeholder="Телефон"
              />
            </Form.Field>
            <Form.Field>
              <label>Дополнительная информация:</label>
              <TextArea onChange={onFormChnage("meta")} />
            </Form.Field>
            <Form.Field required>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button color="green" type="submit">
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