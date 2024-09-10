import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex bg-amber-600 lg:text-lg p-4 gap-8 justify-center">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
