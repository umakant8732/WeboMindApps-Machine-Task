
import { ErrorStateProps } from "@/types/errorState"

export function ErrorState({ message }: ErrorStateProps) {
    return (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-800">
                Failed to load products
            </h3>
            <p className="mt-1 max-w-md text-sm text-slate-500">
                {message} Please check your connection and try again.
            </p>

        </div>
    )
}