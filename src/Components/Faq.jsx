import { Disclosure, Transition } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";

function Faq({ navbarOpen }) {
  const iconOpacity = navbarOpen ? 0 : 100;

    return (
        <div className="mt-12">
          <div className='flex justify-center mb-5'>
            <h3 className='text-4xl font-bold font-titleFont tracking-wider lg:font-extrabold lg:text-5xl'>What the FAQ?</h3>
          </div>
          <div className="flex flex-col items-center md:px-10">
            <div className="w-[90%] max-w-[50rem]">
              <div className="p-2 py-5">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#7289F4]" : ""
                        } flex justify-between w-full px-4 py-2 text-xl font-bold font-titleFont text-left hover:text-[#7289F4]`}>
                        <span>Question 1</span>
                        <IoIosArrowUp
                          className={`${
                            open ? `transform rotate-180 text-[#7289F4] opacity-${iconOpacity} delay-100 transition-opacity duration-300` : ""
                          } w-6 h-6 hover:text-[#7289F4]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="py-2 pl-8 text-lg font-textFont">
                          Answer 1
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <div className='w-full flex justify-center my-5'>
                    <hr className='w-[95%] border-[#28293C]' />
                </div>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#7289F4]" : ""
                        } flex justify-between w-full px-4 py-2 text-xl font-bold font-titleFont text-left hover:text-[#7289F4]`}>
                        <span>Question 2</span>
                        <IoIosArrowUp
                          className={`${
                            open ? `transform rotate-180 text-[#7289F4] opacity-${iconOpacity} delay-100 transition-opacity duration-300` : ""
                          } w-6 h-6 hover:text-[#7289F4]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="py-2 pl-8 text-lg font-textFont">
                          Answer 2
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <div className='w-full flex justify-center my-5'>
                    <hr className='w-[95%] border-[#28293C]' />
                </div>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#7289F4]" : ""
                        } flex justify-between w-full px-4 py-2 text-xl font-bold font-titleFont text-left hover:text-[#7289F4]`}>
                        <span>Question 3</span>
                        <IoIosArrowUp
                          className={`${
                            open ? `transform rotate-180 text-[#7289F4] opacity-${iconOpacity} delay-100 transition-opacity duration-300` : ""
                          } w-6 h-6 hover:text-[#7289F4]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="py-2 pl-8 text-lg font-textFont">
                          Answer 3
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Faq;
