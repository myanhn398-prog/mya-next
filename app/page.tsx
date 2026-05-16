export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-8 md:px-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22d3ee33,transparent_35%),radial-gradient(circle_at_bottom_right,#8b5cf633,transparent_35%)]" />

        <div className="relative z-10">

          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              MYA
            </h1>

            <div className="hidden md:flex gap-8 text-sm text-slate-300">
              <a href="#" className="hover:text-cyan-300">
                Trang chủ
              </a>

              <a href="#" className="hover:text-cyan-300">
                Dự án
              </a>

              <a href="#" className="hover:text-cyan-300">
                Kỹ năng
              </a>

              <a href="#" className="hover:text-cyan-300">
                Liên hệ
              </a>
            </div>
          </nav>

          <div className="grid min-h-[80vh] items-center gap-12 md:grid-cols-2">

            <div>

              <p className="mb-5 inline-block rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                👋 Hello! Mình là
              </p>

              <h2 className="text-6xl font-black leading-tight md:text-8xl bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                MYA
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Mình mới học frontend được một thời gian thôi 😄
                Hiện tại đang tập trung làm giao diện web cho đẹp hơn mỗi ngày.
                Project này là một trong những web đầu tiên mình tự code và deploy lên mạng.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="rounded-2xl bg-cyan-300 px-7 py-4 font-bold text-black shadow-lg shadow-cyan-300/30 hover:scale-105 duration-300">
                  Xem project
                </button>

                <a
                  href="/forgot-password"
                  className="rounded-2xl border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10 duration-300 inline-block"
                >
                  Quên mật khẩu
                </a>

              </div>

            </div>

            <div className="relative">

              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-cyan-300 to-violet-500 blur-2xl opacity-30" />

              <div className="relative rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-7xl font-black text-black">
                  M
                </div>

                <h3 className="mt-8 text-center text-3xl font-black">
                  Frontend Learner
                </h3>

                <div className="mt-5 space-y-3 text-slate-200">
                  <p>💻 Hay ngồi sửa CSS tới khuya</p>
                  <p>🎧 Code thường mở nhạc chill</p>
                  <p>🚀 Đang cố gắng lên trình từng ngày</p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">

                  <div className="rounded-2xl bg-black/30 p-4">
                    <h4 className="text-2xl font-black text-cyan-300">
                      3+
                    </h4>

                    <p className="text-xs text-slate-400">
                      Kỹ năng
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/30 p-4">
                    <h4 className="text-2xl font-black text-cyan-300">
                      2
                    </h4>

                    <p className="text-xs text-slate-400">
                      Project
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/30 p-4">
                    <h4 className="text-2xl font-black text-cyan-300">
                      1
                    </h4>

                    <p className="text-xs text-slate-400">
                      Deploy
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <section className="grid gap-6 pb-14 md:grid-cols-3">

            {[
              [
                "Giao diện dễ nhìn",
                "Mình thích kiểu giao diện tối, nhìn đơn giản nhưng vẫn hiện đại và dễ dùng.",
              ],

              [
                "Web chạy ổn trên điện thoại",
                "Mình có chỉnh responsive để web nhìn ổn trên điện thoại với laptop luôn 😄",
              ],

              [
                "Deploy bằng Vercel",
                "Sau khi code xong mình push lên GitHub rồi deploy bằng Vercel để ai cũng xem được.",
              ],
            ].map(([title, desc]) => (

              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur hover:-translate-y-2 duration-300"
              >

                <h3 className="text-2xl font-black text-cyan-300">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {desc}
                </p>

              </div>

            ))}

          </section>

        </div>

      </section>
    </main>
  )
}