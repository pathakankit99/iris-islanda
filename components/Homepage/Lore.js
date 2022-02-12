const Lore = () => {
  return (
    <section>
      <h3 className="text-3xl uppercase py-2">Lore</h3>
      <div className="lore-container flex flex-wrap items-center">
        <div className="card">
          <div className="lore py-2 md:p-2">
            <div className="overflow-hidden">
              <img src="/images/img8.png" />
            </div>
            <div className="info">
              <h6>A Long Time Ago...</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lore py-2 md:p-2">
            <div className="overflow-hidden">
              <img src="/images/img3.png" />
            </div>
            <div className="info">
              <h6>Hominide Afternoon</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lore py-2 md:p-2">
            <div className="overflow-hidden">
              <img src="/images/img5.png" />
            </div>
            <div className="info">
              <h6>Equilateral Society</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lore py-2 md:p-2">
            <div className="overflow-hidden">
              <img src="/images/img7.png" />
            </div>
            <div className="info">
              <h6>Notable Tribes</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lore;
