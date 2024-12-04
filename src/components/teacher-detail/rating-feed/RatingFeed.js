import React from "react";
import { IoFlowerOutline } from "react-icons/io5";
import { AiTwotoneStar } from "react-icons/ai";
const reviews = [
  {
    id: 1,
    rating: 5,
    comment:
      "Thanks for making this book. This book is very good and easy to understand and brush up the concepts.",
    reviewer: "Supriya Kumari",
    date: "19th Aug, 2024",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "Had discussion with Santosh Mishra. He helped me with clearing lots of doubts that I have regarding product based companies interviews and type of candidates they are looking for.",
    reviewer: "Ruchir Saxena",
    date: "2nd Oct, 2022",
  },
];

const RatingFeed = () => {
  return (
    <>
      <div className="ratingFeed sectionSpace">
        <div className="title">
          <h3>Ratings and feedback</h3>
        </div>
        <div className="rateItem">
          <div className="icon">
            <IoFlowerOutline />
          </div>
          <ul>
            <li>
              <strong>3.6/5 </strong>
              <span>36 Rating</span>
            </li>
            <li>
              <strong>17</strong>
              <span>Testimonial</span>
            </li>
          </ul>
        </div>
        <div className="testiCard">
          {reviews.map((item) => {
            return (
              <div className="tetiItem" key={item.id}>
                <div className="rating">
                  <AiTwotoneStar /> <span>{item.rating} / 5</span>
                </div>
                <p className="desc">{item.comment}</p>
                <strong>{item.reviewer}</strong>
                <span>{item.date}</span>
              </div>
            );
          })}
        </div>
        <div className="extraButton">
        <button>Show all reviews</button>
        </div>
      </div>
    </>
  );
};

export default RatingFeed;
