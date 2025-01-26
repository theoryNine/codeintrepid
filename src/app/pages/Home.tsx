import FloatingSquare from "../components/FloatingSquare/FloatingSquare";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <FloatingSquare location="top" />
      <div className="flex flex-col md:flex-row md:items-start w-full">
        <div className="flex-1 p-12 pt-24 lg:p-0 lg:pt-0 m flex justify-center md:h-screen items-center mb-8 md:mb-0">
          <div>
            <h1 className="text-white text-5xl font-inter">codeIntrepid</h1>
            <h2 className="text-white text-2xl font-inter mt-2">by ansel</h2>
          </div>
        </div>
        <div className="max-w-2xl p-6 md:p-12">
          <h2 className="font-bold text-white mb-2">What is this place?</h2>
          <p className="text-white">
            It's my sandbox; my corner of the internet. A place to leave things
            I like, thoughts I have, worlds I find in cyberspace. New and under
            construction. Enjoy your stay.
          </p>
        </div>
      </div>
      <FloatingSquare location="bottom" />
    </div>
  );
}
