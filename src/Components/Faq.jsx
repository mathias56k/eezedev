import { Disclosure } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";

function Faq() {
    return (
        <div className="">
          <div className="flex flex-col items-center">
            <div className="w-[90%]">
              <div className="p-2 bg-[#3f444b] rounded-2xl">
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
                          } w-5 h-5 hover:text-[#46a2a1]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Answer 1
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
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
                          } w-5 h-5 hover:text-[#46a2a1]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Answer 2
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
