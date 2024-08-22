import sibling1 from "../assets/Sibling1.png";
import sibling2 from "../assets/Sibling2.png";
import sibling3 from "../assets/Sibling3.png";
import sibling4 from "../assets/Sibling4.png";

const people = [
  {
    name: "Bentley",
    imageUrl: sibling1,
  },
  {
    name: "Jackson",
    imageUrl: sibling2,
  },
  {
    name: "Bandit",
    imageUrl: sibling3,
  },
  {
    name: "Winston",
    imageUrl: sibling4,
  },
];

export default function Siblings() {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-medium tracking-tight text-[#000000] sm:text-4xl">
            Sibling
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt={person.name}
                src={person.imageUrl}
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-[#000000] ">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
