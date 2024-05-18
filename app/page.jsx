import * as React from "react";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">

      <div className="flex justify-between max-w-4xl w-full p-4">
        <div className="text-slate-200 p-4">
          <h1 className="font-sans font-bold text-4xl mt-9">Kavin Sankar</h1>
          <h2 className="font-sans text-l mt-2">Senior CS Student</h2>
          <p className="font-sans text-slate-400 text-sm mt-4">
            Small one sentence bio goes here.
          </p>
        </div>

        <div className="font-sans p-4 max-w-md">
          <div className="font-sans text-sm text-slate-400 mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
