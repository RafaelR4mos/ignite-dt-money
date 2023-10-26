import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" required placeholder="Descrição" />
          <input type="number" required placeholder="Preço" />
          <input type="text" required placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}