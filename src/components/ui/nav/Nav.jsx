import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../../common/Button";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/products", label: "Products" },
        { path: "/contact", label: "Contact" },
    ];

    const navLinkClass = ({ isActive }) =>
        `block py-2 md:py-0 ${isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"
        }`;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-blue-600">
                        My App
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                end={path === "/"}
                                className={navLinkClass}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Button
                            name="Login"
                            style="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t py-4">
                        <div className="flex flex-col gap-4">
                            {navItems.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    end={path === "/"}
                                    className={navLinkClass}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            ))}

                            <Button
                                name="Login"
                                style="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;