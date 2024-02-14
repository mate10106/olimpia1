import React from "react";

const Main = () => {
  return (
    <div className="p=4 bg-stone-400 mt-2 p-4 rounded-lg">
      <h3>Rövidpályás gyorskorcsolya a téli olimpiai játékokon</h3>
      <p className="szoveg">
        A 2022. évi téli olimpiai játékokon a rövidpályás gyorskorcsolya
        versenyszámait a pekingi Fővárosi Fedett Stadionban rendezték február 5.
        és 16. között. A férfiaknak és a nőknek egyaránt 4–4 versenyszámban,
        illetve egy vegyes versenyszámban osztottak érmeket. A vegyes 2000
        méteres váltó először szerepelt a téli olimpiai játékok programjában.
        <span className="text-blue-900 font-bold underline">
          <a
            href="https://hu.wikipedia.org/wiki/R%C3%B6vidp%C3%A1ly%C3%A1s_gyorskorcsolya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rövidpályás gyorskorcsolya
          </a>
        </span>
      </p>
      <div className="flex flex-row">
        <div className="mr-2">
          <h3>Téli olimpia története</h3>
          <p className="szoveg">
            Az 1924. évi téli olimpiai játékok, később adott hivatalos nevén az
            I. téli olimpiai játékok egy több sportot magába foglaló nemzetközi
            sportesemény volt, melyet 1924. január 25. és február 5. között
            rendeztek meg a franciaországi Chamonix-ban. Hivatalosan Semaine
            Internationale des Sports d'Hiver (Télisportok Nemzetközi Hete)
            néven szerepelt az 1924. évi nyári olimpiai játékokkal, a Mont Blanc
            lábánál. Chamonix olimpiáját a Francia Olimpiai Bizottság rendezte
            meg, a várost a Nemzetközi Olimpiai Bizottság jelölte ki, mint az
            első téli olimpiai játékok házigazdáját. 1924-től egészen 1992-ig a
            téli olimpiákat a nyáriakkal megegyező években tartották
          </p>
          <img src="1924WOlympicPoster.jpeg" alt="kep" className="rounded-lg" />
          <p className="szoveg">
            Készítette: Auguste Matisse - precise immediate image source is
            unknown. The poster is also on display at the website of the
            IOC.,Közkincs:
            <span className="text-blue-900 font-bold underline">
              <a
                href="https://commons.wikimedia.org/w/index.php?curid=216754"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eredeti oldal
              </a>
            </span>
          </p>
        </div>
        <div>
          <h3>Rövid pályás gyorskorcsolya Magyarország</h3>
          <p className="szoveg">
            Magyarország a kínai Pekingben megrendezett 2022. évi téli olimpiai
            játékok egyik részt vevő nemzete volt. Az országot az olimpián 5
            sportágban 14 sportoló képviselte. Magyarország először szerzett
            egynél több érmet a téli olimpiai játékok történetében. Liu Shaoang
            Magyarország első egyéni téli olimpiai aranyérmét nyerte
          </p>
          <img
            src="magyar_rp_gyors_korcsolya.jpeg"
            alt="kep"
            className="border-4 rounded-lg"
          />
          <p className="szoveg">
            Maga a sportág 1992 óta szerepel az olimpiákon, és eddig 16 ország
            tudott érmet szerezni az azóta lebonyolított kilenc játékokon.
            Közülük a belgák most iratkoztak fel egy bronzéremmel. Az élen itt
            is Dél-Korea áll 26 arannyal és 53 éremmel, a kínaiaknak 12 aranyuk
            és 37 dobogós helyezésük, a kanadaiaknak 10 aranyuk és 37 medáliájuk
            van. Innentől kezdve viszont nagyon szoros a mezőny: az
            amerikaiaknak 4 aranyuk, az olaszoknak, a hollandoknak és
            Oroszországnak 3-3 olimpiai bajnoki címe van, és Liu Shaoang 500-as
            aranyával, 1000 méteres bronzával és a vegyes váltó harmadik
            helyével Magyarország az igen előkelő 8. helyre lépett előre a
            tizedikről, megelőzve Japánt és Ausztráliát is. A mieink négy éve
            iratkoztak fel a tabellára a férfiváltó aranyérmével.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
