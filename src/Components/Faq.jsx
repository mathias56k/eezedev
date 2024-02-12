import { Disclosure } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";

function Faq() {
    return (
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <div className="w-[90%]">
              <div className="p-2 bg-[#3f444b] rounded-2xl py-5">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#46a2a1]" : ""
                        } flex justify-between w-full px-4 py-2 text-l font-bold text-left hover:text-[#46a2a1]`}>
                        <span>Question 1</span>
                        <IoIosArrowUp
                          className={`${
                            open ? "transform rotate-180 text-[#46a2a1]" : ""
                          } w-6 h-6 hover:text-[#46a2a1]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="py-2 pl-5 text-md">
                        Answer 1
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className='w-full flex justify-center my-5'>
                    <hr className='w-[95%] border-[#67707c]' />
                </div>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#46a2a1]" : ""
                        } flex justify-between w-full px-4 py-2 text-l font-bold text-left hover:text-[#46a2a1]`}>
                        <span>Question 2</span>
                        <IoIosArrowUp
                          className={`${
                            open ? "transform rotate-180 text-[#46a2a1]" : ""
                          } w-6 h-6 hover:text-[#46a2a1]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="py-2 pl-5 text-md">
                        Answer 2
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className='w-full flex justify-center my-5'>
                    <hr className='w-[95%] border-[#67707c]' />
                </div>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button 
                        className={`${
                            open? "text-[#46a2a1]" : ""
                        } flex justify-between w-full px-4 py-2 text-l font-bold text-left hover:text-[#46a2a1]`}>
                        <span>Question 3</span>
                        <IoIosArrowUp
                          className={`${
                            open ? "transform rotate-180 text-[#46a2a1]" : ""
                          } w-6 h-6 hover:text-[#46a2a1]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="py-2 pl-5 text-md">
                        Answer 3
                      </Disclosure.Panel>
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
