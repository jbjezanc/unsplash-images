import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    /**
     * HTMLFormControlsCollection [
     *  0: input.form-input.search-input,
     *  1: button.btn
     * search: input.form-input.search-input // <- this is our "name" attribute for the input
     * ]
     */
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    // console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
