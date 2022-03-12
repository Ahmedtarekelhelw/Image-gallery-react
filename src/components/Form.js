import React from "react";

export default function Form({ setText, setAmount }) {
  return (
    <form>
      <input
        type="text"
        name="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search For Your Images"
      />
      <input
        type="number"
        name="amount"
        defaultValue="5"
        onChange={(e) => {
          if (e.target.value < 4) {
            e.target.value = 4;
          }
          setAmount(e.target.value);
        }}
        placeholder="Number of Your Images"
      />
    </form>
  );
}
