import React, { useState } from "react";
import { tags } from "../sections/allSections";

export default function ScrollToButtons() {
  const [selected, set] = useState("All");
  return (
    <div className="bg-white sticky top-0 z-50  flex flex-wrap gap-4 items-center justify-center px-8 pt-4 pb-3 border-b border-sb-lightgray shadow">
      {tags.map((tag) => {
        return (
          <a
          key={tag}
            onClick={() => set(tag)}
            className={`${
              selected === tag ? " border-sb-teal " : " border-white "
            } border-b px-2 pb-1`}
            href={`/edit/variants#${tag}`}
          >
            {tag}
          </a>
        );
      })}
    </div>
  );
}
