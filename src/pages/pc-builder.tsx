import PrivateRoute from "@/components/PrivateRoute";
import { removeSelectedComponent } from "@/redux/slices/pcBuilderSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"

const PCBuilderPage = () => {
    const selectedComponents = useSelector((state: RootState) => state.pcBuilder.selectedComponents);
    const dispatch = useDispatch();
    const router = useRouter();

    console.log({ selectedComponents })

    const handleRemoveComponent = (category: string) => {
        dispatch(removeSelectedComponent(category));
    };

    const handleCompleteBuild = () => {
        const selectedCount = Object.values(selectedComponents).filter((product) => product !== null).length;
        if (selectedCount >= 5) {
            toast.success("Build Successful!!!")
        } else {
            toast.error("Please select at least 5 components to complete the build.!!!")

        }
    };

    return (
        <PrivateRoute>
            <div className="bg-gray-100 p-10  text-black min-h-screen">
                <h1 className="text-center font-semibold lg:text-4xl mb-4">PC Builder</h1>
                <div className="w-3/4 mx-auto  space-y-4">
                    {Object.keys(selectedComponents).map((category) => (
                        <div key={category} className="bg-indigo-400 text-white  rounded-lg">
                            {selectedComponents[category] ? (
                                <div className="flex items-center justify-center flex-col py-6">
                                    <p className="font-semibold lg:text-xl">{selectedComponents && selectedComponents[category]?.name}</p>
                                    <button onClick={() => handleRemoveComponent(category)} className="lg:px-10 mt-3 lg:p-2 py-1 px-4 bg-red-400 rounded-full ">Remove</button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between md:flex-row flex-col text-center font-semibold p-4 text-white">
                                    <p className="text-sm md:text-xl">No {category} selected</p>
                                    <Link href={`/category/${category.toLowerCase()}`} passHref>
                                        <button className="bg-teal-400 mt-3 lg:px-10 p-1 px-3 rounded-full lg:text-base text-xs">Select {category}</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="disabled:bg-indigo-100 bg-indigo-500 text-white p-4 px-10 rounded-lg block mx-auto " onClick={handleCompleteBuild} disabled={Object.values(selectedComponents).every((product) => product === null)}>
                        Complete Build
                    </button>
                </div>

            </div>
        </PrivateRoute>
    );
};

export default PCBuilderPage;
