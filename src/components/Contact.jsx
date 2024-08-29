import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="flex flex-col items-center border-b border-neutral-600  w-full">
      <h1 className="mx-10 my-10 text-center  text-4xl tracking-tight w-full">
        Get <span className="text-neutral-500">In</span> Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-xl">Email : {CONTACT.email}</p>
        <p className="my-4 text-xl">Mob : {CONTACT.phoneNo}</p>
        <p className="my-4 text-xl">Address : {CONTACT.address}</p>
      </div>
    </div>
  );
}

export default Contact;
