"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { useIsMobile } from "~/lib/use-is-mobile";

export interface DropdownOption<T extends string> {
  value: T;
  label: string;
}

interface DropdownProps<T extends string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  children?: ReactNode;
}

export default function Dropdown<T extends string>({
  options,
  value,
  onChange,
  label,
  children,
}: DropdownProps<T>) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-[8px] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-raised)] hover:text-[var(--color-text-primary)]"
        aria-label={label}
      >
        {children}
      </button>
      {isMobile && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          aria-label={label}
          className="absolute inset-0 cursor-pointer opacity-0"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
      {!isMobile && open && (
        <div className="absolute bottom-full right-0 mb-2 min-w-[140px] overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-1 shadow-lg shadow-black/20">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`flex w-full items-center px-4 py-2 text-left text-sm transition-colors hover:bg-[var(--color-bg-hover)] ${
                opt.value === value
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
