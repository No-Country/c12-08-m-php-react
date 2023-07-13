import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/svg/Logo.svg';
import Button from 'components/Button/Button';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white w-full font-poppins font-semibold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" width={50} height={50} />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-4">
                                <Link href="/">
                                    Inicio
                                </Link>
                                <Link href="/howWorks">
                                    Cómo funciona
                                </Link>
                                <Link href="/benefits">
                                    Beneficios
                                </Link>
                                <Link href="/testimonials">
                                    Testimonios
                                </Link>
                                <Link href="/contact">
                                    Contacto
                                </Link>
                            </div>
                            <div>
                                <Button bgColor="green" color="white" className="shadow-lg">
                                    <Link href="/login">
                                        Log in
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
