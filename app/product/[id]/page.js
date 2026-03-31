async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  }
  
  export default async function ProductDetailPage({ params }) {
    // params.id chính là cái ID trên thanh địa chỉ
    const { id } = await params; 
    const product = await getProduct(id);
  
    if (!product) return <div className="p-10 text-center">Không tìm thấy sản phẩm!</div>;
  
    return (
      <div className="max-w-4xl mx-auto p-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-[500px]" />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {product.category}
          </p>
          <p className="text-4xl font-bold text-red-500">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <button className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition">
            Thêm vào giỏ hàng ngay
          </button>
        </div>
      </div>
    );
  }