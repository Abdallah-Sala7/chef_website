"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  name,
  value,
  className,
  minDate,
  onChange,
}: {
  name: string;
  value?: string;
  className?: string;
  minDate?: Date;
  onChange?: (value: string) => void;
}) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (value) {
      setDate(new Date(value));
    }
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
          <input
            type="date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            name={name}
            hidden
            readOnly
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            onChange && onChange((date && format(date, "yyyy-MM-dd")) || "");
          }}
          initialFocus
          minDate={minDate}
        />
      </PopoverContent>
    </Popover>
  );
}
