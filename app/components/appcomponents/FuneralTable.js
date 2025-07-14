"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import obituaryService from "@/services/obituary-service";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

const FuneralTable = () => {
    const breakpoint = useBreakpoint()

    if (breakpoint == "desktop" || breakpoint == "tablet"){
        return (
            <div className="relative flex-col w-full overflow-hidden mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[80px] flex justify-center items-center">
            
            <h1 className="text-[40px] leading-[48px] text-[#3C3E41] mt-[108px] mb-[56px]"><span className="font-bold  text-[#EB1D1D]"> 25+ </span> brezplačnih možnosti</h1>

                <div className="tablet:w-[686px] w-[765px] mx-auto flex items-end flex-col h-20 text-[#3C3E41] mobile:hidden">
                <div className="flex flex-col items-start">
                        <div className="inline-flex">
                            <img 
                            src="/table_check_sm.png"
                            className="mr-3 object-contain"
                            />
                            Brezplačno
                        </div>

                        <div className="inline-flex">
                            <img 
                            src="/table_star_sm.png"
                            className=" ml-1 mr-4 object-contain"
                            />
                            Plačljivo
                        </div>
                </div>
                </div>

            <table className=" text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
                    <thead>
                        <tr className="bg-[#2B5D80]
                        text-white h-[83px] mobile:hidden">
                            <th className="p-2 mobile:pl-4 pl-[34px] border border-[#D4D4D4] w-[468px]">Možnosti na Spominskih stranah</th>
                            <th className="p-2 border border-[#D4D4D4] tablet:w-[110px] desktop:w-[147px] text-center font-semibold  leading-[20px]  ">Spominske <span className="font-bold text-[20px] text-[#CAF0F8]">BREZ  <br className="my-0"/> </span>Skrbnika</th>
                            <th className="p-2 border border-[#D4D4D4] tablet:w-[110px] desktop:w-[147px] text-center font-semibold  leading-[20px]  ">Spominske <span className="font-bold text-[20px] text-[#CAF0F8]"> <br className="my-0"/>S  <br className="my-0"/> </span>Skrbnikom</th>
                        </tr>

                        <tr className="bg-[#2B5D80]
                        text-white h-[60px] tablet:hidden desktop:hidden">
                            <th className="p-2 mobile:pl-4 border border-[#D4D4D4] w-[238px] font-semibold text-[16px] whitespace-nowrap">Možnosti na Spominskih</th>
                            <th className="p-1 border border-[#D4D4D4] w-[60px] text-center font-semibold h-[60px] text-[12px]"> <span className="font-bold text-[16px] text-[#CAF0F8]">BREZ  <br className="my-0"/> </span>Skrbnika</th>
                            <th className="p-0 border border-[#D4D4D4] w-[60px] text-center font-semibold text-[12px] "> <span className="font-bold text-[16px] text-[#CAF0F8]"> S  <br className="my-0"/> </span>Skrbnikom</th>
                        </tr>

                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">BREZPLAČNO za vse</th>
                            <th  className="p-2 bg-gray-200 "></th>
                            <th  className="p-2 bg-gray-200 "></th>
                        </tr>

                        <tr className="tablet:hidden desktop:hidden relative">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4  pl-[34px] font-bold text-[#414B5A]">BREZPLAČNO za vse</th>
                            <th  className="p-2 bg-gray-200 "></th>
                            <th  className="p-2 bg-gray-200 "></th>

                            <div className="flex flex-col items-start absolute right-0">
                                <div className="inline-flex">
                                    <img 
                                    src="/table_check_sm.png"
                                    className="mr-3 object-contain"
                                    />
                                    Brezplačno
                                </div>

                                <div className="inline-flex">
                                    <img 
                                    src="/table_star_sm.png"
                                    className=" ml-[0px]  mr-4 object-contain"
                                    />
                                    Plačljivo
                                </div>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dnevna svečka</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                            {/* <td className="p-2 border border-gray-300 tablet:pl-[48px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td> */}
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>

                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Vpis v Žalno knjigo</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>
            
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Izrekanje sožalja (izbira)</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Podrobne informacije o straneh, ki nas zanimajo</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Opomniki za obletnice</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">BREZPLAČNO za vse, v kolikor ima stran skrbnika</th>
                            <th  className="p-2 bg-gray-200 "></th>
                            <th  className="p-2 bg-gray-200 "></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Izrekanje poljubnega sožalja</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje fotografij</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Posvetilo, Zadnji klic, Zahvala, deljenje zgodb</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[48px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Še več MOBI predlog za pošiljanje naprej</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[48px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">Dodatne možnosti za Skrbnika spominske strani </th>
                            <th  className="p-2 bg-gray-200 "></th>
                            <th  className="p-2 bg-gray-200 "></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Vsi drugi pridobijo možnost objavljati dodatne vsebine</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Skrbnik odloča, kaj je objavljeno in kaj ne</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Nastavitve zasebnosti (dostop do strani preko gesla)</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje religioznega simbola </td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Spreminjanje osmrtnice</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje glasbe</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje verza ali misli</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Spreminjanje ozadja</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje dogodkov</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dodajanje spominov, Zahvala, Zadnji pozdrav, poezije</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Virtualna svečka - letna, 6-letna</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_star.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Povabi dodatnega skrbnika</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Podrobni pregled in statistike na straneh, kjer smo Skrbnik</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Obveščanje o spremembah na straneh, kjer smo Skrbnik</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">MOBI predloge za Skrbnika</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"></td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>
                       
                    </tbody>

                    
            </table>
            <div className="tablet:w-[686px] w-[765px] mx-auto flex items-center justify-between flex-row h-20 text-[#3C3E41] mobile:hidden">
                        <div className="flex flex-col items-start text-[#3C3E41] text-[15px]">
                            <p>Tekst v <span className="underline text-[#0769FD] text-[14px]"> MODRI</span> barvi - registracija ni potrebna</p>
                            <p>Tekst v   <span className="underline text-[#0769FD] text-[14px]"> TEMNI</span>barvi - potrebna je brezplačna registracija    </p>
                        </div>

                        <div className="flex flex-col items-start">
                                <div className="inline-flex">
                                    <img 
                                    src="/table_check_sm.png"
                                    className="mr-3 object-contain"
                                    />
                                    Brezplačno
                                </div>

                                <div className="inline-flex">
                                    <img 
                                    src="/table_star_sm.png"
                                    className=" ml-1  mr-4 object-contain"
                                    />
                                    Plačljivo
                                </div>
                        </div>
            </div>

            <table className=" text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
   
                    <thead>
                        <tr className="bg-[#2B5D80]
                        text-white h-[83px] mobile:hidden">
                            <th className="p-2 mobile:pl-4 pl-[34px] w-[576px]">Možnosti na Spominskih stranah</th>
                            <th className="p-2 tablet:w-[110px] desktop:w-[147px]"></th>
                        </tr>

                        <tr className="bg-[#2B5D80]
                        text-white h-[60px] tablet:hidden desktop:hidden">
                            <th className="p-2 mobile:pl-4 border border-[#D4D4D4] w-[238px] font-semibold text-[16px] whitespace-nowrap">Možnosti na Spominskih</th>
                            <th className="p-1 border border-[#D4D4D4] w-[60px] text-center font-semibold h-[60px] text-[12px]"> <span className="font-bold text-[16px] text-[#CAF0F8]">BREZ  <br className="my-0"/> </span></th>
                        </tr>

                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">BREZPLAČNO za vse</th>
                            <th  className="p-2 bg-gray-200 "></th>
                        </tr>

                        <tr className="tablet:hidden desktop:hidden relative">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4  pl-[34px] font-bold text-[#414B5A]">BREZPLAČNO za vse</th>
                            <th  className="p-2 bg-gray-200 "></th>

                            <div className="flex flex-col items-start absolute right-0">
                                <div className="inline-flex">
                                    <img 
                                    src="/table_check_sm.png"
                                    className="mr-3 object-contain"
                                    />
                                    Brezplačno
                                </div>

                                <div className="inline-flex">
                                    <img 
                                    src="/table_star_sm.png"
                                    className=" ml-[0px]  mr-4 object-contain"
                                    />
                                    Plačljivo
                                </div>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Dnevna svečka</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Izdelava spominske strani</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Obveščanje drugih preko e-pošte</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">MOBI predloga Obvestilo o pogrebu za pošiljanje naprej</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#0769FD] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">MOBI predloge Zahvala in Moje sožalje za pošiljanje naprej</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">LOKALNO - Hitri pregled osmrtnic in pogrebov v domačem kraju</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Direktni kontakt s cvetličarnami, pogrebnimi podjetji</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                    </tbody>
                    
            </table>

            <table className="mt-11 text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
                    <thead>
                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">Plačljive opcije, ki so tekom promocije brezplačne v cvetličarnah, pogrebnih podjetjih</th>
                        </tr>
                    </thead>
            </table>

            <table className=" text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
   
                    <thead>

                    <tr className="h-0 p-0">
                        <th  className=" h-0 p-0  w-[608px]  "></th>
                        <th  className=" h-0 p-0"></th>
                    </tr>

                     
                    </thead>
                    <tbody>
                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Mesečni Skrbnik</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">MOBI predloge</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                        <tr className="border-b  h-[45px]">
                            <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Posvetilo, Zadnji klic, Zahvala, deljenje zgodb</td>
                            <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                        </tr>

                    </tbody>
                    
            </table>

            <table className="mt-11 text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
                    <thead>
                        <tr className="mobile:hidden">
                            <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A] h-[60px]">Plačljive opcije</th>
                        </tr>
                    </thead>
            </table>

            <table className=" text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">

                <thead>
                    <tr className="h-0 p-0">
                        <th  className=" h-0 p-0  w-[608px]  "></th>
                        <th  className=" h-0 p-0"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b  h-[45px]">
                        <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Poudarjena osmrtnica</td>
                        <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                    </tr>

                    <tr className="border-b  h-[45px]">
                        <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Letni / 6-letni  Skrbnik</td>
                        <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                    </tr>

                    <tr className="border-b  h-[45px]">
                        <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] underline decoration-dotted text-[15px] text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px]">Animirana virtualna svečka, ki ‘gori’ eno leto ali 6 let; z dodanim imenom <span className="text-[#EB1D1D]">*</span> </td>
                        <td className="p-2 border border-gray-300 tablet:pl-[45px] desktop:pl-[67px]"><img src="/table_check.png" className="object-contain"/></td>
                    </tr>

                </tbody>
                
            </table>

            <p className="underline decoration-dotted mt-5 mb-20 mx-auto  text-[#2B5D80] decoration-[#ACAAAA] underline-offset-4 decoration-[2px] tablet:w-[686px] w-[765px] text-[12px]">
                 <span className="text-[#EB1D1D]">*</span>  Z nakupom animirane svečke istočasno hkrati podaljšaš status Skrbnika obstoječemu Skrbniku za enak čas 
            </p>

            </div>
        );
    }

    if (breakpoint == "mobile"){
        return (
        <div className="relative flex-col w-full overflow-hidden mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[80px] flex justify-center items-center">
        
        <h1 className="text-[40px] leading-[48px] text-[#3C3E41] mt-[108px] mb-[56px]"><span className="font-bold  text-[#EB1D1D]"> 25+ </span> brezplačnih možnosti</h1>

        <table className=" text-left border-collapse text-[#3C3E41] w-[358px] tablet:w-[689px] desktop:w-[765px] mx-auto">
                <thead>
                    <tr className="bg-[#2B5D80]
                    text-white h-[83px] mobile:hidden">
                        <th className="p-2 mobile:pl-4 pl-[34px] border border-[#D4D4D4] w-[468px]">Možnosti na Spominskih stranah</th>
                        <th className="p-2 border border-[#D4D4D4] tablet:w-[110px] desktop:w-[147px] text-center font-semibold  leading-[20px]  ">Spominske <span className="font-bold text-[20px] text-[#CAF0F8]">BREZ  <br className="my-0"/> </span>Skrbnika</th>
                        <th className="p-2 border border-[#D4D4D4] tablet:w-[110px] desktop:w-[147px] text-center font-semibold  leading-[20px]  ">Spominske <span className="font-bold text-[20px] text-[#CAF0F8]"> <br className="my-0"/>S  <br className="my-0"/> </span>Skrbnikom</th>
                    </tr>

                    <tr className="bg-[#2B5D80]
                    text-white h-[60px] tablet:hidden desktop:hidden">
                        <th className="p-2 mobile:pl-4 border border-[#D4D4D4] w-[238px] font-semibold text-[16px] whitespace-nowrap">Možnosti na Spominskih</th>
                        <th className="p-1 border border-[#D4D4D4] w-[60px] text-center font-semibold h-[60px] text-[12px]"> <span className="font-bold text-[16px] text-[#CAF0F8]">BREZ  <br className="my-0"/> </span>Skrbnika</th>
                        <th className="p-0 border border-[#D4D4D4] w-[60px] text-center font-semibold text-[12px] "> <span className="font-bold text-[16px] text-[#CAF0F8]"> S  <br className="my-0"/> </span>Skrbnikom</th>
                    </tr>

                    <tr className="mobile:hidden">
                        <th  className="p-2 bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A]">BREZPLAČNO za vse</th>
                        <th  className="p-2 bg-gray-200 "></th>
                        <th  className="p-2 bg-gray-200 "></th>
                    </tr>

                    <tr className="tablet:hidden desktop:hidden relative">
                        <th  className="p-2 text-[14px] bg-gray-200 border mobile:pl-4 pl-[34px] font-bold text-[#414B5A]">BREZPLAČNO za vse</th>
                        <th  className="p-2 bg-gray-200 "></th>
                        <th  className="p-2 bg-gray-200 "></th>

                        <div className="flex flex-col items-start text-[12px] absolute right-1">
                            <div className="inline-flex">
                                <img 
                                src="/table_check_sm.png"
                                className="mr-2 object-contain"
                                />
                                Brezplačno
                            </div>

                            <div className="inline-flex">
                                <img 
                                src="/table_star_sm.png"
                                className=" ml-[0px]  mr-4 object-contain"
                                />
                                Plačljivo
                            </div>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b  h-[45px]">
                        <td className="p-2 border border-gray-300 mobile:pl-4 pl-[34px] text-[15px] text-[#0769FD]">Dnevna svečka</td>
                        <td className="p-2 border border-gray-300 pl-[22px]"><img src="/table_check_sm.png" className="object-contain"/></td>
                        <td className="p-2 border border-gray-300 pl-6"><img src="/table_star_sm.png" className="object-contain"/></td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
    }
 
};

export default FuneralTable;
