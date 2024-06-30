import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      I am a highly motivated and enthusiastic <b>Data Engineering</b> with a strong passion for leveraging technology to drive data-driven solutions. With a comprehensive skill set and proficiency in tools such as Python, SQL, Azure and Spark. I focus on creating efficient data pipelines, ingesting, transforming and visualizing data to unlock its full potential.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;