import { useState, useEffect } from "react";
import { client } from "../client";

function BookList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getListItem = async () => {
      try {
        const response = await client.getEntries({ content_type: "bookItem" });
        const responseData = response.items;
        if (responseData) {
          // console.log(responseData);
          setItemList(responseData);
        } else {
          setItemList([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getListItem();
  }, []);
  // console.log(itemList);
  return (
    <>
      {itemList.map((item) => {
        const { sys, fields } = item;
        const { id } = sys;
        const bookTitle = fields.title;
        const bookDescription = fields.description;
        const bookCover = fields.bookCover.fields.file.url;
        const author = fields.author;
        const year = fields.year;
        const availability = fields.availability;
        return (
          <div
            key={sys}
            className="card lg:card-side lg:w-[50%] lg:mx-auto my-10 bg-base-300 shadow-xl"
          >
            <figure className="lg:w-[125%] max-w-[195px]">
              <img
                className="max-w-[100%] w-[195px]"
                src={bookCover}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{bookTitle}</h2>
              <p>
                {bookDescription}
                <br />
                <button className="btn btn-primary mt-4">Weiter lesen</button>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Author: {author}</div>
                <div className="badge badge-outline">Year: {year}</div>
                <div className="badge badge-outline">
                  Available:&nbsp;
                  {availability ? (
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
