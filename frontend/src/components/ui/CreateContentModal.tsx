import { CloseIcon } from "../icons/Close";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal: React.FC<CreateContentModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <>
      {open && (
        <div
          className="h-screen w-screen fixed top-0 left-0 bg-gray-500/60 flex justify-center items-center"
          onClick={onClose}
        >
          <div
            className="flex justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Box styled like Signup */}
            <div className="w-[350px] shadow-sm rounded-xl bg-white py-6">
              {/* Header */}
              <div className="flex justify-between px-6 items-center mb-2">
                <div>
                  <h1 className="font-semibold font-inter leading-none text-lg">
                    Add Content
                  </h1>
                  <p className="text-sm text-[#737373] mt-1">
                    Fill in the details to add content.
                  </p>
                </div>
                <button onClick={onClose}>
                  <CloseIcon size="lg" />
                </button>
              </div>

              {/* Form */}
              <div className="px-6 pt-2 ">
                <form>
                  <div className="grid w-full items-center gap-4 pt-2">
                    {/* Title Field */}
                    <div className="grid w-full items-center gap-1">
                      <label className="flex items-center text-sm font-medium">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Title"
                        className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                      />
                    </div>

                    {/* Link Field */}
                    <div className="grid w-full items-center gap-1">
                      <label className="flex items-center text-sm font-medium">
                        Link
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Link"
                        className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                      />
                    </div>

                    {/* Type Field */}
                    <div className="grid w-full items-center gap-1">
                      <label className="flex items-center text-sm font-medium">
                        Type
                      </label>
                      <select
                        className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                      >
                        <option value="" selected disabled>
                          Select Type
                        </option>
                        <option value="Twitter">Twitter</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Document">Document</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              {/* Buttons */}
              <div className="flex justify-between px-6 py-4  items-center pt">
                <button className="flex justify-center rounded-xl shadow-sm bg-white border border-gray-200 hover:bg-gray-100 px-4 py-1 cursor-pointer">
                  Cancel
                </button>
                <button className="flex justify-center rounded-xl shadow-sm bg-black text-white border border-gray-200 hover:bg-gray-900 px-4 py-1.5 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
