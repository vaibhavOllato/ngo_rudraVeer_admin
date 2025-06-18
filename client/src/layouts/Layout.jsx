// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="flex min-h-screen bg-[#121412]">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right content section */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <Header />

//         {/* Main content area */}
//         <main className="p-6 bg-[#F9F9F9] flex-1 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }


import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex bg-[#121412]">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 z-10">
        <Sidebar />
      </div>

      {/* Content Wrapper */}
      <div className="flex-1 flex flex-col ml-64 min-h-screen">
        {/* Fixed Header */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#F9F9F9] h-[calc(100vh-3.5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
