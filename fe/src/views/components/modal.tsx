import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

export interface IModal {
  children: React.ReactNode;
  title: string;
  description: string;
  onOpenChange(): void;
  isOpen?: boolean;
}

export function Modal({
  children,
  title,
  description,
  onOpenChange,
  isOpen = false,
}: IModal) {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}
