import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    //used to display the loader when the api is fetching data
    <div className="app">
      <Loader type="RevolvingDot" color="grey" height={200} width={200} />
    </div>
    // <img
    //   // {textAlign: center}

    //   //   className="app"
    //   justify-content="center"
    //   height="500px"
    //   width="850px"
    //   src="https://i.pinimg.com/originals/62/79/ce/6279ce4af4acbcbffd9a7023eeec9675.gif"
    // ></img>
  );
};
export default LoaderComp;
