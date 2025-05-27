import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CarFront, Heart } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"}>
          <Image
            src={"/logo1.png"}
            alt="vehicleq logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">Admin</span>
          )}
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/saved-cars">
              <Button>
                <Heart size={18} />
                <span className="hidden md:inline">Saved Cars</span>
              </Button>
            </Link>
            <Link href="/my-reservations">
              <Button variant="outline">
                <CarFront size={18} />
                <span className="hidden md:inline">My Reservations</span>
              </Button>
            </Link>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
