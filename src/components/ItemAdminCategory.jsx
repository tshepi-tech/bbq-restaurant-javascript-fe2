export default function ItemAdminCategory({ item }) {
  return (
    <article key={item.id}>
      <div className="content">
        <img src={item.imageURL} />
        <button title="Edit">✍️</button>
        <button title="Delete">🗑</button>
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
