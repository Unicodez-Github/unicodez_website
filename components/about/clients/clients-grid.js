import Image from "next/image";

const clients = [
  {
    id: 0,
    title: "American Unit",
    image: "/images/clients/american-unit.png",
  },
  {
    id: 1,
    title: "Cuboid IT Solutions",
    image: "/images/clients/cuboid.png",
  },
  {
    id: 2,
    title: "Prione Business Services",
    image: "/images/clients/prione.webp",
  },
  {
    id: 3,
    title: "Talent Gravity",
    image: "/images/clients/talent-gravity.png",
  },
  {
    id: 4,
    title: "Unicorn Chess Academy",
    image: "/images/clients/unicornchessacademy.png",
  },
  {
    id: 5,
    title: "Yash Technologies",
    image: "/images/clients/yashtechnologies.png",
  },
  {
    id: 6,
    title: "Express",
    image: "/images/clients/express.png",
  },
  // {
  //   id: 7,
  //   title: "Cogito",
  //   image: "/images/clients/cogito.png",
  // },
];

export default function ClientsGrid() {
  return (
    <div className="w-full">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-gray-200 border-dashed">
          {clients.map((client) => {
            return (
              <div className={`py-10 ${client.id !== 3 && client.id !== 7 && "border-r border-gray-200 border-dashed"}`} key={client.id}>
                <div className="relative md:w-[230px] md:h-[92px] mx-auto px-6 md:px-0">
                  <Image
                    src={client.image}
                    alt={client.title}
                    title={client.title}
                    layout={"responsive"}
                    objectFit="contain"
                    objectPosition={"center"}
                    height={"30%"}
                    width={"100%"}
                    className={`${client.id === 6 && "invisible"}`} // Remove this block to show actual content. This is to keep the grid divider border active
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
