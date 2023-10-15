import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CONFIG from "public/config.json"


export default function Footer() {
    const year = new Date().getFullYear();
    const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);

    return (
        <footer id="footer" className="py-8 flex justify-space ">
            <div className="">
            <span className="white pr-4">© {year} <Link href="/">RadTrack</Link></span>
            <a
                href={`https://goerli.etherscan.io/address/${_contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white hover:text-blue-700 pr-4"
            >
                {_contractAddress}
            </a>

            </div>
                <ul className="flex">
                    <li className="pr-4">
                        <a href="https://github.com/NuclearGeekETH/RadTrack" target="_blank" rel="noreferrer">
                            <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                        </a>
                    </li>
                    <li className="">
                        <a href="https://ethglobal.com/showcase/rad-track-74dsy" target="_blank" rel="noreferrer">
                            <Image src="/icons/eth.svg" width={14} height={14} alt="ethereum-icon" />
                        </a>
                    </li>
                </ul>
        </footer>
    )
}
