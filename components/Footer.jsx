import axios from "axios";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [alldatas, setAllDatas] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/erem").then((resp) => {
        setAllDatas(resp.data);
        console.log(setAllDatas);
      });
    } catch (erorr) {
      console.error(erorr);
    }
  }, []);

  return (
    <div className="">
      <div>
        <h2>Éremszerző helyek listája:</h2>
      </div>
      <div>
        <h2>Magyar éremszerzők listája</h2>
        <table>
          <thead>
            <tr>
              <td className="title">Helyezés</td>
              <td className="title">Ország</td>
              <td className="title">Arany</td>
              <td className="title">Ezüst</td>
              <td className="title">Bronz</td>
            </tr>
          </thead>
          <tbody>
            {alldatas.map((items, index) => (
              <tr key={index}>
                <td>{items.helyezes}</td>
                <td>{items.orszag}</td>
                <td>{items.arany}</td>
                <td>{items.ezust}</td>
                <td>{items.bronz}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
