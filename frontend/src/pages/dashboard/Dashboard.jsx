import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">Header</header>
      <main className="flex-1 flex flex-row">
        <aside className="w-1/4 bg-gray-200 p-4">Sidebar</aside>
        <section className="flex-1 p-4">Main Content</section>
      </main>
      <footer className="bg-blue-500 text-white p-4">Footer</footer>
    </div>
  )
}

export default Dashboard