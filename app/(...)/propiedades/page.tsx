import Card from "@/app/components/card";
import Filters from "@/app/components/form/filters";
import SearchForm from "@/app/components/form/search-form";
import React from "react";

function Propiedades() {
  return (
    <div className="min-h-screen pt-24  flex justify-center px-8">
      <div className="border w-1/2 flex flex-wrap">
        <nav className="flex flex-col">
          <h2 className="tracking-widest py-8 text-xl font-semibold">PROPIEDADES</h2>
          <SearchForm />
          <div>
            <Filters />
          </div>
        </nav>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <aside className="w-1/2 border"></aside>
    </div>
  );
}

export default Propiedades;
