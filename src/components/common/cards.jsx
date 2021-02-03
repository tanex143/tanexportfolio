const Cards = ({ projectData }) => {
  return (
    <>
      {projectData.map((project) => (
        <div key={project.id} className='bg-gray-700 px-2 py-10'>
          <div className='container mx-auto'>
            {project.id % 2 === 0 ? (
              <div className='bg-gray-600 rounded-tl-full border border-violet-400'>
                <div className='grid grid-cols-10 gap-10 py-16 px-8'>
                  <div className='col-start-1 col-span-6 text-white relative'>
                    <img
                      src={project.project_image}
                      alt='img'
                      className='w-full h-full rounded border relative z-10'
                    />
                    <div className='absolute top-0 left-0 mt-8 ml-8 bg-violet-400 w-full h-full rounded shadow-xl'></div>
                  </div>
                  <div className='col-start-7 col-span-4 text-white ml-2'>
                    <h1 className='text-3xl text-violet-400 font-semibold tracking-wide pb-5'>
                      {project.project_name}
                    </h1>
                    <p className=''>{project.description}</p>
                    <div className='flex gap-4 pt-5'>
                      <p>Github Source:</p>
                      <a
                        href={project.source}
                        className='text-white hover:text-blue-500'
                      >
                        {project.project_name}
                      </a>
                    </div>

                    <div className='flex flex-col pb-6 pt-5'>
                      <p className='text-violet-400 font-semibold uppercase'>
                        Built with:
                      </p>
                      {project.builtwith.map((name, index) => (
                        <a
                          key={index}
                          href={name.source}
                          className='text-white hover:text-blue-500'
                        >
                          {name.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <button className='py-2 px-6 border border-violet-500 text-white rounded tracking-wide hover:bg-violet-500 transition-all duration-500 ease-in-out'>
                        View Site
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='bg-gray-700 px-2'>
                <div className='container mx-auto'>
                  <div className='bg-gray-600 rounded-tr-full border border-violet-400'>
                    <div className='grid grid-cols-10 gap-10 py-16 px-8'>
                      <div className='col-start-1 col-span-4 text-white grid justify-items-end mr-2'>
                        <h1 className='text-3xl text-violet-400 font-semibold tracking-wide pb-5 mt-8'>
                          {project.project_name}
                        </h1>
                        <p className='text-right'>{project.description}</p>
                        <div className='flex gap-4 pt-5'>
                          <p>Github Source:</p>
                          <a
                            href={project.source}
                            className='text-white hover:text-blue-500'
                          >
                            {project.project_name}
                          </a>
                        </div>
                        <div className='flex flex-col pb-6 pt-5 text-right'>
                          <p className='text-violet-400 font-semibold uppercase'>
                            Built with:
                          </p>
                          {project.builtwith.map((name, index) => (
                            <a
                              key={index}
                              href={name.source}
                              className='text-white hover:text-blue-500'
                            >
                              {name.name}
                            </a>
                          ))}
                        </div>

                        <div>
                          <button className='py-2 px-6 border border-violet-500 text-white rounded tracking-wide hover:bg-violet-500 transition-all duration-500 ease-in-out'>
                            View Site
                          </button>
                        </div>
                      </div>
                      <div className='col-start-5 col-span-6 text-white relative'>
                        <img
                          src={project.project_image}
                          alt='img'
                          className='w-full h-full rounded relative z-10'
                        />
                        <div className='absolute top-0 right-0 mt-8 mr-8 bg-violet-400 w-full h-full rounded shadow-xl'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
