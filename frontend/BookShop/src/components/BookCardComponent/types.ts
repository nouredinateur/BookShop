export interface IBookCardComponentProps {
  id?: number;
  title?: string;
  author?: Iauthor;
  genre?: string;
}
export interface Iauthor {
  firstName: string;
  lastName: string;
}
