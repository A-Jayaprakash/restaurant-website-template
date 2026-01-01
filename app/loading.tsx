export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent mb-4" />
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
