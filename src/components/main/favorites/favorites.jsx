import { ProfileCard } from "../teachers/profileCard/profileCard";
import "./favorites.css";

export function Favorites({ profiles }) {
  const favoriteProfiles = profiles.filter((profile) => profile.isFavorite);

  return (
    <div className="favorites-section">
      <hr />
      <h2>Favorites</h2>
      <div className="favorites-container">
        <button className="arrow-left">{"<"}</button>
        <div className="favorites-cards">
          {favoriteProfiles.map((profileInfo) => (
            <ProfileCard profileInfo={profileInfo} key={profileInfo.id} />
          ))}
        </div>
        <button className="arrow-right">{">"}</button>
      </div>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque facere, hic impedit itaque molestiae sit tempore? Ea in mollitia natus rerum voluptates. Ea ex excepturi facere tempora. Aliquid asperiores hic impedit iusto natus quaerat ratione sit? Culpa iusto optio voluptas voluptate. Enim eveniet fugit iure maiores molestiae, praesentium quia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi illum in inventore ipsum odio officiis quisquam sed tempora?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse expedita id iusto mollitia, odit sint ullam veritatis vero?
      </p>
    </div>
  );
}
