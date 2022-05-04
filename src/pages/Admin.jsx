// NPM packages
import { useEffect, useState } from "react";

// Project files
import EmptyText from "components/EmptyTextCategory";
import ItemCategory from "components/ItemAdminCategory";
import FormCreateItem from "components/FormCreateItem";
import { readCollection } from "scripts/fireStore";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";

export default function Admin() {
  // Global state
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Methods
  useEffect(() => {
    async function loadData() {
      const data = await readCollection("menu").catch(onFail);

      if (data) onSuccess(data);
    }
    loadData();
  }, []);

  function onSuccess(data) {
    setItems(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the categories. Try again");
    setStatus(2);
  }

  // Components
  const Items = items.map((item) => <ItemCategory key={item.id} item={item} />);

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <div id="admin">
      <h1>BBQ Admin interface</h1>
      <h2>Here are the current categories</h2>
      <div className="grid">
        {items.length === 0 && <EmptyText />}
        {items.length > 0 && Items}
        <button onClick={() => setModal(<FormCreateItem />)}>
          Add new category
        </button>
      </div>
    </div>
  );
}
