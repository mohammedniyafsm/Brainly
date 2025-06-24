import { CloseIcon } from "../icons/Close";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddcontent } from "../hooks/User";
import { useAuth } from "../../context/store";
import { useQueryClient } from "@tanstack/react-query";


interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const AddContentSchema = z.object({
  title: z.string().min(4, "Add at least 4 characters"),
  link: z.string().min(10, "Add a proper URL link"),
  type: z.string().min(4, "Please select a type"),
});

type FormData = z.infer<typeof AddContentSchema>;

export const CreateContentModal: React.FC<CreateContentModalProps> = ({
  open,
  onClose,
}) => {
  const { token } = useAuth();
  const { mutate: add, isPending } = useAddcontent();
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(AddContentSchema),
  });

  const addContent = (data: FormData) => {
    if (!token) {
      toast.error("Unauthorized. Please log in again.");
      return;
    }

    add(
      { ...data, token },
      {
        onSuccess: () => {
          toast.success("Added Successfully!");
          reset();
          onClose();
          queryClient.invalidateQueries({ queryKey: ["content"] });
          navigate("/");
        },
        onError: (error) => {
          const axiosError = error as AxiosError<{ message?: string }>;
          toast.error(axiosError.response?.data?.message || "Adding failed");
        },
      }
    );
  };

  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-500/60 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="flex justify-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[350px] rounded-xl shadow-sm bg-white py-6">
          {/* Header */}
          <div className="flex justify-between px-6 items-center mb-2">
            <div>
              <h1 className="text-lg font-semibold">Add Content</h1>
              <p className="text-sm text-gray-500 mt-1">
                Fill in the details to add content.
              </p>
            </div>
            <button onClick={onClose}>
              <CloseIcon size="lg" />
            </button>
          </div>

          {/* Form */}
          <div className="px-6 pt-2">
            <form onSubmit={handleSubmit(addContent)}>
              <div className="grid gap-4 pt-2">
                {/* Title */}
                <div className="space-y-1">
                  <label className="text-sm font-medium">Title</label>
                  <input
                    type="text"
                    {...register("title")}
                    placeholder="Enter Title"
                    className="h-10 w-full px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Link */}
                <div className="space-y-1">
                  <label className="text-sm font-medium">Link</label>
                  <input
                    type="text"
                    {...register("link")}
                    placeholder="Enter Link"
                    className="h-10 w-full px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
                  />
                  {errors.link && (
                    <p className="text-sm text-red-500">
                      {errors.link.message}
                    </p>
                  )}
                </div>

                {/* Type */}
                <div className="space-y-1">
                  <label className="text-sm font-medium">Type</label>
                  <select
                    defaultValue=''
                    {...register("type")}
                    className="h-10 w-full px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
                  >
                    <option value="">Select Type</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Document">Document</option>
                  </select>
                  {errors.type && (
                    <p className="text-sm text-red-500">
                      {errors.type.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1 rounded-xl bg-white border border-gray-200 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-1.5 rounded-xl bg-black text-white border border-gray-200 hover:bg-gray-900"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
