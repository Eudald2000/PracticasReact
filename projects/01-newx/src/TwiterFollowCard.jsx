import { useState } from "react";

export function TwitterFollowCard({
  name = "unknow",
  userName = "unknow",
  children = "unknow",
  initialIsFollowing
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const followText = isFollowing ? "Sigiendo" : "Seguir";
  const followClass = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  
    const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={name}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={followClass} onClick={handleClick}>
         <span className="tw-followCard-text">{followText}</span> 
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
