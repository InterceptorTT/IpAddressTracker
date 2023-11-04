import Input from "./assets/components/input"
import { useState, useEffect }  from "react"
import Map from "./assets/components/map"


function App() {
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [data, setData] = useState([])

  useEffect(() => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v2/country,city?apiKey=at_QJ2gPl7clRxR4vvQldTnDaeBcAC9j&ipAddress=${ipAddress}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log("error"))
        .finally(() => setLoading(false));
  }, [loading, ipAddress])


  function handleButtonClick(e){
    e.preventDefault()
    setLoading(true);
  }

  function handleInputChange(e){
    setIpAddress(e.target.value);
    e.preventDefault();
  }
  console.log(data)
  return (
    <>
    <div>
        <Input
          onButtonClick={handleButtonClick}
          onInputChange={handleInputChange}
          setIpAddress={setIpAddress}
          ipAddress={ipAddress}
          data={data}
        />     
        <Map 
          data={data}
        />
    </div>
    </>
  )
}

export default App
