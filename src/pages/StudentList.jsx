import { useState, useContext } from "react";
import StudentContext from "../context/StudentContext";
import students from "../data/students.js";
import StudentCard from "../components/StudentCard.jsx";


function StudentList() {
    const [search, setSearch] = useState("");
    const { favourites } = useContext(StudentContext);

    const filteredStudents = students.filter((student) =>
        `${student.name} ${student.rollNumber} ${student.department}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <main className="page-container">
            <section className="hero-section">
                <div className="hero-content">
                    <span className="eyebrow">YOUR STUDENT COMMUNITY</span>

                    <h1>
                        Find your people.
                        <br />
                        <span>Save your favourites.</span>
                    </h1>

                    <p>
                        Explore your student community and build your own Favourite
                    </p>


                    <div className="hero-stats">
                        <div>
                            <strong>{students.length}</strong>
                            <span>Total Students</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div>
                            <strong>♡ {favourites.length}</strong>
                            <span>Your Favourites</span>
                        </div>
                    </div>

                </div>

                
            </section>

            <section className="directory-section">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">GET TO KNOW THEM</span>
                        <h2>Student Directory</h2>
                        <p>Discover students and save the ones you love.</p>
                    </div>

                    <span className="result-count">
                        {filteredStudents.length} students
                    </span>
                </div>

                <div className="search-wrapper">
                    <span className="search-icon">⌕</span>
                    <input
                        type="search"
                        placeholder="Search by name, roll number or department..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        aria-label="Search students"
                    />
                </div>

                {filteredStudents.length > 0 ? (
                    <div className="student-grid">
                        {filteredStudents.map((student) => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <span>⌕</span>
                        <h3>No students found</h3>
                        <p>Try searching with a different name or roll number.</p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default StudentList;
