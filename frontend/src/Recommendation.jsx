import { useState } from "react";
import "./Recommendation.css";

function Recommendation() {
  const [occasion, setOccasion] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [interest, setInterest] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const getRecommendation = () => {

    // Toys → Teddy Bear
    if (interest === "Toys") {
      setRecommendation("🧸 Teddy Bear");
    }

    // Coffee → Mugs
    else if (interest === "Coffee") {
      setRecommendation("☕ Personalized Mug");
    }

    // Chocolate → Chocolates
    else if (interest === "Chocolate") {
      setRecommendation("🍫 Chocolate Gift Box");
    }

    // Gifts → Photo Frames + Keychains
    else if (interest === "Gifts") {
      setRecommendation("🖼️ Photo Frame + 🔑 Keychain");
    }

    // If nothing is selected
    else {
      setRecommendation("🎁 Please select an interest");
    }
  };

  return (
    <div className="recommendation-page">

      <div className="recommendation-card">

        <div className="recommendation-icon">
          🎁
        </div>

        <h1>Gift Recommendation</h1>

        <p className="recommendation-subtitle">
          Tell us your preferences and we'll suggest a gift for you!
        </p>

        <div className="recommendation-form">

          <label>Select Occasion</label>

          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Festival">Festival</option>
            <option value="Valentine">Valentine</option>
          </select>

          <label>Select Age Group</label>

          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option value="">Select Age Group</option>
            <option value="Under 18">Under 18</option>
            <option value="18-30">18-30</option>
            <option value="31-50">31-50</option>
          </select>

          <label>Select Interest</label>

          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Select Interest</option>
            <option value="Coffee">Coffee</option>
            <option value="Toys">Toys</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Gifts">Gifts</option>
          </select>

          <button
            className="recommendation-button"
            onClick={getRecommendation}
          >
            ✨ Get Recommendation
          </button>

        </div>

        {recommendation && (
          <div className="recommendation-result">
            <h2>🎉 Recommended Gift</h2>
            <p>{recommendation}</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Recommendation;
