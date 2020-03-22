import React from "react";
import {
  Modal,
  Button,
  Image,
  Header,
  Form,
  Checkbox,
  TextArea
} from "semantic-ui-react";

export default function BuyModal(props: { triggerBtn: React.ReactNode }) {
  return (
    <Modal trigger={props.triggerBtn}>
      <Modal.Header>Завершение покупки</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="https://picsum.photos/200/300" />
        <Modal.Description>
          <Header>Заполните форму вашими данными</Header>
          <Form>
            <Form.Field required>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field required>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <TextArea label="Дополнительная информация" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
