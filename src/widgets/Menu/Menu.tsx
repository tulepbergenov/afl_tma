import { ROUTE_ENUM } from "@/shared/constants";
import { cn, hapticFeedbackImpactOccurred } from "@/shared/libs";
import { BiTransferAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoFootball, IoNewspaperOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();

  return (
    <aside className="fixed bottom-[42px] z-10 left-0 w-full">
      <nav className="container">
        <ul className="grid grid-cols-4 items-center p-[4px] gap-x-[4px] text-white bg-black border border-white rounded-[12px]">
          <li className="flex">
            <Link
              to={ROUTE_ENUM.Home}
              className={cn(
                "flex flex-col w-full items-center gap-y-[2px] min-h-[50px] transition-colors ease-in-out duration-200 justify-center text-[12px] leading-[12px] rounded-[6px]",
                {
                  "text-black bg-white": location.pathname === ROUTE_ENUM.Home,
                }
              )}
              onClick={hapticFeedbackImpactOccurred}
            >
              <IoNewspaperOutline className="w-[20px] h-auto" />
              <span>Лента</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to={ROUTE_ENUM.Tournament}
              className={cn(
                "flex flex-col w-full items-center gap-y-[2px] min-h-[50px] transition-colors ease-in-out duration-200 justify-center text-[12px] leading-[12px] rounded-[6px]",
                {
                  "text-black bg-white":
                    location.pathname === ROUTE_ENUM.Tournament,
                }
              )}
              onClick={hapticFeedbackImpactOccurred}
            >
              <IoFootball className="w-[20px] h-auto" />
              <span>Турнир</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to={ROUTE_ENUM.Transfers}
              className={cn(
                "flex flex-col w-full items-center gap-y-[2px] min-h-[50px] transition-colors ease-in-out duration-200 justify-center text-[12px] leading-[12px] rounded-[6px]",
                {
                  "text-black bg-white":
                    location.pathname === ROUTE_ENUM.Transfers,
                }
              )}
              onClick={hapticFeedbackImpactOccurred}
            >
              <BiTransferAlt className="w-[20px] h-auto" />
              <span>Трансферы</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to={ROUTE_ENUM.Profile}
              className={cn(
                "flex flex-col w-full items-center gap-y-[2px] min-h-[50px] transition-colors ease-in-out duration-200 justify-center text-[12px] leading-[12px] rounded-[6px]",
                {
                  "text-black bg-white":
                    location.pathname === ROUTE_ENUM.Profile,
                }
              )}
              onClick={hapticFeedbackImpactOccurred}
            >
              <FiUser className="w-[20px] h-auto" />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
