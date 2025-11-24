import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { CalendlyTab } from "./Booking";

const BookingDialog = ({
  text = "Book an appointment",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`bg-[#C99D86] py-2 px-5 rounded-lg h-[56px] !text-[#ffffff] font-sweet-sans  text-base hover:bg-[#b48470] transition-colors flex items-center justify-center ${className}`}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-auto h-[95%] min-w-full md:min-w-3xl lg:min-w-6xl md:px-12 py-20 lg:px-32 flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="flex justify-between">
            <div />
            <div className="text-sm  md:text-3xl font-extrabold text-center text-[#939393]">
              FREE 15 Minute Consultation Call
            </div>
            <DialogClose>
              <X />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="text-xs md:text-base text-center font-light text-[#666666]">
            Not sure if therapy is the right fit for you? We&apos;re here to
            help! Schedule a free 15-minute consultation call to discuss your
            needs, ask questions, and learn more about how we can support you.
            This no-obligation call is a great opportunity to get to know us and
            decide how we can best work together on your path to healing.
          </DialogDescription>
        </DialogHeader>
        <CalendlyTab />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
