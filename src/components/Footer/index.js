import React from "react";

function footer() {


  return (
    <footer className="bg-gray-200">
    <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
      <p className="text-blue-600">
        Created by{` `}
        <a
          className="font-bold no-underline"
          href="https://khzour.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khezour Mohamed Oussama
        </a>
      </p>

      <p>
        <a
          className="font-bold text-white no-underline"
          href="https://github.com/taylorbryant/gatsby-starter-tailwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </nav>
  </footer>
  );
}

export default footer;
