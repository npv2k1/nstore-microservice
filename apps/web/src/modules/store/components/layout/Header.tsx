
import { useAuthUser } from '@/modules/auth/hooks/useUser';
import { useRouter } from 'next/router';
import { HiMenu, HiSearch, HiShoppingCart } from 'react-icons/hi';

function Header() {
  const router = useRouter();
  const user = useAuthUser();
  return (
    <header>
      {/* Top nav */}
      <div className="bg-amazon_blue p1 flex flex-grow items-center py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0 ">
          <div className='text-white text-xl font-bold px-5 text-center'>NStore</div>
        </div>
        {/* Search */}
        <div className=" hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
          <input
            className="h-full w-6 flex-shrink flex-grow rounded-l-md p-2 px-4 focus:outline-none"
            type="text"
          />
          <HiSearch className="h-12 p-4" size={24} />
        </div>
        {/* Right */}
        <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
          <div className="link">
            <p>Hello {user ? user.fullName : 'Sign In'}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div onClick={() => router.push('/orders')} className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div
            onClick={() => {
              router.push('/checkout');
            }}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
              {/* {items.length} */}
            </span>

            <HiShoppingCart className="h-10 " size={24} />
            <p className="mt-2 hidden font-extrabold md:inline md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="bg-amazon_blue-light flex items-center space-x-2 p-2 pl-6 text-sm text-white">
        <p className="link flex items-center">
          <HiMenu className="mr-1 h-6" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazone Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Healt & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
