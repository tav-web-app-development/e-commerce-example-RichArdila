import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Business",
    description: "Decoration for all events in your company.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "School Degrees",
    description: "Decoration for your school degrees.",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Birthday",
    description: "Decorations for your birthday and other special days.",
    image: "/images/product3.jpg",
  },
];

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <div className="w-full h-96 relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
