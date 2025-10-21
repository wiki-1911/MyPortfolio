export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
