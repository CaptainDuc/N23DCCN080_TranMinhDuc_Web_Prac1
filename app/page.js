import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Link from "next/link"; // Bước 3: Đã import Link

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default async function Page() {
    const products = await getProducts(); 
      
    return (
      <>
        <Navbar /> 
        <main className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {products.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id} className="group">
                <div className="border p-4 rounded-lg shadow hover:border-blue-500 transition cursor-pointer h-full">
                  {/* Ảnh sp */}
                  <img src={item.image} alt={item.title} className="h-40 mx-auto object-contain group-hover:scale-105 transition-transform" />
                  
                  {/* Tên sp */}
                  <h2 className="font-bold mt-2 line-clamp-1 group-hover:text-blue-600">{item.title}</h2>
                  
                  {/* Giá tiền */}
                  <p className="text-red-500 font-semibold">${item.price}</p>
                  
                  {/* Mô tả */}
                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  
                  <button className="w-full bg-blue-600 text-white mt-3 py-2 rounded">
                    Chi tiết sản phẩm
                  </button>
                </div>
              </Link>

            ))}
          </div>
        </main>
      </>
    );
}