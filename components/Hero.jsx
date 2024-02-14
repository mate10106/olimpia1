import React from "react";

const Hero = () => {
  return (
    <div className="mt-6 flex flex-col items-center ">
      <h2 className="text-2xl font-bold">Kinai téli olimpia játékos</h2>
      <img
        src="2022_Winter_Olympics_logo.svg"
        alt="kep"
        className="mt-7 border border-slate-500 p-1 rounded-lg"
      />
      <p className="mt-2">
        <span className="cursor-pointer text-sky-800 underline font-serif">
          beijing2022.cn
        </span>
        , Public domain, via Wikimedia Commons
      </p>
      <p className="mt-4">
        A XXIV. téli olimpiai játékokat 2022. február 4. és február 20. között
        rendezték a kínai Pekingben. A rendező várost a 128. IOC gyűlésen
        választotta ki a Nemzetközi Olimpiai Bizottság 2015. július 31-én a
        malajziai Kuala Lumpurban. A 2022-es téli olimpiának 25 helyszíne van. A
        bázis Pekingben található, amely otthont ad például a jégkorong, a
        gyorskorcsolya, a curling versenyeknek. A 2022. február 4. és 20. között
        zajló pekingi téli olimpiai játékok egyetlen új, a játékokra emelt
        állandó helyszíne az Ice Ribbon, azaz Jégszalag. Peking a Kínai
        Népköztársaság fővárosa, négy tartományi jogú városának egyike, a
        Pekingi főegyházmegye érseki székvárosa. Pekinget északról, nyugatról,
        délről és kis részben keletről Hopej tartomány határolja, míg
        délkeletről Tiencsin tartománnyal szomszédos.
      </p>
    </div>
  );
};

export default Hero;
