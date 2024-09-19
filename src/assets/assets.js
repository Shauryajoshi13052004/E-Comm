import logo from "./logo.png";
import cart from "./cart.png";
import menu from "./menu.png";
import search from "./search.png";
import user from "./user.png";
import back from "./back.png";
import p_img1 from "./p_img1.png";
import p_img8 from "./p_img8.png";
import p_img34 from "./p_img34.png";

export const assets = {
  logo,
  cart,
  menu,
  search,
  user,
  back,
};

export const products = [
  {
    _id: "1",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img1, p_img8],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "2",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 38,
    image: [p_img34],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL", "XXL"],
    date: 1716634345449,
    bestseller: true,
  },
  {
    _id: "3",
    name: "Kids' Cotton T-Shirt",
    description:
      "A soft and comfortable cotton t-shirt for kids, available in various colors.",
    price: 50,
    image: ["k_img1", "k_img2"],
    category: "Kids",
    subCategory: "T-Shirts",
    size: ["XS", "S", "M"],
    date: 1716634345450,
    bestseller: true,
  },
  {
    _id: "4",
    name: "Women's Denim Jacket",
    description:
      "A stylish denim jacket for women, perfect for layering over casual outfits.",
    price: 200,
    image: ["w_img1", "w_img2"],
    category: "Women",
    subCategory: "Jackets",
    size: ["S", "M", "L"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    _id: "5",
    name: "Men's Leather Wallet",
    description:
      "A sleek and durable leather wallet for men, with multiple card slots and compartments.",
    price: 80,
    image: ["m_wallet_img1", "m_wallet_img2"],
    category: "Men",
    subCategory: "Accessories",
    size: ["One Size"],
    date: 1716634345452,
    bestseller: true,
  },
  {
    _id: "6",
    name: "Kids' Sneakers",
    description:
      "Comfortable and stylish sneakers for kids, available in various sizes.",
    price: 120,
    image: ["k_sneakers_img1", "k_sneakers_img2"],
    category: "Kids",
    subCategory: "Footwear",
    size: ["28", "30", "32", "34"],
    date: 1716634345453,
    bestseller: false,
  },
];
