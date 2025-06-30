"use client";
import { useParams } from "next/navigation";
import products from "./products";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  
  const params = useParams();
  const router = useRouter();
  const productId = params.product;

  const myProduct = products.find((item) => item.id == productId);

  return (
    <>
      <p>{myProduct.name}</p>
      <p>{myProduct.type}</p>
      <img src={myProduct.image} alt="image" />
      <p>{myProduct.description}</p>
      <p>Rs {myProduct.price}</p>
      <button onClick={() => router.push("/assignment-3/question-6")}>
        Go Back
      </button>
    </>
  );
};

export default ProductPage;
