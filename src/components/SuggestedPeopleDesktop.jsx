import { useState } from "react";
import { useSelector } from "react-redux";
import "../style/SuggestedPeopleDesktop.css";

const SuggestedPeopleDesktop = () => {
  const myProfile = useSelector((state) => state.profile.content);
  const suggestedPeople = useSelector((state) => state.profile.suggestedPeople);

  const [visibleCount, setVisibleCount] = useState(5);
  const [hasClickedShowMore, setHasClickedShowMore] = useState(false);

  const handleShowMore = () => {
    const remainingAfter20 = suggestedPeople.slice(20).length;

    if (remainingAfter20 <= 10) {
      setVisibleCount(remainingAfter20);
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
            <span className="profile-url">
              {myProfile && myProfile.username
                ? `www.linkedin.com/in/${myProfile.username}`
                : "www.linkedin.com/in/nome-profilo"}
            </span>
          </div>
        </div>
      </div>

      <div className="suggested-card">
        <h3>Persone che potresti conoscere</h3>
        <div className="people-list">
          {suggestedPeople.slice(20, 20 + visibleCount).map((person) => (
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
          visibleCount < suggestedPeople.slice(20).length &&
          visibleCount < 10 && (
            <button className="show-more-btn" onClick={handleShowMore}>
              Mostra Altro
            </button>
          )}
      </div>

      <div className="suggested-card">
        <h3>Altre visualizzazioni</h3>

        <div className="subtitle-row">
          <i className="bi bi-eye eye-icon"></i>
          <span className="solo-per-te-text">Solo per te</span>
        </div>

        {suggestedPeople.slice(30, 32).map((person) => (
          <div key={person._id} className="person-item">
            <img src={person.image} alt={`${person.name} ${person.surname}`} />
            <div className="person-info">
              <p className="people-name">
                {person.name} {person.surname}
              </p>
              <p className="people-title">{person.title}</p>
            </div>
            <button className="connect-button2">Messaggio</button>
          </div>
        ))}

        <div className="premium-title-row">
          <i className="bi bi-key-fill yellow-key"></i>
          <h4>Sblocca elenco completo</h4>
        </div>
        <p className="premium-subtitle">
          Scopri gli altri profili visitati spesso insieme al tuo
        </p>
        <button className="premium-button">Prova Premium per 0 EUR</button>
        <p className="premium-description">
          1 mese gratis con assistenza 24/7. Annulli in qualsiasi momento. Ti
          invieremo un promemoria 7 giorni prima della fine del periodo di
          prova.
        </p>

        {suggestedPeople.slice(32, 34).map((person) => (
          <div key={person._id} className="person-item blurred-person">
            <img src={person.image} alt={`${person.name} ${person.surname}`} />
            <div className="person-info">
              <p className="people-name">
                {person.name} {person.surname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SuggestedPeopleDesktop;
