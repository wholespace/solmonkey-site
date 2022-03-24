import { FC, useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

import { ConnectContainer } from "./styled";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
};

interface Connect2PhantomType {
  handle: Function;
}

const Connect2Phantom: FC = () => {
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      if (solWindow?.solana?.isPhantom) {
        setProvider(solWindow.solana);
        setWalletAvail(true);
        // Attemp an eager connection
        solWindow.solana.connect({ onlyIfTrusted: true });
      }
    }
  }, []);

  useEffect(() => {
    provider?.on("connect", (publicKey: PublicKey) => {
      console.log(`connect event: ${publicKey}`);
      setConnected(true);
      setPubKey(publicKey);
      // handle(true);
    });
    provider?.on("disconnect", () => {
      console.log("disconnect event");
      setConnected(false);
      setPubKey(null);
    });
  }, [provider]);

  // const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (
  //   event
  // ) => {
  //   // console.log(`connect handler`);
  //   provider?.connect().catch((err) => {
  //     console.error("connect ERROR:", err);
  //   });
  //   // handle(true);
  // };

  const connectHandler = () => {
    provider?.connect().catch((err) => {
      console.error("connect ERROR:", err);
    });
  };

  // const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (
  //   event
  // ) => {
  //   // handle(false);
  //   // console.log("disconnect handler");
  //   provider?.disconnect().catch((err) => {
  //     console.error("disconnect ERROR:", err);
  //   });
  // };

  const disconnectHandler = () => {
    provider?.disconnect().catch((err) => {
      console.error("disconnect ERROR:", err);
    });
  };

  return (
    <ConnectContainer>
      {walletAvail ? (
        <>
          {connected ? (
            <div onClick={disconnectHandler}>DISCONNECT WALLET </div>
          ) : (
            <div onClick={connectHandler}>CONNECT WALLET</div>
          )}
          {/* {connected ? <p>Your public key is : {pubKey?.toBase58()}</p> : null} */}
        </>
      ) : (
        <>
          <p>
            Opps!!! Phantom is not available. Go get it{" "}
            <a href="https://phantom.app/">https://phantom.app/</a>.
          </p>
        </>
      )}
    </ConnectContainer>
  );
};

export default Connect2Phantom;
