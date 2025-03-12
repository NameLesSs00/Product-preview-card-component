import Image from "next/image";
import productImage from "/app/images/image-product-mobile.jpg";
import productImageDeskTop from "@/app/images/image-product-desktop.jpg"
import cartIcon from "/app/images/icon-cart.svg";
import { cardData } from "../data/dataFCard";
//done?
interface Product {
  type: string;
  title: string;
  description: string;
  old_price: string;
  price: string;
}

const product: Product = cardData[0];
export const Card = () => {
  return (
    <div className="bg-white rounded-xl sm:flex max-w-[375px] sm:max-w-[600px] ">
      <Image
        className="rounded-t-lg sm:hidden"
        src={productImage}
        alt="A photo of the product"
        // width={500}
        // height={400}
      />
      <Image
        className="rounded-l-lg hidden sm:block"
        src={productImageDeskTop}
        alt="A photo of the product"
        // width={500}
        // height={400}
      />
      <div className="p-4 font-montserrat m-auto ">
        <h3 className="text-[hsl(228,12%,48%)] text-sm mb-1 ">
          {product.type.split("").join(" ").toUpperCase()}
        </h3>
        <h1 className="text-[2rem] font-bold text-[hsl(212,21%,14%)] font-fraunces">
          {product.title}
        </h1>
        <p className="text-[hsl(228,12%,48%)] my-3">{product.description}</p>
        <p className="text-[2rem] font-semibold text-green-700 flex items-center font-fraunces">
          ${product.price}
          <span className="line-through text-[hsl(228,12%,48%)] text-sm ml-4">
            ${product.old_price}
          </span>
        </p>

        <button className="w-[100%] h-[2.5rem] bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,42%,18%)] text-white flex items-center justify-center gap-2 rounded-lg mx-auto mt-3">
          <Image
            src={cartIcon}
            alt="An icon of a cart"
            width={16}
            height={16}
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
