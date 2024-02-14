import axios from "axios";
import { useEffect, useState } from "react";

export const Locations = () => {
  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/helyszin").then((response) => {
        setAllData(response.data);
        console.log(setAllData);
      });
    } catch (erorr) {
      console.error(response.erorr);
    }
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-bold text-4xl mt-4 mb-6">Helyszinek:</h1>
      <table>
        <thead>
          <tr>
            <td className="title">Város</td>
            <td className="title">Sportág</td>
            <td className="title">Helyszin</td>
            <td className="title">Versenyszámok</td>
          </tr>
        </thead>
        <tbody>
          {alldata.map((items, index) => (
            <tr key={index}>
              <td>{items.varos}</td>
              <td>{items.sportagneve}</td>
              <td>{items.helyszin}</td>
              <td>{items.versenyszamok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
