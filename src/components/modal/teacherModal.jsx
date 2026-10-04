import "./teacherModal.css";

export function TeacherModal({ profile, onClose }) {
  if (!profile) {
    return null;
  }

  return (
    <div className="modal-teacher">
      <div className="div-gray">
        <p>Teacher Info</p>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
      <div className="inner-form">
        {profile.hasAvatar ? (
          <img
            src={profile.avatarUrl}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="avatar"
          />
        ) : (
          <div className="avatar-placeholder">{profile.initials}</div>
        )}
        <div className="box__text">
          <h2 className="name">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="subject">{profile.subject}</p>
          <div className="details-container">
            <div>
              <p>
                {profile.city}, {profile.country}
              </p>
              <p>
                {profile.age}, {profile.sex}
              </p>
              <a className="post" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p>{profile.phone}</p>
            </div>
            <div className="extra-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                autem consectetur culpa cumque...
              </p>
              <a href="#" className="toggle-map">
                toggle map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
