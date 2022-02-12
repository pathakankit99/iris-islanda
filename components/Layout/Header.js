import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ConnectToWallet from "../ConnectToWallet"
import { useSelector, useDispatch } from "react-redux";
export default function Header({ toggleDark, handleModeChange }) {
  return (
    <>
      <nav id="header" className="dark:text-white flex justify-between items-center">
        <div>
          {/* {toggleDark ? "Dark " : "Light "} Mode
          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={() => handleModeChange()}
          >
            {toggleDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
          <h4 className="text-2xl uppercase">Islanda</h4>
        </div>
        <div className="dark:text-white text-2xl flex items-center">
          <a href="#"
          target="_blank"
          referrerPolicy="no-referrer"
          >
            <FaTwitter />
          </a>
          <a href="#"
          target="_blank"
          referrerPolicy="no-referrer"
           className="pl-3">
            <FaDiscord />
          </a>
        </div>
      </nav>
      <ConnectToWallet/>
    </>
  );
}
