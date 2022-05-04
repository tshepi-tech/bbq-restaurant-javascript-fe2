// MPM packages
import { useState } from "react";

// Project files
import formData from "data/formCreateCategory";
import { createDocumentWithId } from "scripts/fireStore";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";
import InputField from "./InputField";

export default function FormCreateItem() {
  // Global state
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [title, setTitle] = useState("Roasted Chicken");
  const [description, setDescription] = useState("A browny chicken with lemon");
  const [imageURL, setImageURL] = useState(
    "https://static.toiimg.com/thumb/61589069.cms?width=800&height=600"
  );

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const newId = titleToURL(title);
    const newItem = {
      title: title,
      description: description,
      imageURL: imageURL,
    };

    const done = await createDocumentWithId("menu", newId, newItem).catch(
      onFail
    );

    if (done) onSucess(newItem, newId);
  }

  function titleToURL(title) {
    const lowercase = title.toLowerCase();
    const trim = lowercase.trim();
    const replace = trim.replace(" ", "-");

    return replace;
  }

  function onSucess(newItem, newId) {
    newItem.id = newId;
    setItems([...items, newItem]);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new item</h2>
      <InputField
        setup={formData.title}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputField
        setup={formData.description}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <InputField
        setup={formData.imageURL}
        value={imageURL}
        onChange={(event) => setImageURL(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
