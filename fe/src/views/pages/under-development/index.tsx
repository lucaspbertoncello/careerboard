export function UnderDevelopment() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 animate-pulse">
            <div className="bg-primary/10 mx-auto h-32 w-32 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
              <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
              <div className="bg-primary h-2 w-2 animate-bounce rounded-full" />
            </div>

            <div className="space-y-3">
              <h1 className="text-foreground text-4xl font-bold tracking-tight">
                Under Development
              </h1>
              <p className="text-muted-foreground">This feature is currently being built</p>
            </div>

            <div className="bg-secondary relative mx-auto h-1 w-64 overflow-hidden rounded-full">
              <div className="via-primary absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent to-transparent" />
            </div>

            <div className="space-y-2 pt-4">
              <p className="text-muted-foreground text-sm">
                We're working hard to bring you something amazing
              </p>
              <p className="text-muted-foreground/70 text-xs">Check back soon for updates</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
