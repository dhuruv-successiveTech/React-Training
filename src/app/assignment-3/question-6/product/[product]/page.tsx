"use client";
import { useParams } from "next/navigation";
import products from "./products.json";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductInterFace {
  id:number;
  name:string;
  type:string;
  description:string;
  price:number;
  image:string;
}

const ProductPage = () => {
  
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.product);

  const myProduct = products?.find((item:ProductInterFace) => item.id == productId);

  return (
    <>
      <p>{myProduct?.name}</p>
      <p>{myProduct?.type}</p>
      <Image src={myProduct?.image || ""} height={250} width={250} alt="image" />
      <p>{myProduct?.description}</p>
      <p>Rs {myProduct?.price}</p>
      <button onClick={() => router.push("/assignment-3/question-6")}>
        Go Back
      </button>
    </>
  );
};

export default ProductPage;
