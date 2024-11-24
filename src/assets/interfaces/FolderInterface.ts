export default interface Folder {
  id: string | number;
  name: string;
  children: Folder[];
}
