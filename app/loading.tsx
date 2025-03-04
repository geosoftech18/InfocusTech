import { ScaleLoader } from "react-spinners";

const Loader: React.FC = () => {
  // const ScaleLoader = data.ScaleLoader;
  return (
    <div className="flex justify-center items-center h-screen">
      <ScaleLoader color="#e60000" height={48} radius={0} width={10} />;
    </div>
  );
};

export default Loader;
