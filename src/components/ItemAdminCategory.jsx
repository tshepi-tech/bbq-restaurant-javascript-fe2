export default function ItemAdminCategory({ item }) {
  return (
    <article key={item.id}>
      <div className="content">
        <button>✍️</button>
        <button>🗑</button>
        <img src={item.imageURL} />
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
