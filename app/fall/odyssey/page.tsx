import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons

export default function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)] bg-gray-100">
      <div className="mt-6 mx-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Duality of Odyssey: <br />
          <span className="relative">
            <span>Techn</span>
            {/* Gear for "o" */}
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
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Burdon of Proof
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          tests
        </p>
      </div>
    </div>
  );
}
