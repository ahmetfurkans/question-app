import '../../styles/populartags.scss';

function PopularTags({ name, color }) {
  return (
    <>
      <div className="tag" style={{ backgroundColor: `#${color}` }}>
        {name}
      </div>
    </>
  );
}

export default PopularTags;
