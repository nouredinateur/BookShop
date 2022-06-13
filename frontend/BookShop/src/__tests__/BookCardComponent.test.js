import { render, fireEvent } from "@testing-library/react";
import BookCardComponent from "../components/BookCardComponent";

const book = [
  {
    id: 21,
    title: "Est quia assumenda.",
    description:
      "Qui similique ut culpa natus. Reiciendis sit et nihil ut porro. Laborum iure molestiae et dolore. Iste in dolores harum rerum sequi. Quasi quae sint saepe numquam. Et quo aperiam natus ut.",
    publicationDate: "1994-04-26T00:00:00+02:00",
    genre: "Ut voluptatem.",
    author: {
      firstName: "Rubie Howe",
      lastName: "Marianne Weimann IV",
    },
  },
];

test("should render book ", function () {
  // content of our test with here
  render(<BookCardComponent book={book} />);
});

it("a simple test with arrow function", () => {
  // content of our test with here
});
