import React from 'react';

const WhyLearnSection = () => {
     return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Why Learn With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition duration-300">
            <div className="text-indigo-600 text-5xl mb-4">📘</div>
            <h3 className="text-2xl font-semibold mb-3">Structured Learning</h3>
            <p className="text-gray-700">
              Words are organized by themes, difficulty, and lessons so learners
              always know where they stand and what comes next.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition duration-300">
            <div className="text-purple-600 text-5xl mb-4">🎧</div>
            <h3 className="text-2xl font-semibold mb-3">Pronunciation Support</h3>
            <p className="text-gray-700">
              Each vocabulary entry includes clear pronunciation guidance to make
              learning natural and accurate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition duration-300">
            <div className="text-pink-600 text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-3">Fast & Fun Progress</h3>
            <p className="text-gray-700">
              Bite-sized lessons, real-life examples, and interactive elements make
              the learning journey fun and engaging.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;

