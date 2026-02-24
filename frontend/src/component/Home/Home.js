import { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { CgMouse } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from "./ProductCard.js";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="iStore" />

          <div className="banner">
            <span className="blob b1" />
            <span className="blob b2" />
            <span className="blob b3" />
            <span className="noise" />
            <p>Welcome to iStore</p>
            <h1>FIND AMAZING PRODUCTS JUST BELOW</h1>

            <a href="#container">
              <button>
                Shop Now <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;