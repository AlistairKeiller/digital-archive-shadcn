export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center p-1 bg-white">
      <div className="font-bold text-gray-800 font-mono text-xl">
        <span>Our </span>
        <span className="relative">
          <span>Sp</span>
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0C4 5 6 7.5 5 10C4 12.5 6 15 5 20"
              stroke="#EF4444"
              strokeWidth="1"
            />
          </svg>
          <span className="ml-2">lit</span>
        </span>
        <span> World</span>
      </div>
    </div>
  );
}
