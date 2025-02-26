import { useState } from "react";
import { useSelector } from "react-redux";
import "../style/SuggestedPeopleDesktop.css";

const SuggestedPeopleDesktop = () => {
  const suggestedPeople = useSelector((state) => state.profile.suggestedPeople);

  const [visibleCount, setVisibleCount] = useState(5);

  const [hasClickedShowMore, setHasClickedShowMore] = useState(false);

  const handleShowMore = () => {
    if (suggestedPeople.length <= 10) {
      setVisibleCount(suggestedPeople.length);
    } else {
      setVisibleCount(10);
    }

    setHasClickedShowMore(true);
  };

  return (
    <aside className="suggested-desktop-wrapper">
      <div className="suggested-card">
        <h3>Lingua del profilo</h3>
        <div className="profile-settings">
          <div>
            <span>Italiano</span>
            <i className="bi bi-pencil"></i>
          </div>
          <div>
            <h4>Profilo pubblico e URL</h4>
            <i className="bi bi-pencil"></i>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nome-profilo"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/nome-profilo
            </a>
          </div>
        </div>
      </div>

      <div className="suggested-card">
        <h3>Persone che potresti conoscere</h3>
        <div className="people-list">
          {suggestedPeople.slice(1, visibleCount + 1).map((person) => (
            <div key={person._id} className="person-item">
              <img src={person.image} alt={person.name} />
              <div className="person-info">
                <p className="people-name">
                  {person.name} {person.surname}
                </p>

                <p className="people-title">{person.title}</p>
              </div>
              <button className="connect-button">
                <i className="bi bi-person-plus"></i>
                Collegati
              </button>
            </div>
          ))}
        </div>

        {!hasClickedShowMore &&
          visibleCount < suggestedPeople.length &&
          visibleCount < 10 && (
            <button className="show-more-btn" onClick={handleShowMore}>
              Mostra Altro
            </button>
          )}
      </div>
    </aside>
  );
};

export default SuggestedPeopleDesktop;
