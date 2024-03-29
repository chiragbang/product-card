import Image from 'next/image';
import "./Page.css"
import { CiSearch } from "react-icons/ci";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="left">
        <Image src="/shoe.png" alt="shoe" width={400} height={300} />
        <i className="fa fa-long-arrow-left"></i>
        <i className="fa fa-long-arrow-right"></i>
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <h1>Airmax</h1>
            <i className="fa fa-user"></i>
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className="details">
            <h3>Winter Collection</h3>
            <h2>Men Black Sneakers</h2>
            <h4><span className="fa fa-dollar"></span>150</h4>
            <h4 className="dis"><span className="fa fa-dollar"></span>200</h4>
          </div>
          <ul>
            <li>SIZE</li>
            <li className="bg">7</li>
            <li className="bg">8</li>
            <li className="bg">9</li>
            <li className="bg">10</li>
            <li className="bg">11</li>
          </ul>
          <ul>
            <li>COLOR</li>
            <li className="yellow"></li>
            <li className="black"></li>
            <li className="blue"></li>
          </ul>
          <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
          <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
