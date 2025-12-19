function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6">
          <p className="text-sm font-medium text-zinc-500">My Account</p>
          <div className="mt-1 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Profile
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                Manage your personal information and account settings.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Save changes
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700">
                JD
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Jane Doe</p>
                <p className="truncate text-xs text-zinc-500">
                  jane.doe@example.com
                </p>
              </div>
            </div>

            <nav className="mt-5 space-y-1">
              <a
                className="flex items-center justify-between rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white"
                href="#"
              >
                Profile
                <span className="text-xs font-medium text-white/70">
                  Current
                </span>
              </a>
              <a
                className="flex items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                href="#"
              >
                Security
              </a>
              <a
                className="flex items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                href="#"
              >
                Notifications
              </a>
              <a
                className="flex items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                href="#"
              >
                Billing
              </a>
            </nav>
          </aside>

          {/* Content */}
          <main className="space-y-6">
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold">Personal details</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Update your name, email, and phone number.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700">
                    JD
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    Change photo
                  </button>
                </div>
              </div>

              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm font-medium text-zinc-700">
                    First name
                  </span>
                  <input
                    className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                    defaultValue="Jane"
                    name="firstName"
                    type="text"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-medium text-zinc-700">
                    Last name
                  </span>
                  <input
                    className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                    defaultValue="Doe"
                    name="lastName"
                    type="text"
                  />
                </label>

                <label className="grid gap-1 sm:col-span-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Email
                  </span>
                  <input
                    className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                    defaultValue="jane.doe@example.com"
                    name="email"
                    type="email"
                  />
                </label>

                <label className="grid gap-1 sm:col-span-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Phone
                  </span>
                  <input
                    className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                    placeholder="+1 (555) 000-0000"
                    name="phone"
                    type="tel"
                  />
                </label>
              </form>
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold">Password</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Keep your account secure by using a strong password.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Change password
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold">Last updated</p>
                  <p className="mt-1 text-sm text-zinc-500">2 months ago</p>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold">2-step verification</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Not enabled
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-red-700">
                    Danger zone
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Permanently delete your account and all associated data.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-red-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Delete account
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
