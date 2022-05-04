// MPM packages
import { useState } from "react";

// Project files
import { createDocumentWithId } from "scripts/fireStore";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";

export default function FormCreateItem() {
  // Global state
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [title, setTitle] = useState("Roasted Chicken");
  const [description, setDescription] = useState("A browny chicken with lemon");
  const [imageURL, setImageURL] = useState(
    "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 "
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

    const isCompleted = await createDocumentWithId(
      "menu",
      newId,
      newItem
    ).catch(onFail);

    if (isCompleted) onSucess(newItem, newId);
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
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Paste image URL"
        value={imageURL}
        onChange={(event) => setImageURL(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
