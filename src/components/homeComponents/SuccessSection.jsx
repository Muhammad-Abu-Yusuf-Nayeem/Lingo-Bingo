import CountUp from "react-countup"

const SuccessSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Growing Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          {/* Users */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/40">
            <p className="text-4xl font-bold text-purple-700 mb-2">
              <CountUp start={0} end={12500} duration={2} separator="," />
            </p>
            <p className="text-lg text-gray-700">Active Users</p>
                </div>

          {/* Lessons */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/40">
            <p className="text-4xl font-bold text-blue-700 mb-2">
              <CountUp start={0} end={90} duration={2} />
            </p>
            <p className="text-lg text-gray-700">Lessons Available</p>
          </div>

          {/* Vocabulary Count */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/40">
            <p className="text-4xl font-bold text-pink-700 mb-2">
              <CountUp start={0} end={3400} duration={2} separator="," />
            </p>
            <p className="text-lg text-gray-700">Vocabulary Words</p>
          </div>

          {/* Tutorials */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/40">
            <p className="text-4xl font-bold text-green-700 mb-2">
              <CountUp start={0} end={40} duration={2} />
            </p>
            <p className="text-lg text-gray-700">Video Tutorials</p>
          </div>

        </div>

        {/* Floating Effects */}
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-300/30 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
    );
};

export default SuccessSection;