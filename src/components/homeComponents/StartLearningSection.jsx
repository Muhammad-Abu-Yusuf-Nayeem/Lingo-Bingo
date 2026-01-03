import React from 'react';

const StartLearningSection = () => {
    return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">

      {/* Decorative Glow Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-12 rounded-3xl shadow-2xl text-center">

          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Learning?
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Build your vocabulary step by step with beautifully structured lessons,
            real-life examples, and modern tools designed for students of all levels.
          </p>

          <button className="px-10 py-4 text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition duration-300">
            Explore Lessons
          </button>

        </div>
      </div>
    </section>
  );
};

export default StartLearningSection;