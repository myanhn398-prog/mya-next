"use client"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

        <h1 className="text-4xl font-black">
          Quên mật khẩu 😵
        </h1>

        <p className="mt-4 text-slate-300 leading-7">
          Nhập email của bạn để nhận yêu cầu đặt lại mật khẩu.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            alert("Đã gửi yêu cầu đặt lại mật khẩu 😄")
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

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-300 py-4 font-bold text-black hover:scale-[1.02] duration-300"
          >
            Nhập gmail đặt lại mật khẩu
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Nhớ mật khẩu rồi?{" "}
          <a
            href="/login"
            className="text-cyan-300 hover:underline"
          >
            Đăng nhập
          </a>
        </p>

      </div>

    </main>
  )
}