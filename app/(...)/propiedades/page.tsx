import CardContainer from "@/app/components/card/card-container";
import Filters from "@/app/components/form/filters";
import SearchForm from "@/app/components/form/search-form";
import React from "react";

function Propiedades() {
  return (
    <div className="min-h-screen h-full pt-24 flex-col md:flex-row flex justify-center px-8">
      <div className=" md:w-1/2 flex flex-wrap ">
        <nav className="flex flex-col w-full">
          <h2 className="tracking-widest py-8 text-xl font-semibold ">PROPIEDADES</h2>
          <SearchForm />
          <div className="w-full">
            <Filters />
          </div>
        </nav>
        <div className="py-10">
          {" "}
          <CardContainer />
        </div>
      </div>
      <aside className="md:w-1/2 md:flex items-center justify-center hidden"> aca va el mapa</aside>
    </div>
  );
}

export default Propiedades;
