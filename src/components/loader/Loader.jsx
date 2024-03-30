import { RingLoader } from "react-spinners";
// npm i react-spinners --save go to official website to check out more loading shapes

const Loader = () => {
  return (
   <div className="loader d-flex justify-content-center align-items-center vh-100">
      <div className="row ">
        <div className="col-12">
          <RingLoader
            color="rgba(0, 210, 123, 0.7)"
            loading
            size={60}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

