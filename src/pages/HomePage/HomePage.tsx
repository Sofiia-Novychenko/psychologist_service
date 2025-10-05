import { Link } from 'react-router-dom';
import Arrow1Icon from '../../assets/icons/arrow.svg?react';
import PeopleIcon from '../../assets/icons/people_grupe.svg?react';
import QuestionIcon from '../../assets/icons/question.svg?react';
import CheckIcon from '../../assets/icons/check.svg?react';
import LogInForm from '../../components/LogInForm';

function HomePage() {
  return (
    <section className="relative max-w-[1184px] mx-auto pt-19.5 flex items-center justify-between gap-4">
      <div className="absolute -z-10 -right-40 -bottom-60  size-[469px] rounded-full bg-accent blur-[1000px] opacity-60 pointer-events-none"></div>
      <div className="max-w-148.75 tracking-[-0.02em]">
        <h1 className="font-semibold text-[80px] leading-[102%] mb-5">
          The road to the <span className="text-accent italic">depths</span> of
          the human soul
        </h1>
        <p className="max-w-127.5 font-medium text-lg leading-[133%] mb-10">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Link
          to={'/psychologists'}
          className="bg-accent hover:bg-accent-hover w-[235px] rounded-[30px] py-4.5 px-12.5 flex gap-4.5 items-center justify-between text-bg-main font-medium text-xl leading-[120%] tracking-[-0.01em] text-nowrap"
        >
          Get started <Arrow1Icon />
        </Link>
      </div>
      <div className="relative bg-[url('/img/image@2x.jpg')] bg-cover bg-center bg-no-repeat bg-neutral-300 min-w-116 h-131.5 rounded-[10px] ">
        <PeopleIcon className="absolute top-[38px] -right-[35px] size-14 rotate-15" />
        <div className="absolute top-[185px] -left-[35px] -rotate-15 bg-[#54be96] rounded-[10px] size-10 flex justify-center items-center">
          <QuestionIcon />
        </div>
        <div className="absolute bottom-[75px] -left-[102px] bg-accent rounded-[20px] w-[311px] p-8 flex justify-between">
          <div className="bg-bg-main rounded-[13px] size-13.5 flex justify-center items-center">
            <CheckIcon className="size-7.5" />
          </div>
          <div>
            <p className="text-bg-main/60 text-sm">Experienced psychologists</p>
            <p className="text-bg-main font-bold text-2xl">15,000</p>
          </div>
        </div>
      </div>
      <LogInForm />
    </section>
  );
}

export default HomePage;
