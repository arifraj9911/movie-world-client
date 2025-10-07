"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function DeleteConfirmModal({
  children,
  onDelete,
}: {
  children: React.ReactNode;
  onDelete: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-lg overflow-y-auto bg-gradient-to-br from-slate-900 to-blue-950 border-blue-800 text-white">
        <DialogHeader className="!text-center">
          <DialogTitle className="text-2xl">Are You Sure!</DialogTitle>
          <DialogDescription>
            Data will be permanently deleted!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center gap-2">
          <DialogClose asChild>
            <Button
              className="w-1/4 !outline-none focus-visible:ring-0 cursor-pointer"
              variant="default"
            >
              NO
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              className="w-1/4 cursor-pointer"
              variant="destructive"
              onClick={onDelete}
            >
              Yes
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
