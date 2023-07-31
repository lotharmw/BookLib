function BookList(booklib) {
  return (
    <>
      {booklib.map((book) => {
        return (
          <div
            key={book.id}
            className="card lg:card-side lg:w-[50%] lg:mx-auto my-10 bg-base-300 shadow-xl"
          >
            <figure className="lg:w-[125%] max-w-[195px]">
              <img
                className="max-w-[100%] w-[195px]"
                src={book.image_url}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>
                {book.description}
                <br />
                <button className="btn btn-primary mt-4">Weiter lesen</button>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">genre: {book.genre}</div>
                <div className="badge badge-outline">ISBN: {book.isbn}</div>
                <div className="badge badge-outline">
                  Available:&nbsp;
                  {book.active ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">No</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BookList;
