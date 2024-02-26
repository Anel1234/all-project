import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Card = ({ data, inBookmarkSection, showBookmark }) => {
  const {
    _id,
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    skills,
  } = data;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (inBookmarkSection) {
      // If in bookmark section, set isBookmarked based on the bookmark data
      setIsBookmarked(true);
    } else {
      // If not in bookmark section, check local storage for bookmark status
      const storedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];
      const isBookmarked = storedBookmarks.some(
        (bookmark) => bookmark._id === _id
      );
      setIsBookmarked(isBookmarked);
    }
  }, [inBookmarkSection, _id]);

  const handleBookmarkToggle = () => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = isBookmarked
      ? storedBookmarks.filter((bookmark) => bookmark._id !== _id)
      : [...storedBookmarks, data];

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setIsBookmarked((prev) => !prev);
  };

  const isHomePage = window.location.pathname === "/"; // Replace '/your-homepagejob-route' with the actual route of your HomePageJob

  return (
    <section
      className={`card ${inBookmarkSection ? "" : ""}`}
      style={{
        marginTop: inBookmarkSection && "200px",

        marginBottom: inBookmarkSection && "-200px",
      }}
    >
      {" "}
      <div className="flex gap-4 flex-col sm:flex-row items-start">
        <Link to={`/job/${_id}`}>
          <img src={companyLogo} alt="" />
        </Link>
        <div>
          <div
            className={`bookmark flex justify-between ${
              isHomePage ? "hidden" : ""
            }`}
          >
            <h4 className="text-primary mb-1">{companyName}</h4>
            {isBookmarked ? (
              <FaBookmark onClick={handleBookmarkToggle} />
            ) : (
              <FaRegBookmark onClick={handleBookmarkToggle} />
            )}
          </div>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign /> {minPrice}-{maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar /> {postingDate}
            </span>
          </div>

          <p className="text-base text-primary/70">{description}</p>

          {/* Display skills here */}
          {skills && (
            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span>Skills:</span>
              {skills.map((skill) => (
                <span
                  key={skill.value}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
