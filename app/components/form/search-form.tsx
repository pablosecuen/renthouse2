"use client";
import React, { ChangeEvent, useState } from "react";

interface FormData {
  selectedDate: string;
  selectedPeople: string;
  selectedDuration: string;
  selectedPropertyType: string;
}
function SearchForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    selectedDate: "",
    selectedPeople: "",
    selectedDuration: "",
    selectedPropertyType: "",
  });
  const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form className="flex gap-4">
      <div className="flex flex-col">
        <label htmlFor="dateInput">Fecha de estadia:</label>
        <input
          type="date"
          id="dateInput"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleInputChange}
          className="border rounded-full px-4 py-1"
        />
      </div>

      <div className="flex flex-col ">
        <label htmlFor="peopleSelect">Personas:</label>
        <select
          id="peopleSelect"
          name="selectedPeople"
          value={formData.selectedPeople}
          onChange={handleInputChange}
          className="border rounded-full px-4 py-1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="durationSelect">Días:</label>
        <select
          id="durationSelect"
          name="selectedDuration"
          value={formData.selectedDuration}
          onChange={handleInputChange}
          className="border rounded-full px-4 py-1"
        >
          {[...Array(30)].map((_, index) => (
            <option key={index + 1} value={(index + 1).toString()}>
              {index + 1} días
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="propertyTypeSelect">Tipo de propiedad:</label>
        <select
          id="propertyTypeSelect"
          name="selectedPropertyType"
          value={formData.selectedPropertyType}
          onChange={handleInputChange}
          className="border rounded-full px-4 py-1"
        >
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="salon">Salón</option>
          <option value="entretenimiento">Entretenimiento</option>
        </select>
      </div>
      <div className="h-full flex items-end">
        <button className="rounded-full px-4 h-8 mb-1 bg-[#a1d1cf]">Buscar</button>
      </div>
    </form>
  );
}

export default SearchForm;
