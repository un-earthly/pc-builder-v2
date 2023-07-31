
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const categories = [
    {
        id: 'cpu',
        name: 'CPU / Processor',
        components: [
            { id: 'cpu1', name: 'CPU 1', category: 'CPU', price: 200, status: 'In Stock', rating: 4.5 },
            { id: 'cpu2', name: 'CPU 2', category: 'CPU', price: 300, status: 'Out of Stock', rating: 3.8 },
        ],
    },
];

const PCBuilderPage = () => {
    const [selectedComponents, setSelectedComponents] = useState({});

    const handleAddToBuilder = (category, componentId) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            [category]: componentId,
        }));
    };

    const handleCompleteBuild = () => {
        
    };

    return (
        <div>
            <h1>PC Builder</h1>
            <div className="grid grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category.id}>
                        <h2>{category.name}</h2>
                        <Link href={`/pc-builder/${category.id}`}>
                            <button>Choose / Select</button>
                        </Link>
                    </div>
                ))}
            </div>
            <h2>Selected Components:</h2>
            <ul>
                {Object.entries(selectedComponents).map(([category, componentId]) => (
                    <li key={componentId}>
                        {category}: {componentId}
                    </li>
                ))}
            </ul>
            <button onClick={handleCompleteBuild} disabled={Object.keys(selectedComponents).length < 5}>
                Complete Build
            </button>
        </div>
    );
};

export default PCBuilderPage;
