import "../app/globals.css";

export default function ServicesComponent() {
  return (
    <div className="container py-5" id="service">
      <h4 style={{ color: "#545454" }}>Our Comprehensive Services</h4>
      <h1 className="mb-4" style={{ color: "#213448" }}>
        How We Can Help?
      </h1>
      <div
        style={{
          width: "10em",
          height: "3px",
          backgroundColor: "#030303",
          margin: "30px 0",
        }}
      ></div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[
          {
            icon: "bi-briefcase",
            title: "Audit & Assurance",
            text: "Reliable auditing services for compliance and insights.",
          },
          {
            icon: "bi-calculator",
            title: "Corporate Laws",
            text: "End-to-end support on direct & indirect taxes.",
          },
          {
            icon: "bi-graph-up",
            title: "Direct Tax",
            text: "Strategic planning for financial growth.",
          },
          {
            icon: "bi-building",
            title: "Indirect Tax",
            text: "Setup Pvt Ltds, LLPs, and startups seamlessly.",
          },
          {
            icon: "bi-journal-check",
            title: "Business Consulting Services",
            text: "Stay compliant with ROC and other regulations.",
          },
          {
            icon: "bi-laptop",
            title: "Finance Process Outsourcing",
            text: "CFO services for startups and SMEs.",
          },
        ].map((service, index) => (
          <>
            <div className="col" key={index}>
              <div className="card h-100 text-center p-3">
                <div className="card-body">
                  <i
                    className={`bi ${service.icon} fs-1 mb-3 text-primary`}
                  ></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
