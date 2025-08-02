import { useEffect, useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    try {
      const saved = localStorage.getItem("feedbacks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    rating: "",
    comments: ""
  });

  const [welcomeMessage, setWelcomeMessage] = useState(false);

useEffect(() => {
  const savedFeedbacks = localStorage.getItem("feedbacks");
  const hasFeedback = savedFeedbacks && JSON.parse(savedFeedbacks).length > 0;

  const alreadyShown = sessionStorage.getItem("welcomeMessageShown");

  if (hasFeedback && !alreadyShown) {
    setWelcomeMessage(true);
    sessionStorage.setItem("welcomeMessageShown", "true");
  }
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName &&
      formData.email &&
      formData.department &&
      formData.rating
    ) {
      const newFeedback = { ...formData, id: Date.now() };
      const updated = [...feedbacks, newFeedback];
      setFeedbacks(updated);
      localStorage.setItem("feedbacks", JSON.stringify(updated));
      setFormData({
        fullName: "",
        email: "",
        department: "",
        rating: "",
        comments: ""
      });
    }
  };

  const clearFeedbacks = () => {
    setFeedbacks([]);
    localStorage.removeItem("feedbacks");
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 tracking-tight">
          Student Feedback
        </h1>

        {welcomeMessage && (
          <div className="mt-6 mb-6 p-4 bg-green-900/30 border border-green-700 text-green-300 rounded-xl text-sm">
            Welcome Back! You have previously submitted feedback.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-800 p-8 rounded-2xl shadow-xl space-y-6 border border-neutral-700"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Rating:
            </label>
            <div className="flex space-x-4 text-gray-100">
              {[1, 2, 3, 4, 5].map((num) => (
                <label
                  key={num}
                  className="flex items-center space-x-2 text-sm"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    checked={formData.rating === String(num)}
                    onChange={handleChange}
                    className="accent-gray-200"
                    required
                  />
                  <span>{num}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="comments"
            placeholder="Additional Comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />

          <div className="flex space-x-4 justify-end">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-300 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={clearFeedbacks}
              className="bg-neutral-700 text-white px-6 py-2 rounded-xl hover:bg-neutral-600 transition"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="mt-10">
          <h2 className="text-2xl font-medium mb-4 tracking-tight">
            Previous Feedbacks
          </h2>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-neutral-800 p-5 mb-4 rounded-2xl shadow-sm border border-neutral-700"
              >
                <h3 className="text-lg font-semibold text-white">
                  {feedback.fullName}
                </h3>
                <p className="text-sm text-gray-400">{feedback.email}</p>
                <p className="text-sm mt-1 text-gray-300">
                  Dept: {feedback.department}
                </p>
                <div className="flex items-center mt-2 text-yellow-400 text-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < parseInt(feedback.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                {feedback.comments && (
                  <p className="text-sm italic mt-2 text-gray-300">
                    {feedback.comments}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No feedbacks available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
