
import { useContext } from "react";
import StudentContext from "../context/StudentContext";
import "../App.css";

function StudentCard({ student, showRemoveButton = false }) {
  const { addFavourite, removeFavourite, isFavourite } =
    useContext(StudentContext);

  const favourite = isFavourite(student.id);

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="student-avatar">{student.avatar}</div>

        {!showRemoveButton && (
          <button
            className={`heart-button ${favourite ? "active" : ""}`}
            onClick={() =>
              favourite
                ? removeFavourite(student.id)
                : addFavourite(student)
            }
            aria-label={
              favourite ? "Remove from favourites" : "Add to favourites"
            }
            title={favourite ? "Remove favourite" : "Add favourite"}
          >
            {favourite ? "♥" : "♡"}
          </button>
        )}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p className="student-roll">{student.rollNumber}</p>
        <span className="department-tag">{student.department}</span>
      </div>

      <div className="student-card-footer">
        <span>{student.year}</span>

        {showRemoveButton ? (
          <button
            className="remove-favourite-btn"
            onClick={() => removeFavourite(student.id)}
          >
            Remove Favourite
          </button>
        ) : (
          <button
            className={`favourite-button ${favourite ? "saved" : ""}`}
            onClick={() =>
              favourite
                ? removeFavourite(student.id)
                : addFavourite(student)
            }
          >
            {favourite ? "♥ Added to Favourites" : "♡ Add to Favourite"}
          </button>
        )}
      </div>
    </article>
  );
}

export default StudentCard;
