import { createContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((currentFavourites) => {
      const alreadyExists = currentFavourites.some(
        (item) => item.id === student.id
      );

      if (alreadyExists) {
        return currentFavourites;
      }

      return [...currentFavourites, student];
    });
  }

  function removeFavourite(studentId) {
    setFavourites((currentFavourites) =>
      currentFavourites.filter((student) => student.id !== studentId)
    );
  }

  function isFavourite(studentId) {
    return favourites.some((student) => student.id === studentId);
  }

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContext;
