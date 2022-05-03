// NPM packages
import { useParams } from "react-router-dom";

export default function AdminCategory() {
  const { categoryId } = useParams();

  return (
    <div id="admin-category">
      <h1>AdminCategory</h1>
      <p>ID: @{categoryId}@</p>
    </div>
  );
}
