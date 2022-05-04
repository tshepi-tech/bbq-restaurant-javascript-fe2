// Project file
import { useItems } from "state/ItemsContext";

export default function Admin() {
  const { items, setItems } = useItems();

  /**
   * Tomorrow:
   * 0. Refactor the Context API names. ✅
   * 1. Connect to a Firebase project
   * 2. Copy the firebase scripts folder (the new ones witouth try/catch)
   * 3. Load data from the database using the useEffect hook (by default it will be empty)
   * 4. Create the AdminCategoryItem.jsx
   * 5. Call the createForm using the portal
   * 6. Call the editForm and deleteForm from the AdminCategoryItem
   */


  // Components
  const EmptyMessage = (
    <article>
      You don’t have any category yet. Press add new category to start
    </article>
  );
  const Items = items.map((item, index) => <article key={index}>foo</article>);

  return (
    <div id="admin">
      <h1>BBQ Admin interface</h1>
      <h2>Here are the current categories</h2>
      <div className="grid">
        {items.length === 0 && EmptyMessage}
        {items.length > 0 && Items}
        <button>Add new category</button>
      </div>
    </div>
  );
}
