import { useState } from "react";
export const TwitterFollowCard = ({
  username,
  name,
  initialIsFollowing,
  formatUsername,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard ">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt="user image"
        />
        <section className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUsername(username)}
          </span>
        </section>
      </header>
      <aside>
        <button
          className={
            isFollowing
              ? "tw-followCard-button is-following"
              : "tw-followCard-button"
          }
          onClick={handleClick}
        >
          <span className="tw-followCard-text">
            {" "}
            {isFollowing ? "Siguiendo" : "Seguir"}
          </span>

          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
