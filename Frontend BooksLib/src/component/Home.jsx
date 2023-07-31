import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://picsum.photos/1200/900)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to BooksLib</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <NavLink to="library">
            <button className="btn btn-primary">See our Books</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
