import Sidebar from '../component/Sidebar'
import Header from '../component/Header'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen z-50">

        <Sidebar />

      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[280px] flex flex-col">

        {/* Fixed Header */}
        <div className="sticky top-0 z-40">

          <Header />

        </div>

        {/* Dynamic Pages */}
        <main className="overflow-y-auto">

          {children}

        </main>

      </div>

    </div>
  )
}

// import Sidebar from '../component/Sidebar'
// import Header from '../component/Header'

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Section */}
//       <div className="flex flex-1 flex-col">

//         {/* Header */}
//         <Header />

//         {/* Content */}
//         <main className="flex-1 ">

//           {children}

//         </main>

//       </div>

//     </div>
//   )
// }