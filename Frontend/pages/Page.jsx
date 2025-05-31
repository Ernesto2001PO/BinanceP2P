import React from "react";
import Menu from "../components/Menu";
import { useAuth } from "./../hook/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreditCardMockup from "../components/CreditCardMockup";
import { NavLink } from "react-router-dom";
const Page = () => {





  return (
    <>
      <Menu />

      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", padding: "20px"
      }}>
        <h1 style={{ color: "white" }}>Bienvendio a su Billetera Virtual</h1>

        <CreditCardMockup />

      </div>
    </>
  );
};

export default Page;
