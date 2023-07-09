import React from "react";

export default function DropdownIcon({ iconType }) {
  return (
    <>
      {iconType ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 ml-2"
          id="chevron-up">
          <g data-name="Layer 2">
            <g data-name="chevron-up">
              <rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"></rect>
              <path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"></path>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          className="w-6 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="chevron-down">
          <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"></path>
        </svg>
      )}
    </>
  );
}
