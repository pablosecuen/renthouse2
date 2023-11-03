import Card from "@/app/components/card";
import CardContainer from "@/app/components/card/card-container";
import Filters from "@/app/components/form/filters";
import SearchForm from "@/app/components/form/search-form";
import React from "react";

function Propiedades() {
  return (
    <div className="min-h-screen pt-24  flex justify-center px-8">
      <div className=" w-1/2 flex flex-wrap">
        <nav className="flex flex-col w-full">
          <h2 className="tracking-widest py-8 text-xl font-semibold ">PROPIEDADES</h2>
          <SearchForm />
          <div className="w-full">
            <Filters />
          </div>
        </nav>
        <CardContainer />
      </div>
      <aside className="w-1/2 flex items-center justify-center"> aca va el mapa</aside>
    </div>
  );
}

export default Propiedades;
