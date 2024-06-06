import Link from "next/link";

async function Pg({ params , searchParams }: { params: { id: string } , searchParams : { location : string } }) {

  const { location } = searchParams
  const { id } = params

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/sector/${id}?location=${location}`);
  const data = await response.json();
  let pgs = data.pgs;

  return (
    <div className="w-4/5 mx-auto mt-20">
      <h1 className="text-3xl text-center font-medium mb-10">Total <span className="text-blue-500">{ pgs?.length }</span> Pg in Sector <span className="bg-blue-600 px-2 rounded-md">{params.id}</span> </h1>

      {pgs?.map((item: any) => {
        return (
          <Link
            href={`/pg/${item._id}`}
            key={item._id}
            className="flex p-5 py-8 border-b-2 w-full border-zinc-600 hover:bg-zinc-900 cursor-pointer"
          >
            <div
              className={
                "h-16 w-16 text-center pt-4 text-lg font-semibold md:rounded " +
                (item.type == "pg"
                  ? "bg-blue-200 text-blue-700"
                  : "bg-purple-200 text-purple-700")
              }
            >
              {item.type}
            </div>
            <div className="p-2 w-full gap-3 ms-2">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <div className="flex justify-between text-sm text-zinc-400 font-medium">
                <p>Owner : {item.owner}</p>
                <div className="text-sm text-right flex gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  {item.location}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Pg;
