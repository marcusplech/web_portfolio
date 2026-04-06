export default function Loading() {
  return (
    <main className="main section" aria-busy="true" aria-live="polite">
      <div className="skeleton-block" />
      <div className="skeleton-grid">
        <div className="skeleton-card" />
        <div className="skeleton-card" />
        <div className="skeleton-card" />
      </div>
      <span className="sr-only">Loading page content</span>
    </main>
  );
}
