"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
   <div className="m-10">
    <SignedOut>
      <SignInButton />             
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    
   </div>
  );
}
