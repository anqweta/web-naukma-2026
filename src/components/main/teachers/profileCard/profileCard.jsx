import "./profileCard.css";

export function ProfileCard({
  handleSetIsModalOpen,
  handleSetSelectedProfile,
  profileInfo,
}) {
  function openModal(profileInfo) {
    handleSetIsModalOpen();
    handleSetSelectedProfile(profileInfo);
  }

  return (
    <div onClick={() => openModal(profileInfo)} className="profile-card">
      <div className="avatar-wrapper">
        {profileInfo.hasAvatar ? (
          <img
            src={profileInfo.avatarUrl}
            alt={`${profileInfo.firstName} ${profileInfo.lastName}`}
          />
        ) : (
          <div className="initials">{profileInfo.initials}</div>
        )}
        {profileInfo.isFavorite && <div className="star">★</div>}
      </div>
      <p>
        {profileInfo.firstName} {profileInfo.lastName}
      </p>
      <span>{profileInfo.subject}</span>
      <span className="span-small">{profileInfo.country}</span>
    </div>
  );
}
