export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white p-8">

      <nav className="flex justify-between items-center mb-20">
        <h1 className="text-3xl font-bold text-cyan-400">
          MYA
        </h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full">
            Next.js Portfolio
          </span>

          <h2 className="text-6xl font-bold mt-6 leading-tight">
            Xin chào, mình là
            <span className="text-cyan-400">
              {" "}MYA
            </span>
          </h2>

          <p className="text-slate-300 mt-6 text-xl leading-8">
            Website portfolio đầu tiên được xây dựng bằng Next.js 🚀
          </p>

          <button className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 duration-300">
            Get Started
          </button>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-10 backdrop-blur">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold text-black mx-auto">
            M
          </div>

          <h3 className="text-3xl font-bold text-center mt-6">
            Frontend Developer
          </h3>

          <p className="text-slate-300 text-center mt-4">
            Next.js • React • TailwindCSS
          </p>
        </div>

      </section>

    </main>
  )
}