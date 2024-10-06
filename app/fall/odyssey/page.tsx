import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons

export default function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)] bg-gray-100">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Duality of Odyssey: <br />
          <span className="relative">
            <span>Techn</span>
            {/* Rotating gear */}
            <span className="inline-block">
              <FaCog className="inline-block" />
            </span>
            <span>logy</span>
          </span>
          &nbsp;&&nbsp;
          <span className="relative">
            <span>W</span>
            {/* Lightbulb for "i" */}
            <span className="inline-block">
              <FaLightbulb className="" />
            </span>
            <span>t</span>
          </span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We rexamine the Odyssey though a lens focused on<br />
          Odysseus' rhetoric, and that rhetoric's technological implications.
        </p>
      </div>
    </div>
  );
}
