// MPM packages
import { useState } from "react";

// Project files
import form from "data/formCreateCategory";
import { createDocumentWithId, readDocument } from "scripts/fireStore";
import textToURL from "scripts/textToURL";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";
import InputField from "./InputField";

export default function FormCreateItem() {
  // Global state
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [title, setTitle] = useState("Roasted Chicken");
  const [text, setText] = useState("A browny chicken with lemon");
  const [imageURL, setImageURL] = useState(
    "https://static.toiimg.com/thumb/61589069.cms?width=800&height=600"
  );

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    // 1. Check if the document exist
    const id = textToURL(title);
    const existingDocument = await readDocument("menu", id).catch(onFail);

    // Safeguard
    if (existingDocument !== undefined) {
      alert(`An item with the name ${title} already exist`);
      return;
    }

    // 2. Then upload a document
    const item = { title: title, text: text, imageURL: imageURL };
    const done = await createDocumentWithId("menu", id, item).catch(onFail);

    if (done) onSucess(id, item);
  }

  function onSucess(id, item) {
    item.id = id;
    setItems([...items, item]);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new item</h2>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField setup={form.text} state={[text, setText]} />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <button>Submit</button>
    </form>
  );
}
