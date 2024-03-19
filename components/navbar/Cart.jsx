"use client";
import React from "react";
 
import { ShoppingBagIcon, ShoppingBasketIcon } from "lucide-react";
 
 
import Link from "next/link";
 
import Image from "next/image";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import { formatPrice } from "@/utils/cn";

const Cart = () => {
  const itemCount = 0;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
      <div className='flex items-center gap-2'>
        <ShoppingBasketIcon size={28} color='#009a7b' />
         
    </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 text-sm">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex ">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex ">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(2)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <Image src="/ec.png" fill alt="empty shopping cart hippo" />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
