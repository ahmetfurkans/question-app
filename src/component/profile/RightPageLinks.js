const RightPageLinks = ({ page, setPage }) => {
  if (page === 1) {
    return (
      <ul>
        <li className="left-buttons-active">Personal Information</li>
        <li onClick={() => setPage(2)}>My Questions</li>
        <li onClick={() => setPage(3)}>My Answers</li>
        <li onClick={() => setPage(4)}>Need Help</li>
        <li onClick={() => setPage(5)}>Sign out</li>
      </ul>
    );
  }
  if (page === 2)
    return (
      <ul>
        <li onClick={() => setPage(1)}>Personal Information</li>
        <li className="left-buttons-active">My Questions</li>
        <li onClick={() => setPage(3)}>My Answers</li>
        <li onClick={() => setPage(4)}>Need Help</li>
        <li onClick={() => setPage(5)}>Sign out</li>
      </ul>
    );
  if (page === 3)
    return (
      <ul>
        <li onClick={() => setPage(1)}>Personal Information</li>
        <li onClick={() => setPage(2)}>My Questions</li>
        <li className="left-buttons-active">My Answers</li>
        <li onClick={() => setPage(4)}>Need Help</li>
        <li onClick={() => setPage(5)}>Sign out</li>
      </ul>
    );
  if (page === 4)
    return (
      <ul>
        <li onClick={() => setPage(1)}>Personal Information</li>
        <li onClick={() => setPage(2)}>My Questions</li>
        <li onClick={() => setPage(3)}>My Answers</li>
        <li className="left-buttons-active">Need Help</li>
        <li onClick={() => setPage(5)}>Sign out</li>
      </ul>
    );
  if (page === 5)
    return (
      <ul>
        <li onClick={() => setPage(1)}>Personal Information</li>
        <li onClick={() => setPage(2)}>My Questions</li>
        <li onClick={() => setPage(3)}>My Answers</li>
        <li onClick={() => setPage(4)}>Need Help</li>
        <li className="left-buttons-active">Sign out</li>
      </ul>
    );
};

export default RightPageLinks;
