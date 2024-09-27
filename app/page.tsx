/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Transaction,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Keypair,
  sendAndConfirmTransaction,
  Connection,
  clusterApiUrl,
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { EventNew } from "@/program/program";
import { anchorProgram } from "@/program/contract";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { BN } from "bn.js";
import { Wallet } from "@coral-xyz/anchor";
export default function Home() {
  const wallet = useAnchorWallet();
  const { publicKey, wallets, sendTransaction } = useWallet();
  const program = anchorProgram(wallet as Wallet);

  async function initializeEvent() {
    const eventName = "Test Event";
    const initialDate = new anchor.BN(Math.floor(Date.now() / 1000));

    const connection = new Connection(
      "https://devnet.helius-rpc.com/?api-key=667d78f4-a39a-4588-8bcf-c7c892347ae2"
    );
    const transaction = new Transaction();

    const [eventPDA] = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("event_new"), publicKey!.toBuffer(), Buffer.from(eventName)],
      program.programId
    );
    console.log("eventPDA", eventPDA.toBase58());
    console.log("public key", publicKey);
    console.log("system program", anchor.web3.SystemProgram.programId);

    const ix = await program.methods
      .initializeEvent(eventName, initialDate)
      .accounts({
        event: eventPDA,
        user: publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      } as never)
      .instruction();

    console.log("instruction added :");
    console.log("instruction", ix);
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = publicKey!;
    transaction.add(ix);
    const signTx = await wallet?.signTransaction(transaction);
    const serialized_transaction = await signTx?.serialize();
    console.log("Here's the transaction", serialized_transaction);

    const sig = await connection.sendRawTransaction(serialized_transaction!);
    console.log("signature is : ", sig);
    console.log("public key detected", publicKey);
    console.log("event created");
  }

  async function updateEvent() {
    const eventName = "Test Event";
    const initialDate = new anchor.BN(Math.floor(Date.now() / 1000));
    const connection = new Connection(
      "https://devnet.helius-rpc.com/?api-key=667d78f4-a39a-4588-8bcf-c7c892347ae2"
    );
    const transaction = new Transaction();

    const [eventPDA] = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("event_new"), publicKey!.toBuffer(), Buffer.from(eventName)],
      program.programId
    );
    console.log("eventPDA", eventPDA.toBase58());
    console.log("public key", publicKey);
    console.log("system program", anchor.web3.SystemProgram.programId);
    // Update the event date
    const newDate = new anchor.BN(initialDate.toNumber() + 86400); // Add one day
    const ix = await program.methods
      .updateEvent(newDate)
      .accounts({
        event: eventPDA,
        user: publicKey,
      } as never) // Use 'as any' to bypass TypeScript checking
      .instruction();

    console.log("instruction added :");
    console.log("instruction", ix);
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = publicKey!;
    transaction.add(ix);
    const signTx = await wallet?.signTransaction(transaction);
    const serialized_transaction = await signTx?.serialize();
    console.log("Here's the transaction", serialized_transaction);

    const sig = await connection.sendRawTransaction(serialized_transaction!);
    console.log("signature is : ", sig);
    console.log("public key detected", publicKey);
    console.log("event updated");

    const eventAccount = await program.account.event.fetch(eventPDA);
    console.log("Event account", eventAccount.date.toNumber());
    console.log("Event account", eventAccount.name);
    console.log("Event account", eventAccount.attendees);
  }

  async function addAttendee() {
    const eventName = "Test Event";
    const initialDate = new anchor.BN(Math.floor(Date.now() / 1000));
    const connection = new Connection(
      "https://devnet.helius-rpc.com/?api-key=667d78f4-a39a-4588-8bcf-c7c892347ae2"
    );
    const transaction = new Transaction();

    const [eventPDA] = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("event_new"), publicKey!.toBuffer(), Buffer.from(eventName)],
      program.programId
    );
    console.log("eventPDA", eventPDA.toBase58());
    console.log("public key", publicKey);
    console.log("system program", anchor.web3.SystemProgram.programId);
    const ix = await program.methods.addAttendee()
    .accounts({
      event: eventPDA,
      user:publicKey,
    } as never)  // Use 'as any' to bypass TypeScript checking
    .instruction();

    console.log("instruction added :");
    console.log("instruction", ix);
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = publicKey!;
    transaction.add(ix);
    const signTx = await wallet?.signTransaction(transaction);
    const serialized_transaction = await signTx?.serialize();
    console.log("Here's the transaction", serialized_transaction);

    const sig = await connection.sendRawTransaction(serialized_transaction!);
    console.log("signature is : ", sig);
    console.log("public key detected", publicKey);
    console.log("attendee added");

    const eventAccount = await program.account.event.fetch(eventPDA);
    console.log("Event account", eventAccount.date.toNumber());
    console.log("Event account", eventAccount.name);
    console.log("Event account", eventAccount.attendees);
  }

  function printProgramId() {
    console.log("Program ID", program.programId.toBase58());
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={() => initializeEvent()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Event
          </button>
          <button
            onClick={() => printProgramId()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Print Program ID
          </button>
          <button
            onClick={() => updateEvent()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Event
          </button>
          <button
            onClick={() => addAttendee()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          > 
            Add Attendee
          </button>
        </div>
      </div>
    </>
  );
}
