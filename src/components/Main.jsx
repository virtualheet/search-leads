'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FiArrowUpRight } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Main = () => {
    const [activeTab, setActiveTab] = useState('purchased') // 'purchased' or 'invoices'

    return (
        <div className='flex flex-col pop rounded-3xl bg-white h-screen w-full'>
            <div className='flex items-center justify-between'
                style={{
                    padding: 'clamp(0.5rem, 1vw, 20rem)'
                }}
            >
                <div className="flex  bg-[#F5F5F4] rounded-xl">
                    <button
                        className={`font-medium px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-colors ${activeTab === 'purchased'
                                ? 'bg-[#F28100] text-white'
                                : 'bg-transparent text-[#A8A29E]'
                            }`}
                        onClick={() => setActiveTab('purchased')}
                    >
                        <span>Purchased Leads</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${activeTab === 'purchased'
                                ? 'bg-white text-[#F28100]'
                                : 'bg-[#A8A29E] text-[#F5F5F4]'
                            }`}>123</span>
                    </button>
                    <button
                        className={`font-medium px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-colors ${activeTab === 'invoices'
                                ? 'bg-[#F28100] text-white'
                                : 'bg-transparent text-[#A8A29E]'
                            }`}
                        onClick={() => setActiveTab('invoices')}
                    >
                        <span>Invoices</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${activeTab === 'invoices'
                                ? 'bg-white text-[#F28100]'
                                : 'bg-[#A8A29E] text-[#F5F5F4]'
                            }`}>48</span>
                    </button>
                </div>
             {/* saerch icons button */}
             <button className='bg-white border border-black/20 aspect-square text-xl rounded-xl p-3 flex items-center space-x-2 transition-colors'>
                <LuSearch className='text-black' />
             </button>

            </div>
            <div className="flex-1 overflow-auto scrollbar-none">
                <Table
                    className="w-full"
                    style={{
                        padding: '0 clamp(1rem, 2vw, 20rem)'
                    }}
                >
                    <TableCaption>Your Search History</TableCaption>
                    <TableHeader>
                        <TableRow className='text-black/70 items-left'
                            style={{
                                fontSize: 'clamp(0.5rem, 0.85vw, 20rem)'
                            }}
                        >
                            <TableHead className="pl-5">Date</TableHead>
                            <TableHead className="pl-0">Filename</TableHead>
                            <TableHead className="pl-0">Search Link</TableHead>
                            <TableHead className="pl-0">Live Result</TableHead>
                            <TableHead className="pl-0">Status</TableHead>
                            <TableHead className="pl-0">Requested Leads</TableHead>
                            <TableHead className="pl-0">Leads Enriched</TableHead>
                            <TableHead className="pr-10 text-right">Credits</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {exampleData.map((item, index) => (
                            <TableRow
                                key={index}
                                className='font-medium hover:bg-gray-50'
                                style={{
                                    fontSize: 'clamp(0.15rem, 0.9vw, 200rem)'
                                }}
                            >
                                <TableCell
                                    className="pl-5"
                                    style={{
                                        paddingTop: 'clamp(0.5rem, 1vw, 1.5rem)',
                                        paddingBottom: 'clamp(0.5rem, 1vw, 1.5rem)',
                                        paddingRight: '0'
                                    }}
                                >{item.date}</TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >{item.filename}</TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >
                                    <a href={item.searchlink} className="text-black">{item.searchlink}</a>
                                </TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >
                                    <a href={item.liveresultfile} className="text-black">

                                        <button className="bg-[#F5F5F4] inter flex items-center  text-[#A8A29E] px-2 gap-0.5 py-1 rounded-md"
                                            style={{
                                                fontSize: 'clamp(0.5rem, 0.9vw, 200rem)'
                                            }}
                                        >

                                            <FiArrowUpRight className='scale-105' /> Results File
                                        </button>


                                    </a>
                                </TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >
                                    <span className={`capitalize ${item.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                                        }`}>
                                        <button className="bg-[#FEF9F2] inter flex items-center text-[#F49527] px-2 gap-2 py-1 rounded-md"
                                            style={{
                                                fontSize: 'clamp(0.5rem, 0.9vw, 200rem)'
                                            }}
                                        >
                                            <div className="loading-sphere"></div>
                                            Pending
                                        </button>
                                    </span>
                                </TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >{item.requestedleads}</TableCell>
                                <TableCell
                                    style={{
                                        padding: 'clamp(0.5rem, 1vw, 1.5rem) 0',
                                        paddingLeft: '0'
                                    }}
                                >{item.leadsinriched}</TableCell>
                                <TableCell
                                    className="text-right pr-10"
                                    style={{
                                        paddingTop: 'clamp(0.5rem, 1vw, 1.5rem)',
                                        paddingBottom: 'clamp(0.5rem, 1vw, 1.5rem)',
                                        paddingLeft: '0'
                                    }}

                                >{item.credits}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell
                                className="pl-6"
                                colSpan={6}
                                style={{
                                    paddingTop: 'clamp(1rem, 1.5vw, 1.5rem)',
                                    paddingBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
                                    paddingRight: '0'
                                }}
                            >Total</TableCell>
                            <TableCell className="text-right">200</TableCell>
                            <TableCell className="text-right pr-4">200</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

            <div className="flex items-center fixed bottom-4 right-4 justify-center gap-2">
                <button className="w-12 h-10 rounded-xl bg-white shadow-md hover:shadow-lg flex items-center justify-center">
                    <IoIosArrowBack className="text-black"
                        style={{
                            fontSize: 'clamp(1rem, 1.2vw, 1.5rem)'
                        }}
                    />
                </button>

                <button className="w-14 h-10 inter rounded-xl bg-white shadow-md hover:shadow-lg flex items-center justify-center gap-1">
                    <span className="text-black"
                        style={{
                            fontSize: 'clamp(0.875rem, 1vw, 1.25rem)'
                        }}
                    >1</span>
                    <IoIosArrowDown className="text-black "
                        style={{
                            fontSize: 'clamp(1rem, 1.2vw, 1.5rem)'
                        }}
                    />
                </button>

                <button className="w-12 h-10 rounded-xl bg-white shadow-md hover:shadow-lg flex items-center justify-center">
                    <IoIosArrowBack className="text-black rotate-180"
                        style={{
                            fontSize: 'clamp(1rem, 1.2vw, 1.5rem)'
                        }}
                    />
                </button>
            </div>
        </div>
    )
}

export default Main


const exampleData = [
    {
        date: '2024/01/01',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,
        leadsinriched: 100,

        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },
    {
        date: '2024/01/02',
        filename: 'example.csv',
        searchlink: 'https://www.google.com',
        liveresultfile: 'https://www.google.com',
        status: 'completed',
        requestedleads: 100,

        leadsinriched: 100,
        credits: 100
    },

]