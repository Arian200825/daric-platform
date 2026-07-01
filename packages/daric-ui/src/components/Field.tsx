import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "../lib/cn";

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus-visible:border-primary focus-visible:outline-none";
const labelClass = "mb-1.5 block text-xs uppercase tracking-[0.12em] text-muted";

/** FormField — label + control + optional error, wired for accessibility. */
export function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function Input({
  className,
  invalid,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      className={cn(fieldClass, invalid && "border-red-400/60", className)}
      aria-invalid={invalid}
      {...props}
    />
  );
}

export function Textarea({
  className,
  invalid,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(fieldClass, "resize-none", invalid && "border-red-400/60", className)}
      aria-invalid={invalid}
      {...props}
    />
  );
}

export function Select({
  className,
  invalid,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select
      className={cn(fieldClass, "[color-scheme:dark]", invalid && "border-red-400/60", className)}
      aria-invalid={invalid}
      {...props}
    >
      {children}
    </select>
  );
}
