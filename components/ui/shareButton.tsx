export default function ShareButton() {
    return (
      <div className="relative flex items-center">
        {/* Curved Background */}
        <div className="absolute right-0 h-10 w-16 bg-purple-500 rounded-l-full"></div>
  
        {/* Share Button */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center bg-white rounded-full shadow-lg border">
          <svg
            className="h-5 w-5 text-purple-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 16.08c-.76 0-1.47.29-2 .76l-5.21-3.09a3.5 3.5 0 000-2.5l5.2-3.05a2.97 2.97 0 10-1.07-1.45l-5.2 3.05a2.97 2.97 0 10.01 4.9l5.2 3.05c.18-.13.37-.24.58-.34.4-.2.84-.32 1.28-.32 1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3c0-.1.03-.21.04-.31l-.06-.04c.01.1.02.21.02.31a3 3 0 006 0c0-1.65-1.35-3-3-3z"></path>
          </svg>
        </div>
      </div>
    );
  }
  