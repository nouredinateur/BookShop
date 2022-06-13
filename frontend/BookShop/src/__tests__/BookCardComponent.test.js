import { render, screen } from "@testing-library/react";
import BookCardComponent from "../components/BookCardComponent";
import "@testing-library/jest-dom";

it("should renders card properly", () => {
  const book = {
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
  };

  render(<BookCardComponent book={book} />);
  const id = screen.getByTestId("21");
  expect(id).toBeInTheDocument();
});
