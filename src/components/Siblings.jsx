

export default function Siblings({ puppyDetail }) {
  return (
    <div className="mx-auto max-w-7xl sm:space-y-6 space-y-2.5 px-4 sm:px-0">
      <h2 className="sm:text-[28px] text-[24px] font-medium">Sibling</h2>
      <ul
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {puppyDetail?.siblings?.map((puppy, index) => (
          <li key={index} className="space-y-1.5 text-start">
            <img
              alt={puppy.name}
              src={window.$BackEndURL + puppy.profile_picture}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <h3 className="text-[18px] font-semibold">{puppy?.puppy_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
