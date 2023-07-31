import BookList from "./component/BookList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Authors from "./component/Authors";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [booklib, setBooklib] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wbslibrarybackend.onrender.com/books"
        );
        if (!response.ok)
          throw new Error(
            `The fetch failed with a status of ${response.status}`
          );
        const responseData = await response.json();
        const data = responseData; // wich data?;
        setBooklib(data); //[use, setUse] = useState(wich start?)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="library" element={<BookList booklib={booklib} />} />
        <Route path="authors" element={<Authors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
