import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:5000/api/products"
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError]= useState("");
  const fetchProduct = () => {
    setLoading(true);
    setError("");
    try {
      const respose = await fetch(API_URL);
      if(!respose.ok) throw new Error("ไม่สามารถดึงข้อมูลได้")
      const data = await respose.json();

  } catch (error) {
    setError(error.message)
  }
};
  useEffect(() => {

  })

  return (
    <>
      <button 
      className="text-3xl font-bold underline"
      className="gb-indigo-600 hover:bg-indigo-700"
      className="font-medium py-2 px-4 rounded-lg transition"
      >
        บันทึกข้อมูล</button>
    </>
  );
}

export default App;
