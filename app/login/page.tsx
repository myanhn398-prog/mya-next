"use client"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

        <h1 className="text-4xl font-black">
          Đăng nhập
        </h1>

        <p className="mt-4 text-slate-300">
          Chào mừng quay lại 😄
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            alert("Đăng nhập thành công demo 😄")
          }}
        >

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-cyan-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Mật khẩu
            </label>

            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-cyan-300"
            />
          </div>

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-cyan-300 hover:underline"
            >
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-300 py-4 font-bold text-black hover:scale-[1.02] duration-300"
          >
            Đăng nhập
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Chưa có tài khoản?{" "}
          <span className="text-cyan-300">
            Đăng ký
          </span>
        </p>

      </div>

    </main>
  )
}