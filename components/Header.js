import React from 'react';

import Image from 'next/image';

import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';

import HeaderItem from './HeaderItem';


function Header() {
    return (

        <header className="flex flex-col sm:flex-row justify-between items-center mt-3">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="INÍCIO" Icon={HomeIcon} />
                <HeaderItem title="TENDÊNCIAS" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFICADOS" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLEÇÕES" Icon={CollectionIcon} />
                <HeaderItem title="PROCURAR" Icon={SearchIcon} />
                <HeaderItem title="CONTA" Icon={UserIcon} />

            </div>
            <Image
                className="object-contain"
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}
                alt="Hulu logo"
            />
        </header>
    );
}

export default Header;