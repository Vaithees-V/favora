
import { useContext } from "react";
import StudentContext from "../context/StudentContext";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";

function FavouriteStudents() {
  const { favourites } = useContext(StudentContext);

  return (
    <main className="page-container favourites-page">
      <section className="favourites-heading">
        <span className="eyebrow">YOUR PERSONAL COLLECTION</span>
        <h1>
          Favourite Students<span>.</span>
        </h1>
        <p>
          All the students you have saved, together in one place.
        </p>

        <div className="favourites-total">
          ♥ &nbsp; {favourites.length} favourite
          {favourites.length !== 1 ? "s" : ""}
        </div>
      </section>

      {favourites.length > 0 ? (
        <div className="student-grid">
          {favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              showRemoveButton={true}
            />
          ))}
        </div>
      ) : (
        <section className="empty-state">
          <div className="empty-heart">♡</div>
          <h2>No favourite students added yet</h2>
          <p>
            Your favourite students will appear here.
            Explore the directory and save someone you like!
          </p>
          <Link to="/" className="primary-button">
            Explore Students →
          </Link>
        </section>
      )}
    </main>
  );
}

export default FavouriteStudents;
