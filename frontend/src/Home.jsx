function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GiftBloom 🎁</h1>

          <h2>Find the Perfect Gift for Every Special Moment</h2>

          <p>
            Discover beautiful gifts for birthdays, anniversaries,
            festivals, Valentine's Day and more.
          </p>

          <div className="home-buttons">
            <a href="/products" className="home-btn">
              Explore Gifts 🎁
            </a>

            <a href="/recommendation" className="home-btn secondary">
              Get Recommendation ✨
            </a>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose GiftBloom?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>🎁 Wide Variety</h3>
            <p>Choose from many beautiful gift options.</p>
          </div>

          <div className="feature-card">
            <h3>💝 Personalized</h3>
            <p>Find gifts suitable for every special occasion.</p>
          </div>

          <div className="feature-card">
            <h3>✨ Smart Recommendations</h3>
            <p>Get gift suggestions based on your preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
