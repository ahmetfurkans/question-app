import '../../styles/content.scss';

function Content({ children }) {
  return (
    <>
      <div className="container-content">{children}</div>
    </>
  );
}

export default Content;
