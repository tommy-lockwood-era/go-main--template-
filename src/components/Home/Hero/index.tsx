'use client';

import { Typewriter } from 'react-simple-typewriter';
import { ClockIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import { DateRange, DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/style.css';
import '@/styles/dayPickerCustomStyles.css';

export default function Hero() {
    const [hideDropOffLocation, toggleHideDropOffLocation] = useState(true);
    const [dateSelected, setDateSelected] = useState<DateRange>();

    const dayPickerDefaults = getDefaultClassNames();

    console.log(dateSelected);

    return (
        <section
            id='home'
            className='dark:bg-hero-gradient relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[170px]'
        >
            {/* bg-linear-54 from-black from-20% via-[#2E354E] via-65% to-black to-99% */}
            <div className='px-4 xl:container'>
                <div className='-mx-4 flex flex-wrap items-center'>
                    {/* Left Column */}
                    <div className='w-full px-4 lg:w-5/12'>
                        <form className='mx-4 flex w-full flex-col gap-3 rounded-3xl bg-white p-8'>
                            <h2 className='text-2xl font-bold text-black'>
                                Book your Rydio car rental
                            </h2>

                            {/* Pickup Location */}
                            <InputWithIcon
                                name='pickupLocation'
                                placeholder={
                                    hideDropOffLocation
                                        ? 'Pickup & Drop-Off Location'
                                        : 'Pickup Location'
                                }
                            >
                                <MapPinIcon />
                            </InputWithIcon>

                            <InputWithIcon
                                name='dropoffLocation'
                                placeholder='Drop-Off Location'
                                className={hideDropOffLocation ? 'hidden' : ''}
                            >
                                <MapPinIcon />
                            </InputWithIcon>

                            {/*  */}
                            <div>
                                <input
                                    type='checkbox'
                                    name='isSameDropoff'
                                    id='isSameDropoff'
                                    onChange={() =>
                                        toggleHideDropOffLocation(
                                            (prev) => !prev
                                        )
                                    }
                                    checked={hideDropOffLocation}
                                />
                                <label
                                    htmlFor='isSameDropoff'
                                    className='text-black'
                                >
                                    Same Drop-Off Location
                                </label>
                            </div>

                            {/* Pickup & Drop-Off Details */}
                            <div className='grid grid-cols-2 rounded-sm border border-gray-500'>
                                <div className='text-rgreen-400 border-r border-gray-500 py-5 '>
                                    Pickup Details
                                </div>
                                <div className='text-rgreen-400 py-5'>
                                    Pickup Details
                                </div>
                            </div>

                            {/* Pickup & Drop-Off Details Modal */}
                            <div className='fixed left-36 flex hidden flex-col items-end rounded-sm bg-gray-200 p-6 shadow-lg'>
                                <button
                                    type='button'
                                    className='size-8 rounded-full bg-black'
                                >
                                    &#10006;
                                </button>

                                {/* Day Picker */}
                                <div className='text-black'>
                                    <DayPicker
                                        animate
                                        mode='range'
                                        numberOfMonths={2}
                                        selected={dateSelected}
                                        onSelect={setDateSelected}
                                        min={1}
                                        required={true}
                                        disabled={{
                                            before: new Date(),
                                            after: new Date(
                                                new Date().setFullYear(
                                                    new Date().getFullYear() + 1
                                                )
                                            ),
                                        }}
                                        excludeDisabled={true}
                                        // footer={
                                        //   dateSelected
                                        //     ? `Selected: ${dateSelected.toLocaleDateString()}`
                                        //     : "Pick a day."
                                        // }
                                    />
                                    {/* <input type="hidden" name="pickupDate" value={dateSelected?.from?.toISOString().split("T")[0] ?? ""} />
                  <input type="hidden" name="dropOffDate" value={dateSelected?.to?.toISOString().split("T")[0] ?? ""} /> */}
                                </div>

                                <div className='mt-6 grid w-full grid-cols-2 gap-8'>
                                    {/* Pickup Time */}
                                    <div className='relative'>
                                        <select
                                            aria-label='Pickup Time'
                                            name='pickupTime'
                                            className='h-16 w-full rounded-sm border border-gray-500 bg-white px-4 pl-[2.275rem] text-gray-800'
                                            defaultValue=''
                                        >
                                            <option value='' disabled hidden>
                                                Pickup Time
                                            </option>
                                            <option value='00:30:00'>
                                                12:30 AM
                                            </option>
                                            <option value='01:00:00'>
                                                1:00 AM
                                            </option>
                                            <option value='01:30:00'>
                                                1:30 AM
                                            </option>
                                            <option value='02:00:00'>
                                                2:00 AM
                                            </option>
                                            <option value='02:30:00'>
                                                2:30 AM
                                            </option>
                                            <option value='03:00:00'>
                                                3:00 AM
                                            </option>
                                            <option value='03:30:00'>
                                                3:30 AM
                                            </option>
                                            <option value='04:00:00'>
                                                4:00 AM
                                            </option>
                                            <option value='04:30:00'>
                                                4:30 AM
                                            </option>
                                            <option value='05:00:00'>
                                                5:00 AM
                                            </option>
                                            <option value='05:30:00'>
                                                5:30 AM
                                            </option>
                                            <option value='06:00:00'>
                                                6:00 AM
                                            </option>
                                            <option value='06:30:00'>
                                                6:30 AM
                                            </option>
                                            <option value='07:00:00'>
                                                7:00 AM
                                            </option>
                                            <option value='07:30:00'>
                                                7:30 AM
                                            </option>
                                            <option value='08:00:00'>
                                                8:00 AM
                                            </option>
                                            <option value='08:30:00'>
                                                8:30 AM
                                            </option>
                                            <option value='09:00:00'>
                                                9:00 AM
                                            </option>
                                            <option value='09:30:00'>
                                                9:30 AM
                                            </option>
                                            <option value='10:00:00'>
                                                10:00 AM
                                            </option>
                                            <option value='10:30:00'>
                                                10:30 AM
                                            </option>
                                            <option value='11:00:00'>
                                                11:00 AM
                                            </option>
                                            <option value='11:30:00'>
                                                11:30 AM
                                            </option>
                                            <option value='12:00:00'>
                                                12:00 PM
                                            </option>
                                            <option value='12:30:00'>
                                                12:30 PM
                                            </option>
                                            <option value='13:00:00'>
                                                1:00 PM
                                            </option>
                                            <option value='13:30:00'>
                                                1:30 PM
                                            </option>
                                            <option value='14:00:00'>
                                                2:00 PM
                                            </option>
                                            <option value='14:30:00'>
                                                2:30 PM
                                            </option>
                                            <option value='15:00:00'>
                                                3:00 PM
                                            </option>
                                            <option value='15:30:00'>
                                                3:30 PM
                                            </option>
                                            <option value='16:00:00'>
                                                4:00 PM
                                            </option>
                                            <option value='16:30:00'>
                                                4:30 PM
                                            </option>
                                            <option value='17:00:00'>
                                                5:00 PM
                                            </option>
                                            <option value='17:30:00'>
                                                5:30 PM
                                            </option>
                                            <option value='18:00:00'>
                                                6:00 PM
                                            </option>
                                            <option value='18:30:00'>
                                                6:30 PM
                                            </option>
                                            <option value='19:00:00'>
                                                7:00 PM
                                            </option>
                                            <option value='19:30:00'>
                                                7:30 PM
                                            </option>
                                            <option value='20:00:00'>
                                                8:00 PM
                                            </option>
                                            <option value='20:30:00'>
                                                8:30 PM
                                            </option>
                                            <option value='21:00:00'>
                                                9:00 PM
                                            </option>
                                            <option value='21:30:00'>
                                                9:30 PM
                                            </option>
                                            <option value='22:00:00'>
                                                10:00 PM
                                            </option>
                                            <option value='22:30:00'>
                                                10:30 PM
                                            </option>
                                            <option value='23:00:00'>
                                                11:00 PM
                                            </option>
                                            <option value='23:30:00'>
                                                11:30 PM
                                            </option>
                                            <option value='00:00:00'>
                                                12:00 AM
                                            </option>
                                        </select>
                                        <ClockIcon className='text-rgreen-500 absolute left-2 top-1/2 size-6 -translate-y-1/2' />
                                    </div>

                                    {/* Drop-off Time */}
                                    <div className='relative'>
                                        <select
                                            aria-label='Drop-off Time'
                                            name='dropOffTime'
                                            className='h-16 w-full rounded-sm border border-gray-500 bg-white px-4 pl-[2.275rem] text-gray-800'
                                            defaultValue=''
                                        >
                                            <option value='' disabled hidden>
                                                Drop-off Time
                                            </option>
                                            <option value='00:30:00'>
                                                12:30 AM
                                            </option>
                                            <option value='01:00:00'>
                                                1:00 AM
                                            </option>
                                            <option value='01:30:00'>
                                                1:30 AM
                                            </option>
                                            <option value='02:00:00'>
                                                2:00 AM
                                            </option>
                                            <option value='02:30:00'>
                                                2:30 AM
                                            </option>
                                            <option value='03:00:00'>
                                                3:00 AM
                                            </option>
                                            <option value='03:30:00'>
                                                3:30 AM
                                            </option>
                                            <option value='04:00:00'>
                                                4:00 AM
                                            </option>
                                            <option value='04:30:00'>
                                                4:30 AM
                                            </option>
                                            <option value='05:00:00'>
                                                5:00 AM
                                            </option>
                                            <option value='05:30:00'>
                                                5:30 AM
                                            </option>
                                            <option value='06:00:00'>
                                                6:00 AM
                                            </option>
                                            <option value='06:30:00'>
                                                6:30 AM
                                            </option>
                                            <option value='07:00:00'>
                                                7:00 AM
                                            </option>
                                            <option value='07:30:00'>
                                                7:30 AM
                                            </option>
                                            <option value='08:00:00'>
                                                8:00 AM
                                            </option>
                                            <option value='08:30:00'>
                                                8:30 AM
                                            </option>
                                            <option value='09:00:00'>
                                                9:00 AM
                                            </option>
                                            <option value='09:30:00'>
                                                9:30 AM
                                            </option>
                                            <option value='10:00:00'>
                                                10:00 AM
                                            </option>
                                            <option value='10:30:00'>
                                                10:30 AM
                                            </option>
                                            <option value='11:00:00'>
                                                11:00 AM
                                            </option>
                                            <option value='11:30:00'>
                                                11:30 AM
                                            </option>
                                            <option value='12:00:00'>
                                                12:00 PM
                                            </option>
                                            <option value='12:30:00'>
                                                12:30 PM
                                            </option>
                                            <option value='13:00:00'>
                                                1:00 PM
                                            </option>
                                            <option value='13:30:00'>
                                                1:30 PM
                                            </option>
                                            <option value='14:00:00'>
                                                2:00 PM
                                            </option>
                                            <option value='14:30:00'>
                                                2:30 PM
                                            </option>
                                            <option value='15:00:00'>
                                                3:00 PM
                                            </option>
                                            <option value='15:30:00'>
                                                3:30 PM
                                            </option>
                                            <option value='16:00:00'>
                                                4:00 PM
                                            </option>
                                            <option value='16:30:00'>
                                                4:30 PM
                                            </option>
                                            <option value='17:00:00'>
                                                5:00 PM
                                            </option>
                                            <option value='17:30:00'>
                                                5:30 PM
                                            </option>
                                            <option value='18:00:00'>
                                                6:00 PM
                                            </option>
                                            <option value='18:30:00'>
                                                6:30 PM
                                            </option>
                                            <option value='19:00:00'>
                                                7:00 PM
                                            </option>
                                            <option value='19:30:00'>
                                                7:30 PM
                                            </option>
                                            <option value='20:00:00'>
                                                8:00 PM
                                            </option>
                                            <option value='20:30:00'>
                                                8:30 PM
                                            </option>
                                            <option value='21:00:00'>
                                                9:00 PM
                                            </option>
                                            <option value='21:30:00'>
                                                9:30 PM
                                            </option>
                                            <option value='22:00:00'>
                                                10:00 PM
                                            </option>
                                            <option value='22:30:00'>
                                                10:30 PM
                                            </option>
                                            <option value='23:00:00'>
                                                11:00 PM
                                            </option>
                                            <option value='23:30:00'>
                                                11:30 PM
                                            </option>
                                            <option value='00:00:00'>
                                                12:00 AM
                                            </option>
                                        </select>
                                        <ClockIcon className='text-rgreen-500 absolute left-2 top-1/2 size-6 -translate-y-1/2' />
                                    </div>
                                </div>

                                <button
                                    type='button'
                                    className='bg-rgreen-600 mt-6 h-12 w-full max-w-[308px] rounded-full font-semibold'
                                >
                                    Apply
                                </button>
                            </div>

                            <div className='flex justify-between'>
                                <div>
                                    Discount:{' '}
                                    <button type='button'>+ Add</button>
                                </div>
                                <div>
                                    Driver"s age:{' '}
                                    <button type='button'>25+</button>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='bg-rgreen-700 h-16 w-full rounded-full px-6 py-4'
                            >
                                View Vehicles
                            </button>
                            <button
                                type='submit'
                                className='bg-rgreen-500 h-16 w-full rounded-2xl px-6 py-4 font-bold'
                            >
                                View Vehicles
                            </button>
                            <button
                                type='submit'
                                className='bg-rgreen-300 text-shadow-md h-16 w-full rounded-full px-6 py-4 text-xl font-semibold'
                            >
                                View Vehicles
                            </button>
                            <button
                                type='submit'
                                className='bg-linear-to-br from-rgreen-300 to-rgreen-500 h-16 w-full rounded-full from-20% px-6 py-4'
                            >
                                View Vehicles
                            </button>
                            <button
                                type='submit'
                                className='text-rgreen-500 border-rgreen-500 h-16 self-center rounded-full border-2 bg-white px-16 py-4 font-semibold'
                            >
                                View Vehicles
                            </button>
                            <Link href='https://google.com'>
                                Looking to buy? Try Rydio Car Sales
                            </Link>
                        </form>
                    </div>
                    {/* Right Column */}
                    <div className='w-full px-3 lg:w-7/12'>
                        <div className='mx-auto mb-12 max-w-[720px] text-center lg:mb-0 lg:ml-0 lg:text-left'>
                            <h1 className='font-heading mb-5 max-w-[530px] text-2xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white'>
                                Next.js Boilerplate for Your{' '}
                                <Typewriter
                                    words={[
                                        'Startup',
                                        'SaaS',
                                        'Business',
                                        'Agency',
                                    ]}
                                    cursor
                                    loop={0}
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <h2 className='text-dark-text mb-12 text-base'>
                                Handcrafted Next.js starter for your next -
                                Startup, Business, Agency or SaaS Website.
                            </h2>
                            <div className='flex flex-col gap-4 lg:flex-row'>
                                <div className='flex gap-2'>
                                    <SparklesIcon className='size-6' />
                                    <div>
                                        <p className='font-bold'>
                                            #1 Loyalty Program
                                        </p>
                                        <p>Voted by customers via Newsweek</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <SparklesIcon className='size-6' />
                                    <div>
                                        <p>#2 Skip the line</p>
                                        <p>No hassle, just drive</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <SparklesIcon className='size-6' />
                                    <div>
                                        <p>#3 Trusted for 100+ years</p>
                                        <p>
                                            With 10k+ rental locations worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-noise-pattern absolute bottom-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40'></div>
            {/* <div className="absolute right-0 top-0 -z-10">
        <svg
          width="1356"
          height="860"
          viewBox="0 0 1356 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_2181)">
            <rect
              x="450.088"
              y="-126.709"
              width="351.515"
              height="944.108"
              transform="rotate(-34.6784 450.088 -126.709)"
              fill="url(#paint0_linear_201_2181)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2181"
              x="0.0878906"
              y="-776.711"
              width="1726.24"
              height="1876.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2181"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2181"
              x1="417.412"
              y1="59.4717"
              x2="966.334"
              y2="603.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <svg
          width="1469"
          height="498"
          viewBox="0 0 1469 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_201_2182)">
            <rect
              y="450"
              width="1019"
              height="261"
              fill="url(#paint0_linear_201_2182)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2182"
              x="-450"
              y="0"
              width="1919"
              height="1161"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2182"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2182"
              x1="-94.7239"
              y1="501.47"
              x2="-65.8058"
              y2="802.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
        </section>
    );
}

function InputWithIcon({
    name,
    placeholder,
    children,
    className,
}: {
    name: string;
    placeholder: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`relative rounded-sm border border-gray-500 ${className ?? ''}`}
        >
            <div className='text-rgreen-500 absolute left-2 top-1/2 size-6 -translate-y-1/2'>
                {children}
            </div>
            <input
                name={name}
                placeholder={placeholder}
                className='h-16 w-full pl-10 text-gray-800'
            />
        </div>
    );
}
