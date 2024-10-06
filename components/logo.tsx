export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center p-1 bg-white">
      <div className="font-bold text-gray-800 font-mono text-xl">
        <span>Our </span>
        <span className="relative">
          <span>Sp</span>
          <svg
            className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2"
            width="15"
            height="30"
            viewBox="0 0 15 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 0C6 7.5 9 11.25 7.5 15C6 18.75 9 22.5 7.5 30"
              stroke="#EF4444"
              strokeWidth="2"
            />
          </svg>
          <span className="ml-3">lit</span>
        </span>
        <span> World</span>
      </div>
    </div>
  )
}1