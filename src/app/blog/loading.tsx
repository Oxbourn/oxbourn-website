export default function BlogLoading() {
  return (
    <section className="bg-ox-mist pt-32 pb-24">
      <div className="site-container">
        <div className="mx-auto h-10 w-80 bg-ox-ice" />
        <div className="mx-auto mt-6 h-16 max-w-2xl bg-ox-ice" />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-96 bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
