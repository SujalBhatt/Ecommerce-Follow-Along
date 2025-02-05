const Card = ({ product }) => {
    const imageUrl = `http://localhost:4000/uploads/${product.images[0]}`;
    console.log("Image URL:", imageUrl); // Add this line

    return (
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
        <img src={imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
        <p className="text-lg font-bold text-gray-700">${product.price}</p>
      </div>
    );
  };
  
  export default Card;

