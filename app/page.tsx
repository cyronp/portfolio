"use client"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black font-sans">
      <div className="inline-flex gap-2">
      <h1>
        visitor@visitor-PC:~$
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input autoFocus className="focus:outline-none focus:ring-0 focus:border-transparent"></input>
      </form>
      </div>
    </div>
  );
}
