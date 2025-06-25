import Link from "next/link";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Motorola Edge 50 neo",
    },
    {
      id: 2,
      name: "Samsung Galaxy Edge 50",
    },
    {
      id: 3,
      name: "Sony TV",
    },
    {
      id: 4,
      name: "Dell lattitude E-7430",
    },
  ];
  return (
    <>
      <p className="question">
        Q6. Create a list of items (e.g., products, articles) in your
        application. Implement dynamic routing to display details for each item
        when clicked. Create a route parameter that represents the item's ID in
        the URL (e.g., "/products/:id"). Fetch item details based on the route
        parameter and display them on the detail page. Add a "Go Back" button on
        the detail page to return to the list.
      </p>
      <div style={{display:"flex", marginLeft:"1rem", gap:"1rem"}}>
        {products.map((product, index) => (
          <p key={index}>
            <Link href={`/assignment-3/question-6/product/${product.id}`}>
              <button>{product.name}</button>
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
