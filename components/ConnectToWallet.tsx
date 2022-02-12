import { useEffect, useMemo, useState } from "react";

import * as anchor from "@project-serum/anchor";

// import { existsOwnerSPLToken, getNFTsForOwner } from "../utils/candyMachine";
// import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
// import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
// import useWalletNfts from "../hooks/useWalletNFTs";
import { useDispatch } from "react-redux";
export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}
function ConnectToWallet(props: HomeProps) {
    const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
    const connection = new anchor.web3.Connection(rpcHost);
  const [yourSOLBalance, setYourSOLBalance] = useState<number | null>(null);
  const dispatch = useDispatch();
  const wallet = useWallet();
  //   const [isLoading,nfts, isSPLExists] = useWalletNfts(props);
  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  useEffect(() => {
    (async () => {
      if (!anchorWallet) {
        console.log("disconnected");
        dispatch({
          type: "WALLET_ID",
          payload: null,
        });
        dispatch({
          type: "SETNFT",
          payload: null,
        });

        return;
      }
      //  console.log(anchorWallet, "anchorWallet");
      if (anchorWallet?.publicKey) {
        const balance = await connection.getBalance(
          anchorWallet.publicKey
        );
        dispatch({
          type: "WALLET_ID",
          payload: anchorWallet?.publicKey?.toString(),
        });
        dispatch({
          type: "BALANCE",
          payload: balance/1000000000,
        });
      }

      //  if (props?.connection && anchorWallet?.publicKey) {
      //    const nftsForOwner = await getNFTsForOwner(
      //      props.connection,
      //      anchorWallet?.publicKey
      //    );

      //    console.log(nftsForOwner, "NFTsForOwner");
      //  }

      //setNfts(nftsForOwner as any);
    })();
  }, [anchorWallet, props.connection]);

  //   useEffect(() => {
  //     if (nfts?.length) {
  //       dispatch({
  //         type: "SETNFT",
  //         payload: nfts,
  //       });
  //       // console.log(nfts,'nfts added')
  //     }
  //   },[nfts])

  return <></>;
}

export default ConnectToWallet;
