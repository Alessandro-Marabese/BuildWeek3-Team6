import { useDispatch, useSelector } from "react-redux";
import { getSuggestedPeople } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/SuggestedPeople.css";
import { useEffect, useState } from "react";

const SuggestedPeople = () => {
  const dispatch = useDispatch();
  const suggestedPeople = useSelector((state) => state.profile.suggestedPeople);

  const [visibleCount, setVisibleCount] = useState(5);

  const [hasClickedShowMore, setHasClickedShowMore] = useState(false);

  useEffect(() => {
    dispatch(getSuggestedPeople());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);

    setHasClickedShowMore(true);
  };

  return (
    <div className="profile-card ">
      <div className="suggested-container">
        <h3 className="mb-3">Altri profili simili</h3>

        <ul className="list-group">
          {suggestedPeople.slice(20, visibleCount + 20).map((person) => (
            <li key={person._id} className="list-group-item suggested-item">
              <img
                src={person.image}
                alt={person.name}
                className="profile-image"
              />
              <div className="profile-info">
                <p className="profile-name">
                  {person.name} {person.surname}
                </p>
                <p className="profile-title">{person.title}</p>
              </div>
              <button className="connect-icon btn btn-light">
                <i className="bi bi-person-plus"></i>
              </button>
            </li>
          ))}
        </ul>

        {!hasClickedShowMore && visibleCount < suggestedPeople.length && (
          <div className="text-center mt-3">
            <button className="show-more-btn1" onClick={handleShowMore}>
              Mostra Altro
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestedPeople;
