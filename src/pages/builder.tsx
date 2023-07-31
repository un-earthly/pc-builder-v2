import { Product } from "@/interface/product.interface";
import { removeSelectedComponent, setSelectedComponent } from "@/redux/slices/pcBuilderSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const PCBuilderPage = () => {
    const selectedComponents = useSelector((state: RootState) => state.pcBuilder.selectedComponents);
    console.log(selectedComponents)
    const dispatch = useDispatch();
    const router = useRouter();

   

    const handleRemoveComponent = (category: string) => {
        dispatch(removeSelectedComponent(category));
    };

    const handleCompleteBuild = () => {
        // Implement the logic to check if at least 5 components are selected
        // If yes, redirect to the complete build page, else show an error message
        // Example:
        const selectedCount = Object.values(selectedComponents).filter((product) => product !== null).length;
        if (selectedCount >= 5) {
            router.push('/complete-build');
        } else {
            alert('Please select at least 5 components to complete the build.');
        }
    };

    return (
        <div className="bg-gray-100 text-black min-h-screen">
            <div className="w-3/4 mx-auto p-10">
                <h1 className="text-center font-semibold lg:text-4xl mb-4">PC Builder</h1>
                {Object.keys(selectedComponents).map((category) => (
                    <div key={category} className="">
                        {/* <h2>{category}</h2> */}
                        {selectedComponents[category] ? (
                            <div className="selected-component">
                                <p>{selectedComponents && selectedComponents[category]?.name}</p>
                                <button onClick={() => handleRemoveComponent(category)}>Remove</button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between font-semibold p-4 space-y-10">
                                <p>No {category} selected</p>
                                <Link href={`/category/${category.toLowerCase()}`} passHref>
                                    <button>Select {category}</button>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
                <button onClick={handleCompleteBuild} disabled={Object.values(selectedComponents).every((product) => product === null)}>
                    Complete Build
                </button>
            </div>

        </div>
    );
};

export default PCBuilderPage;
