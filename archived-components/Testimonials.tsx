const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="/sample-files/profile-1.png" />
            </div>
            <div className="stars">★★★★★</div>
            <p>
              "Amazing service! Found my dream home in just 2 weeks. Highly
              recommended!"
            </p>
            <strong>John Smith</strong>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="/sample-files/profile-2.png" />
            </div>
            <div className="stars">★★★★★</div>
            <p>
              "Professional team with excellent knowledge of the local market."
            </p>
            <strong>Sarah Johnson</strong>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="/sample-files/profile-3.png" />
            </div>
            <div className="stars">★★★★★</div>
            <p>
              "Great experience from start to finish. Very satisfied with the
              service."
            </p>
            <strong>Michael Brown</strong>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="/sample-files/profile-4.png" />
            </div>
            <div className="stars">★★★★★</div>
            <p>
              "They helped us find the perfect family home. Couldn't be
              happier!"
            </p>
            <strong>Emily Davis</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
