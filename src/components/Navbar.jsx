import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="nav w-full h-14 flex items-center justify-between p-1 bg-slate-200 mb-1">
        <div className="logo flex items-center justify-center gap-1">
          <img className='h-10 object-cover rounded-full ' src="/m6gMbVlkS3-cl4wtx08YzQ.webp" alt="" />
        <h1 className="text-xl font-bold">Carbo-Neutralizer</h1>
        </div>
      
        <nav className="middle-nav flex gap-5">
          {/* Home NavLink */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-zinc-800'
                : 'font-normal text-black'
            }
          >
            Home
          </NavLink>

          {/* Emission Calculator NavLink */}
          <NavLink
            to="/CoalInput"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-zinc-800'
                : 'font-normal text-black'
            }
          >
            Emission Calculator
          </NavLink>

          {/* Waste Management NavLink */}
          <NavLink
            to="/WasteManagement"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-zinc-800'
                : 'font-normal text-black'
            }
          >
            Waste Management
          </NavLink>

          {/* Reduction Pathways NavLink */}
          <NavLink
            to="/ReductionPathways"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-zinc-800'
                : 'font-normal text-black'
            }
          >
            Neutralization Pathways
          </NavLink>

          {/* Per Capita Emission NavLink */}
          <NavLink
            to="/PerCapita"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-zinc-800'
                : 'font-normal text-black'
            }
          >
            Per Capita (E)
          </NavLink>
        </nav>

        {/* Login Button */}
        <NavLink
          to="/LogIn"
          className="w-fit bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
