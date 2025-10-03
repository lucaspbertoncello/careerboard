import notFoundImg from "@/assets/notFound.svg";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="relative">
        <img
          src={notFoundImg}
          alt="Page not found"
          className="animate-float h-64 w-64"
        />
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-base leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Please
          check the URL or navigate back to the dashboard.
        </p>
      </div>
    </div>
  );
}
