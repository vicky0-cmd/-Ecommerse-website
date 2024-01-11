import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql7QO1cKJ2vGPissyg8P5dvN0F0fmajfgtEoaIywuRg&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    we aim to provide best ui experience to our customer.
                                feel free to share your views</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"> vikash kumar</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500"> react js developer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed"> Discover the transformative experiences of our satisfied clients who
                                have greatly benefited from our services. From achieving their
                                business goals to enhancing their online presence, our clients'
                                success stories speak volumes about the impact of our collaboration.
                                We take pride in delivering exceptional solutions tailored to meet
                                their unique needs, and we look forward to adding your success story
                                to our growing list of satisfied clients.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"> our Customer</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Review  </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                Elevate your style with our enchanting sarees that blend tradition and
                                modernity. Immerse yourself in a world of vibrant colors, intricate
                                designs, and luxurious fabrics that tell stories of craftsmanship and
                                heritage. Whether you're attending a special occasion or looking for
                                everyday elegance, our saree collection caters to diverse tastes and
                                preferences.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">  thought</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">goal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial