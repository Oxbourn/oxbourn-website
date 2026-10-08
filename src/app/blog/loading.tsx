export default function BlogLoading() {
  return (
    <section className="bg-ox-mist pt-32 pb-24">
      <div className="site-container">
        <div className="mx-auto h-10 w-80 bg-ox-ice" />
        <div className="mx-auto mt-6 h-16 max-w-2xl bg-ox-ice" />
        <div className="insight-grid mt-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-96 bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
