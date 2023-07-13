import React from 'react';
import Image from 'next/image';
import landingImage from '/public/img/LandingImage.jpg';
import Button from 'components/Button/Button';
import Link from 'next/link';

const Body: React.FC = () => {
    return (
        <div className="flex items-center justify-end">
            <div className="max-w flex flex-col">
                <h1 className="font-poppins font-semibold text-6xl text-center">
                    Un recordatorio para ti y la gente que quieres...
                </h1>
                <p className="font-poppins font-regular text-xl text-center mt-3">
                    Mantén el control: Una herramienta de recordatorio de medicamentos para ti y tus seres queridos
                </p>
                <div className="text-center mt-3 p-2">
                    <Button bgColor="blue" color="white" className='w-[200px]'>
                        <Link href="/register">Comienza ahora</Link>
                    </Button>
                </div>
            </div>
            <div>
                <Image src={landingImage} alt="LandingImage" width={800} height={920} />
            </div>
        </div>
    );
};

export default Body;
