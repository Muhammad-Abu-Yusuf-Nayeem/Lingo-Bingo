import React from "react";

const About = () => {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-300/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-10 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
          Discover a Fun Way to Learn Vocabulary
        </h2>

        {/* Content Card */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/40 relative overflow-hidden">
          
          {/* Soft inner glow */}
          <div className="absolute -top-8 -right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Learning a new language becomes easier when every word tells a story.
            This platform turns vocabulary building into an engaging and enjoyable
            routine. Each word is enriched with meaning, pronunciation, example
            sentences, and real-life context so the learning feels natural.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Words are grouped into vibrant themes like travel, food, emotions,
            school, and religion. Each entry includes difficulty level, lesson
            number, and part of speech, ensuring that learners can follow a clear
            and structured path. A word like
            <span className="font-semibold text-purple-700">
              {" "}“لغة عربية (lugha ‘arabiyya)”{" "}
            </span>
            becomes easier to remember when seen in real situations and explained
            with context.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Lessons use repetition, real-life examples, and theme-based learning
            to strengthen long-term memory. Whether studying for school, travel,
            or personal growth, learners progress from simple words to advanced
            expressions with guided support and clear pronunciation.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
