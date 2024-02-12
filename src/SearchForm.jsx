export const SearchForm = () => {
  return (
    <form>
      <label htmlFor="search">Search for a character:</label>
      <input type="text" id="search" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
