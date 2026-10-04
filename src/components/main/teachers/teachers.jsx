import { useState } from "react";
import { ProfileCard } from "./profileCard/profileCard";
import "./teachers.css";
import { TeacherModal } from "../../modal/teacherModal";

export function TeachersSection({ profiles }) {
  const filterData = [
    {
      id: "filter-age",
      name: "age",
      title: "Age",
      options: [
        { value: "18-31", label: "18-31" },
        { value: "32-45", label: "32-45" },
        { value: "46+", label: "46+" },
      ],
    },
    {
      id: "filter-region",
      name: "region",
      title: "Region",
      options: [
        { value: "europe", label: "Europe" },
        { value: "asia", label: "Asia" },
        { value: "americas", label: "Americas" },
      ],
    },
    {
      id: "filter-sex",
      name: "sex",
      title: "Sex",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "any", label: "Any" },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("");

  function handleSetIsModalOpen() {
    setIsModalOpen(true);
  }

  function handleSetSelectedProfile(profile) {
    setSelectedProfile(profile);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="section-teacher">
      <hr />
      <h2>Top Teachers</h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {filterData.map((group) => (
          <div
            key={group.id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <label htmlFor={group.name} style={{ color: "#888" }}>
              {group.title}
            </label>
            <select name={group.name} id={group.name}>
              {group.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="divider"></div>
        <div className="filter__item">
          <input type="checkbox" />
          <label htmlFor="favorites">Only with photo</label>
        </div>
        <div className="divider"></div>
        <div className="filter__item">
          <input type="checkbox" />
          <label htmlFor="favorites">Only favorites</label>
        </div>
      </div>
      <div className="cards">
        {profiles.map((profileInfo) => (
          <ProfileCard
            handleSetIsModalOpen={handleSetIsModalOpen}
            handleSetSelectedProfile={handleSetSelectedProfile}
            profileInfo={profileInfo}
            key={profileInfo.id}
          />
        ))}
      </div>
      {isModalOpen && (
        <TeacherModal profile={selectedProfile} onClose={closeModal} />
      )}
    </div>
  );
}
