import FilterComponent from "./FilterComponent";

const FilterPage = () => {
  return (
    <>
      <p className="question">
        Q7. Design a search filter component that consists of an input field. As
        the user types into the input, use controlled components to filter a
        list of items displayed below. The list should dynamically update to
        show only items matching the search query.
      </p>
      <FilterComponent />
    </>
  );
};

export default FilterPage;
