import React from "react";

// components

import CardClients from "../../components/Cards/CardClients.js";
import CardProfile from "../../components/Cards/CardProfile.js";

export default function Clients() {
  return (
    <>
      <div className="flex flex-wrap h-screen">
        <div className="w-full lg:w-12/12 px-4">
          <CardClients />
        </div>
        
      </div>
    </>
  );
}
