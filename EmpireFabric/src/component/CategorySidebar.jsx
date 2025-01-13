import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/BOUFFANT CAP.jpg';
import img2 from '../assets/images/SURGEON CAp.jfif';
import img3 from '../assets/images/Plastic Shoe Cover (1).jfif';
import img4 from '../assets/images/Non-Woven Shoe Cover.webp';
import img5 from '../assets/images/NITRILE HAND GLOVES.jfif';
import img6 from '../assets/images/LATEX HAND GLOVES.jfif';
import img7 from '../assets/images/3ply mask.jfif';
import img8 from '../assets/images/beard cover.jfif';
import img9 from '../assets/images/plastic hand gloves.jfif';
import img10 from '../assets/images/LAB COAT.jpg';
import img11 from '../assets/images/apron.jpg';
import img12 from '../assets/images/non wooven apron.jfif';
import img13 from '../assets/images/non-woolen-bed.webp';
import img14 from '../assets/images/plastic bed sheet.jfif';
import img15 from '../assets/images/gown (1).jpg'

const categories = ['Bouffant Cap', 'Surgeon cap', 'Plastic Shoe Cover', 'Non-Woven Shoe Cover', 'Nitrile Hand Gloves', 'Latex Examination Hand Gloves', 'Surgical Face Mask', 'Beard Cover', 'Plastic Hand Gloves', 'Disposable Visitor Lab Coat',
    'Plastic Apron', 'Non-Woven Apron', 'Non Woven Bed Sheet', 'Plastic Bed Sheet', 'Surgical Gown'];

