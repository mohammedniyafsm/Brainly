import { CloseIcon } from "../icons/Close";
import { Button } from "./Button";

// Define props interface for Input component
interface InputProps {
  Title: string;
}

// Define props interface for CreateContentModal
interface CreateContentModalProps {
  open: boolean;
  onClose: () => void; // Add onClose callback
}


export const CreateContentModal: React.FC <CreateContentModalProps> = ({open,onClose}) => {
  return (
    <div>
      {open && (
        <div
          className="h-screen w-screen fixed top-0 left-0 bg-gray-500/60 flex justify-center items-center"
          onClick={onClose} // Close modal when clicking outside
        >
          <div
            className="flex justify-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="bg-white h-96 w-96 rounded-md shadow-xl ">
              <div className="flex justify-between p-6 items-center">
                <h1>Add Content</h1>
                <button onClick={onClose}>
                  <CloseIcon size="lg" />
                </button>
              </div>
              <div className="px-10 ">
                <Input Title="Title" />
                <Input Title="Link" />
                <Input Title="Tag" />
              </div>
              <div className="flex justify-center ">
              <Button text="Submit" variant="primary" size="md" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Input: React.FC<InputProps> = ({ Title }) => {
  return (
    <div className="m-4">
    <input
      className="h-12 w-72 bg-white p-4 rounded-md shadow-md"
      type="text"
      name={Title}
      placeholder={Title}
      id={Title.toLowerCase().replace(/\s/g, "-")} // Generate a unique ID
    />
    </div>
  );
};