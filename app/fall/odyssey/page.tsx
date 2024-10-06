import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col text-center space-y-4 mt-4">
        <h1 className="text-4xl font-bold text-gray-900">
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
        <p className="text-xl text-gray-600 max-w-2xl">
          We rexamine the Odyssey though a lens focused on
          Odysseus' rhetoric, and that rhetoric's technological implications.
        </p>
      </div>
    </div>
  );
}