const CategoryContent = ({ selectedCategory }) => {
    switch (selectedCategory) {
        case 'Bouffant Cap':
            return (
                <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                    <img src={img1} className=" w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                    <div className='p-5 w-full lg:w-[438px] h-[368]'>
                        <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                            Bouffant Cap: Hygiene and Environmental Considerations
                        </h1>
                        <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A **Bouffant Cap** is a disposable head covering used in medical, food, and laboratory settings to maintain hygiene by preventing hair contamination. While effective in ensuring cleanliness, these caps are often made from non-biodegradable materials, raising concerns about environmental impact. Efforts are underway to develop more sustainable alternatives.</p>
                    </div>
                </div>
            );
        case 'Surgeon cap':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img2} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5 w-[438px] h-[368]'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Surgeon Cap: Medical Hygiene and Protection
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Surgeon Cap is a specialized head covering worn by surgeons and medical staff during procedures to maintain sterile environments. It prevents hair and other particles from contaminating surgical areas. Typically made from disposable or breathable materials, these caps are essential for hygiene and patient safety in operating rooms. Like other disposable medical gear, surgeon caps raise concerns regarding waste, prompting the development of more sustainable options.</p>
                </div>
            </div>;
        case 'Plastic Shoe Cover':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img3} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px] " alt="" />
                <div className='p-5  w-[438px] h-[368]'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Plastic Shoe Covers: Hygiene and Environmental Concerns
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>
                        Plastic Shoe Covers are disposable covers worn over footwear to maintain cleanliness and prevent contamination in sterile or controlled environments, such as hospitals, laboratories, and clean rooms. They are commonly made from waterproof plastic materials that protect floors and surfaces from dirt, moisture, and germs. However, due to their single-use nature, plastic shoe covers contribute to environmental waste, leading to increased calls for eco-friendly alternatives.
                    </p>
                </div>
            </div>;
        case 'Non-Woven Shoe Cover':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img4} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px] " alt="" />
                <div className='p-5 w-[438px] h-[368]'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Non-Woven Shoe Covers: Hygiene and Eco-Friendly Alternatives
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>Non-Woven Shoe Covers are protective coverings designed to be worn over shoes to prevent contamination in clean or sterile environments. Made from non-woven fabrics, they offer a more breathable and comfortable alternative to plastic shoe covers. These covers are typically used in hospitals, laboratories, and manufacturing areas. Unlike plastic versions, non-woven shoe covers are often more biodegradable, making them a more eco-friendly option for reducing waste.</p>
                </div>
            </div>;
        case 'Nitrile Hand Gloves':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img5} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px] " alt="" />
                <div className='p-5 w-[438px] h-[368]'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Nitrile Hand Gloves: Durability and Safety
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>Nitrile Hand Gloves are a type of synthetic rubber gloves known for their durability, puncture resistance, and chemical protection. Commonly used in medical, industrial, and food handling settings, nitrile gloves provide a high level of protection against contaminants, viruses, and hazardous materials. They are latex-free, making them ideal for individuals with latex allergies. Nitrile gloves are also more resistant to tears and wear compared to latex or vinyl alternatives.</p>
                </div>
            </div>;
        case 'Latex Examination Hand Gloves':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img6} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Latex Examination Hand Gloves: Comfort and Protection
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>
                        Latex Examination Hand Gloves are commonly used in medical and healthcare settings to provide a barrier between healthcare professionals and patients, protecting against contaminants and bodily fluids. These gloves are known for their comfort, flexibility, and excellent tactile sensitivity, making them ideal for delicate procedures. However, they may cause allergic reactions in some individuals due to the presence of natural latex proteins, which has led to increased demand for latex-free alternatives.
                    </p>
                </div>
            </div>;
        case 'Surgical Face Mask':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img7} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Surgical Face Mask: Protection and Hygiene
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>
                        A Surgical Face Mask is a protective mask worn by healthcare professionals during medical procedures to prevent the spread of germs and contaminants. Made from multiple layers of fabric, these masks help block large droplets, bacteria, and viruses, reducing the risk of infection. Surgical masks are also used in public settings to limit the transmission of airborne illnesses. However, their disposable nature contributes to environmental waste, prompting calls for more sustainable solutions.
                    </p>
                </div>
            </div>;
        case 'Beard Cover':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img8} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Beard Cover: Hygiene and Contamination Control
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>
                        Beard Cover is a disposable protective covering worn over facial hair to prevent contamination in sterile or food-processing environments. Commonly used in healthcare, food production, and cleanroom settings, it ensures that hair does not interfere with the cleanliness of the area or process. Made from lightweight, breathable materials, beard covers are designed to be comfortable and hygienic, contributing to safety and hygiene protocols.
                    </p>
                </div>
            </div>;
        case 'Plastic Hand Gloves':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img9} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px] " alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Plastic Hand Gloves: Basic Protection and Hygiene
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>Plastic Hand Gloves are disposable gloves made from polyethylene or other plastic materials, designed to provide basic protection during tasks that require hygiene, such as food handling or cleaning. These gloves are lightweight and cost-effective, offering a barrier against dirt, oils, and minor contaminants. While not as durable or puncture-resistant as nitrile or latex gloves, they are commonly used in low-risk environments for short-duration tasks.</p>
                </div>
            </div>;
        case 'Disposable Visitor Lab Coat':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img10} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px] " alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Disposable Visitor Lab Coat: Hygiene and Protection
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>
                        A Disposable Visitor Lab Coat is a lightweight, single-use garment designed to protect visitors from contaminants in controlled environments, such as laboratories, clean rooms, or medical facilities. Made from non-woven materials like polypropylene, these lab coats provide a barrier against dust, dirt, and minor chemical exposure. They are commonly worn by non-technical staff or visitors to maintain cleanliness and prevent the introduction of external contaminants into sterile environments.
                    </p>
                </div>
            </div>;
        case 'Plastic Apron':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img11} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Plastic Apron: Protection and Hygiene
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Plastic Apron is a protective garment made from lightweight plastic materials, designed to shield clothing and skin from dirt, liquids, and contaminants. Commonly used in healthcare, food processing, and cleaning tasks, plastic aprons are disposable and provide a barrier against spills, chemicals, and bodily fluids. They are easy to wear, cost-effective, and ideal for short-duration tasks where protection is needed without the need for full-body coverage.</p>
                </div>
            </div>;
        case 'Non-Woven Apron':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img12} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Non-Woven Apron: Lightweight Protection
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Non-Woven Apron is a protective garment made from non-woven fabrics, designed to offer comfort and hygiene during tasks that may involve exposure to dirt, liquids, or contaminants. These aprons are commonly used in healthcare, food service, and industrial settings, providing a barrier without the bulk of traditional protective wear. Non-woven aprons are breathable, lightweight, and disposable, making them a cost-effective choice for tasks requiring short-term</p>
                </div>
            </div>;
        case 'Non Woven Bed Sheet':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img13} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Non-Woven Bed Sheet: Hygiene and Comfort
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Non-Woven Bed Sheet is a disposable bedding solution made from non-woven fabrics, often used in hospitals, clinics, and healthcare settings. These bed sheets offer a hygienic, cost-effective alternative to traditional fabric sheets, providing a barrier against contaminants while maintaining comfort. Lightweight and breathable, non-woven bed sheets are designed for single-use, making them ideal for environments where cleanliness and convenience are top priorities.</p>
                </div>
            </div>;
        case 'Plastic Bed Sheet':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img14} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Plain Drape (Plastic Bed Sheet): Protection and Hygiene
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Plain Drape (Plastic Bed Sheet) is a disposable protective sheet made from plastic material, commonly used in medical, healthcare, and laboratory settings. It provides a hygienic barrier against spills, fluids, and contaminants, ensuring patient safety and cleanliness during procedures or bed rest. Plastic bed sheets are cost-effective, easy to clean, and commonly used for single-use purposes, offering convenience and effective contamination </p>
                </div>
            </div>;
        case 'Surgical Gown':
            return <div className="flex flex-col lg:flex-row items-center justify-evenly w-full shadow-md">
                <img src={img15} className="w-[30%] h-[30%] lg:w-[400px] lg:h-[368px]" alt="" />
                <div className='p-5'>
                    <h1 className='mb-3 font-semibold text-[18px] lg:text-[22px] font-mono'>
                        Disposable Surgical Gown: Sterility and Protection
                    </h1>
                    <p className='text-[14px] lg:text-[16px] text-gray-600 text-justify font-mono'>A Disposable Surgical Gown is a single-use garment worn by healthcare professionals during surgeries and medical procedures to maintain a sterile environment. Made from non-woven materials, these gowns offer protection against contaminants, bodily fluids, and infections. They are designed to be fluid-resistant, ensuring that both the wearer and the patient are shielded from exposure to harmful substances. Disposable surgical gowns are commonly used in hospitals and clinics for infection control and hygiene.</p>
                </div>
            </div>;

        default:
            return <div className="p-4">Select a category</div>;
    }
};

const CategorySidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Set default to first category

    useEffect(() => {
        // Ensure that the first category is selected when the component mounts
        setSelectedCategory(categories[0]);
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <div className="flex mb-5">
            {/* Sidebar */}
            <div className=" scrollbar w-[30%] h-[400px] pe-3 overflow-scroll">
                <ul>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`p-3 text-[14px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${selectedCategory === category
                                ? 'bg-blue-500 text-white mb-3'
                                : 'hover:bg-blue-500 hover:text-white mb-3 border'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content */}
            <div className="w-[80%] ps-3">
                <div className="flex-1 h-full bg-white">
                    <CategoryContent selectedCategory={selectedCategory} />
                </div>
            </div>
        </div>
    );
};

export default CategorySidebar;