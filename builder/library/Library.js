import React from "react";
import LibraryComponents from "./LibraryComponents";
import { LibraryFilters } from "./LibraryFilters";

const Library = ({ items, setFilteredItems }) => {
  const [showLibary, setShowLibary] = React.useState(false);

  return (
    <div className=" h-screen flex">
      <LibraryFilters
        setFilteredItems={setFilteredItems}
        showLibary={showLibary}
        setShowLibary={setShowLibary}
      />
      <LibraryComponents
        items={items}
        showLibary={showLibary}
        setShowLibary={setShowLibary}
      />
    </div>
  );
};

export default Library;
