interface Product {
  price: number
  id: number
  name: string
}

interface Items {
  products: Product[]
  sum: number
  promotion: number
}

const ShoppingCart: React.FC<Items> = ({products, sum, promotion}) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <>
            <li>{product.name}</li>
            <li>{product.id}</li>
            <li>{product.price}</li>
            <hr/>
          </>
        ))}
      </ul>
      <p>Sum: {sum}</p>
      <p>Promotion: {promotion}</p>
    </>
  );
};

export default ShoppingCart;