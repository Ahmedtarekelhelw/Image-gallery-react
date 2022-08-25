export default function ImageList(props) {
  let tags = props.image.tags.split(",");

  const handlePrint = (e) => {
    let printContents = e.target.parentNode.innerHTML;
    document.body.innerHTML = printContents;

    window.print();

    window.location.reload();
  };

  return (
    <div className="card">
      <img src={props.image.webformatURL} alt="img" />
      <div className="info">
        <h2>Photo by {props.image.user}</h2>
        <ul>
          <li>
            <strong>Views:</strong>
            {props.image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {props.image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {props.image.likes}
          </li>
        </ul>
        <div className="tags">
          {tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </div>
      </div>
      <button className="print-btn" onClick={handlePrint}>
        Print Image
      </button>
    </div>
  );
}
