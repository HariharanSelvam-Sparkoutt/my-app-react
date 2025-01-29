import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <div className="Home">
      <div>
        <>
          <h1>React Tutorial</h1>
          <h2>Home</h2>
          <button onClick={handleNavigate}>Products</button>
        </>
      </div>
    </div>
  );
}
export default Home;
