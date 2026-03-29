import cartoonImg from "../assets/cartoon.png";
import realImg from "../assets/profile.jpg";

export function ProfileFlip() {
  return (
    <div 
      className="relative mx-auto w-[280px] sm:w-[340px] lg:w-[400px] group"
      style={{ perspective: "1000px" }}
    >

      <div 
        className="relative w-full aspect-square duration-700 transition-transform group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >

        <div 
          className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-lg bg-gray-900"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        >
          <img
            src={cartoonImg}
            alt="Krishna Cartoon"
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-xl bg-gray-900"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img
            src={realImg}
            alt="Krishna Sharma"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      <p className="text-center mt-3 text-xs text-gray-400">
        Hover image to flip
      </p>
    </div>
  );
}