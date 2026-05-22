export default function NavLinks() {
  return (
    <ul className="flex items-center gap-8 text-[17px] font-medium">

      <li className="text-cyan-400 relative cursor-pointer">
        Home

        <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
      </li>

      <li className="hover:text-cyan-400 transition cursor-pointer">
        Features
      </li>

      <li className="hover:text-cyan-400 transition cursor-pointer">
        About
      </li>

      <li className="hover:text-cyan-400 transition cursor-pointer">
        How It Works
      </li>

      <li className="hover:text-cyan-400 transition cursor-pointer">
        Testimonials
      </li>

    </ul>
  );
}