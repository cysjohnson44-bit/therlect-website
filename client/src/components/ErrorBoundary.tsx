import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    // 如果是動態匯入失敗（部署新版本後舊 chunk 不存在），自動重新載入頁面
    const isChunkError = error.message?.includes('dynamically imported module') ||
      error.message?.includes('Failed to fetch') ||
      error.message?.includes('Loading chunk') ||
      error.message?.includes('Loading CSS chunk');
    
    if (isChunkError) {
      // 避免無限重載循環：檢查是否剛剛重載過
      const lastReload = sessionStorage.getItem('lastChunkReload');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload) > 10000) {
        sessionStorage.setItem('lastChunkReload', now.toString());
        window.location.reload();
        return;
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const isChunkError = this.state.error?.message?.includes('dynamically imported module') ||
        this.state.error?.message?.includes('Failed to fetch');

      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-background">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              className="text-destructive mb-6 flex-shrink-0"
            />

            <h2 className="text-xl mb-4">
              {isChunkError ? '發生意外錯誤。' : 'An unexpected error occurred.'}
            </h2>

            {!isChunkError && (
              <div className="p-4 w-full rounded bg-muted overflow-auto mb-6">
                <pre className="text-sm text-muted-foreground whitespace-break-spaces">
                  {this.state.error?.stack}
                </pre>
              </div>
            )}

            {isChunkError && (
              <p className="text-muted-foreground mb-6 text-center">
                網站已更新，請重新載入頁面以取得最新版本。
              </p>
            )}

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 cursor-pointer"
              )}
            >
              <RotateCcw size={16} />
              重新載入頁面
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
