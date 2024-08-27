export const TwitterFollowCard = ({
  username,
  name,
  isFollowing,
  formatUsername,
}) => {
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
        >
          {isFollowing ? "Siguiendo" : "Seguir"}
        </button>
      </aside>
    </article>
  );
};
