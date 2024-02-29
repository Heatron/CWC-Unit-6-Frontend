'use client';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean, faBarsStaggered, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { usePathname, useRouter } from 'next/navigation';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";


export default function NavigationBar() {

    const router = useRouter();

    const pathname = usePathname();
    var navItems = [
        {
            name: 'About',
            href: '/about',
            isActive: () => {
                return pathname === '/about'
            }
        }, {
            name: 'Our Team',
            href: '/team',
            isActive: () => {
                return pathname === '/team'
            }
        }, {
            name: 'Careers',
            href: '/careers',
            isActive: () => {
                return pathname === '/careers'
            }
        }, {
            name: 'Contact',
            href: '/contact',
            isActive: () => {
                return pathname === '/contact'
            }
        }, {
            name: 'Resources',
            href: '/resources',
            isActive: () => {
                return pathname === '/resources'
            }
        }
    ]

    return (
        <nav className="px-12 relative pt-2 pb-4 w-full overflow-hidden">
            <div className="grid mt-3 grid-cols-2 lg:grid-cols-6">
                <div className="inline-flex mt-1">
                    <a href='/' className="inline-flex items-center font-bold"> <img src="https://i.ibb.co/hmLq74j/favicon.png" alt="Hot Beans" className="mr-2" style={{ width: '3rem', height: '3rem' }} /> <span style={{fontWeight: 'bold', fontStyle: 'italic', display: 'inline-block', verticalAlign: 'middle'}}>Hot Beans</span></a>
                </div>
                <div className="hidden text-center mt-1 col-span-4 lg:visible lg:flex justify-evenly">
                    {
                        navItems.map((item, index) => (
                            <a key={index} href={item.href} className={
                                (item.isActive() ? 'font-bold' : '') + ' px-3 py-3 mx-2 hover:font-bold hover:dark:bg-[#afccff] hover:bg-[#191919] hover:text-[#afccff] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out' 
                            }>{item.name}</a>
                        ))
                    }
                </div>
                <div className="lg:hidden inline-flex justify-end">
                <Sheet>
                    <SheetTrigger><FontAwesomeIcon icon={faBarsStaggered} className="text-2xl" /></SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <SheetTitle><a href="/">
                                <img src="https://i.ibb.co/hmLq74j/favicon.png" alt="Hot Beans"/> Hot Beans
                            </a></SheetTitle>
                        </SheetHeader>
                        <Separator className="dark:bg-[#afccff] bg-[#191919] my-2"/>
                        <ul className="mt-2">
                            {navItems.map((item, index) => (
                                <li key={index*2} className="px-3 py-2 my-2 mx-2 hover:font-bold hover:dark:bg-[#5e86ff] hover:bg-[#191919] hover:text-[#afccff] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out">
                                    <a href={item.href} className={
                                        (item.isActive() ? 'font-bold' : '') + '' 
                                    }>{item.name}</a>
                                </li>

                            ))}  
                            
                        </ul>
                        <Separator className="dark:bg-[#afccff] bg[#191919] mb-2"/>
                        
                        <SheetFooter className="absolute bottom-5 right-5">
                            <ModeToggle />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                </div>
                <div className="hidden lg:inline-flex justify-end">
                    <ModeToggle />
                </div>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="hidden lg:absolute bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="hidden lg:absolute bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
        </nav>
    )
}